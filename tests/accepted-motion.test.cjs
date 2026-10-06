const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');

function runtime(){
  let api,clock=0,sequence=0,motion='full';const timers=new Map(),nodes=new Set(),animations=[];
  class Element {
    constructor(){this.style={clipPath:'',position:'relative'};this.dataset={};this.classes=new Set();this.classList={contains:key=>this.classes.has(key),add:key=>this.classes.add(key),remove:key=>this.classes.delete(key)};nodes.add(this);}
    setAttribute(){}append(node){node.parent=this;}remove(){nodes.delete(this);}querySelectorAll(){return [];}closest(){return null;}matches(){return false;}
    animate(frames,options){const animation={frames,options,finished:Promise.resolve(),cancelled:false,cancel(){this.cancelled=true;}};animations.push(animation);return animation;}
  }
  const body=new Element(),document={body,querySelector(){return null;},querySelectorAll(){return [];},addEventListener(){},createElement:()=>new Element()};
  const code=fs.readFileSync(path.join(__dirname,'../lib/client.js'),'utf8').replace("return { inject: ['slots'","return { createAcceptedMotionController, inject: ['slots'");
  vm.runInNewContext(code,{Element,AbortController,MutationObserver:class{observe(){}disconnect(){}},document,
    getComputedStyle:node=>node.style,performance:{now:()=>clock},
    setTimeout:(fn,delay)=>{const id=++sequence;timers.set(id,{fn,at:clock+delay});return id;},clearTimeout:id=>timers.delete(id),
    window:{__ModuleLoader__:{load:module=>api=module.factory(()=>({createElement(){}}))}}});
  const controller=api.createAcceptedMotionController(()=>motion);
  return {api,controller,nodes,animations,Element,setMotion:value=>motion=value,
    advance(value){const target=clock+value;while(true){const next=[...timers].filter(([,timer])=>timer.at<=target).sort((a,b)=>a[1].at-b[1].at)[0];if(!next)break;clock=next[1].at;timers.delete(next[0]);next[1].fn();}clock=target;},pending:()=>timers.size};
}
test('the menu is fully covered before the upward reveal and restores the original clip',()=>{
  const r=runtime(),node=new r.Element();node.style.clipPath='inset(1px)';let completed=0;
  r.controller.mask(node,{kind:'menu',done:()=>completed++});
  assert.equal(node.dataset.acidMaskDirection,'down-up');assert.equal(node.dataset.acidMaskPhase,'cover');
  const cover=r.animations[0];assert.equal(cover.frames[0].clipPath,'inset(0 0 100% 0)');assert.equal(cover.frames[1].clipPath,'inset(0)');
  r.advance(249);assert.equal(node.dataset.acidMaskPhase,'covered');assert.equal(completed,0);
  r.advance(22);assert.equal(node.dataset.acidMaskPhase,'reveal');
  assert.equal(r.animations.at(-1).frames[1].clipPath,'inset(0 0 100% 0)');
  r.advance(230);assert.equal(completed,1);assert.equal(node.style.clipPath,'inset(1px)');
  assert.equal(r.pending(),0);r.controller.dispose();
});
test('reopening cancels a queued close, while disabling motion completes the latest close',()=>{
  const r=runtime(),node=new r.Element();let closes=0;
  r.controller.closeSurface(node,()=>closes++);r.advance(100);r.controller.reopenSurface(node);r.advance(600);
  assert.equal(closes,0);assert.equal(node.dataset.acidClosing,undefined);
  r.controller.closeSurface(node,()=>closes++);r.setMotion('off');r.controller.cancel();
  assert.equal(closes,1);assert.equal(r.pending(),0);assert.equal(node.dataset.acidClosing,undefined);r.controller.dispose();
});

for(const [direction,hidden] of [['left-right','inset(0 100% 0 0)'],['right-left','inset(0 0 0 100%)']])test(`${direction} sidebar covers horizontally, reverses, and cancels without committing an old transition`,()=>{
  const r=runtime(),node=new r.Element();node.style.clipPath='inset(2px)';let completed=0;
  r.controller.mask(node,{kind:'page',mode:'swap',direction,done:()=>completed++});
  assert.equal(node.dataset.acidMaskDirection,direction);
  assert.deepEqual(Array.from(r.animations[0].frames,frame=>frame.clipPath),[hidden,'inset(0)']);
  r.advance(294);assert.equal(node.dataset.acidMaskPhase,'covered');assert.equal(completed,0);
  r.advance(30);assert.equal(node.dataset.acidMaskPhase,'reveal');
  assert.deepEqual(Array.from(r.animations.at(-1).frames,frame=>frame.clipPath),['inset(0)',hidden]);
  r.controller.mask(node,{kind:'page',mode:'swap',direction,done:()=>completed++});
  assert.ok(r.animations.slice(0,2).every(animation=>animation.cancelled));
  r.advance(600);assert.equal(completed,1);assert.equal(node.style.clipPath,'inset(2px)');
  assert.equal(r.pending(),0);r.controller.dispose();
});
test('off commits immediately; disposal removes temporary layers without calling an unmounted close',()=>{
  const r=runtime(),node=new r.Element(),baseline=r.nodes.size;let closes=0;
  r.setMotion('off');r.controller.closeSurface(node,()=>closes++);assert.equal(closes,1);assert.equal(r.nodes.size,baseline);
  r.setMotion('full');r.controller.closeSurface(node,()=>closes++,'dialog');assert.ok(r.nodes.size>baseline);
  r.controller.dispose();assert.equal(r.nodes.size,baseline);assert.equal(closes,1);assert.equal(r.pending(),0);
});
