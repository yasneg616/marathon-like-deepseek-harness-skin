const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');

function runtime(){
  let api,clock=0,sequence=0,motion='full';const timers=new Map(),nodes=new Set(),animations=[];
  class Element {
    constructor(){this.style={clipPath:'',position:'relative'};this.dataset={};this.classes=new Set();this.classList={contains:key=>this.classes.has(key),add:key=>this.classes.add(key),remove:key=>this.classes.delete(key)};nodes.add(this);}
    setAttribute(){}append(node){node.parent=this;}remove(){nodes.delete(this);}querySelectorAll(){return [];}closest(){return null;}matches(){return false;}
    animate(frames,options){const animation={frames,options,finished:Promise.resolve(),cancelled:false,cancel(){this.cancelled=true;}};animations.push(animation);return animation;}
  }
  const events={};
  const body=new Element(),document={body,querySelector(){return null;},querySelectorAll(){return [];},
    addEventListener(type,listener){events[type]=listener;},createElement:()=>new Element()};
  const code=fs.readFileSync(path.join(__dirname,'../lib/client.js'),'utf8').replace("return { inject: ['slots'","return { createAcceptedMotionController, inject: ['slots'");
  vm.runInNewContext(code,{Element,AbortController,MutationObserver:class{observe(){}disconnect(){}},document,
    getComputedStyle:node=>node.style,performance:{now:()=>clock},
    setTimeout:(fn,delay)=>{const id=++sequence;timers.set(id,{fn,at:clock+delay});return id;},clearTimeout:id=>timers.delete(id),
    window:{__ModuleLoader__:{load:module=>api=module.factory(()=>({createElement(){}}))}}});
  const controller=api.createAcceptedMotionController(()=>motion);
  return {api,controller,nodes,animations,Element,events,setMotion:value=>motion=value,
    advance(value){const target=clock+value;while(true){const next=[...timers].filter(([,timer])=>timer.at<=target).sort((a,b)=>a[1].at-b[1].at)[0];if(!next)break;clock=next[1].at;timers.delete(next[0]);next[1].fn();}clock=target;},pending:()=>timers.size};
}
test('native menu buttons skip decoration; regular buttons are decorated, and only key buttons take hover',()=>{
  const r=runtime();
  const button=(menuSelector)=>{
    const node=new r.Element();
    node.contains=()=>false;
    node.closest=selector=>selector==='button'||(menuSelector&&selector.includes(menuSelector))?node:null;
    node.prepend=layer=>{node.layer=layer;};
    node.querySelector=selector=>selector===':scope > .acid-fx'?node.layer:null;
    return node;
  };
  const menuItem=button('[role="menuitem"]'),menuButton=button('[data-menu-material]'),regular=button(),key=button('.acid-ws-command');
  for(const target of [menuItem,menuButton,regular,key])r.events.pointerover({target,relatedTarget:null});
  for(const target of [menuItem,menuButton]){
    assert.equal(target.layer,undefined);
    assert.equal(target.dataset.acidFeedback,undefined);
    assert.equal(target.classList.contains('acid-layered'),false);
  }
  assert.equal(regular.layer.className,'acid-fx');
  assert.equal(regular.dataset.acidFeedback,undefined,'plain buttons no longer flash on hover');
  assert.equal(key.layer.className,'acid-fx');
  assert.equal(key.dataset.acidFeedback,'hover');
  r.controller.dispose();
});
test('a menu gets the one-column slab: falls in, keeps falling away, and restores the original clip',()=>{
  const r=runtime(),node=new r.Element();node.style.clipPath='inset(1px)';let completed=0;
  r.controller.mask(node,{kind:'menu',done:()=>completed++});
  assert.equal(node.dataset.acidMaskDirection,'down-up');assert.equal(node.dataset.acidMaskPhase,'cover');
  const cover=r.animations[0];assert.equal(cover.frames[0].clipPath,'inset(0 0 100% 0)');assert.equal(cover.frames[1].clipPath,'inset(0)');
  assert.equal([...r.nodes].find(entry=>entry.className==='acid-approved-mask').dataset.cols,'1','one column');
  r.advance(59);assert.equal(node.dataset.acidMaskPhase,'cover');
  r.advance(1);assert.equal(node.dataset.acidMaskPhase,'covered');assert.equal(completed,0);
  r.advance(15);assert.equal(node.dataset.acidMaskPhase,'reveal');
  assert.equal(r.animations.at(-1).frames[1].clipPath,'inset(100% 0 0 0)','the slab leaves downwards');
  r.advance(90);assert.equal(completed,1);assert.equal(node.style.clipPath,'inset(1px)');
  assert.equal(r.pending(),0);r.controller.dispose();
});
test('reopening cancels a queued close, while disabling motion completes the latest close',()=>{
  const r=runtime(),node=new r.Element();let closes=0;
  r.controller.closeSurface(node,()=>closes++);r.advance(100);r.controller.reopenSurface(node);r.advance(600);
  assert.equal(closes,0);assert.equal(node.dataset.acidClosing,undefined);
  r.controller.closeSurface(node,()=>closes++);r.setMotion('off');r.controller.cancel();
  assert.equal(closes,1);assert.equal(r.pending(),0);assert.equal(node.dataset.acidClosing,undefined);r.controller.dispose();
});

for(const [direction,hidden,away] of [['left-right','inset(0 100% 0 0)','inset(0 0 0 100%)'],['right-left','inset(0 0 0 100%)','inset(0 100% 0 0)']])test(`${direction} panel slab passes through horizontally in a three-column wave and cancels without committing an old transition`,()=>{
  const r=runtime(),node=new r.Element();node.style.clipPath='inset(2px)';let completed=0;
  r.controller.mask(node,{kind:'page',mode:'swap',direction,done:()=>completed++});
  assert.equal(node.dataset.acidMaskDirection,direction);
  assert.deepEqual(Array.from(r.animations[0].frames,frame=>frame.clipPath),[hidden,'inset(0)']);
  assert.deepEqual(r.animations.slice(0,3).map(animation=>animation.options.delay),[0,30,60],'columns enter in a 30ms wave');
  r.advance(179);assert.equal(node.dataset.acidMaskPhase,'cover');
  r.advance(1);assert.equal(node.dataset.acidMaskPhase,'covered');assert.equal(completed,0);
  r.advance(45);assert.equal(node.dataset.acidMaskPhase,'reveal');
  assert.deepEqual(Array.from(r.animations.at(-1).frames,frame=>frame.clipPath),['inset(0)',away]);
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
test('event size sets the slab: workspace four columns printed with the number, quiet one short column',()=>{
  const r=runtime(),node=new r.Element();
  r.controller.mask(node,{kind:'workspace',mode:'swap',info:{number:'004',label:'WS 004 · ARCHIVE'}});
  const sheet=[...r.nodes].find(entry=>entry.className==='acid-approved-mask');
  assert.equal(sheet.dataset.cols,'4');
  const columns=[...r.nodes].filter(entry=>entry.className==='acid-mask-col');
  assert.deepEqual(columns.map(column=>column.dataset.face),['colour','dither','hud','mark']);
  assert.match(columns[0].innerHTML,/acid-mask-number">004</);
  assert.match(columns[2].innerHTML,/WS 004 · ARCHIVE/);
  r.controller.mask(node,{kind:'workspace',mode:'swap',info:{label:'<img src=x onerror=alert(1)>'}});
  const escaped=[...r.nodes].filter(entry=>entry.className==='acid-mask-col'&&entry.dataset.face==='hud').at(-1);
  assert.doesNotMatch(escaped.innerHTML,/<img/);
  r.setMotion('quiet');r.controller.mask(node,{kind:'workspace',mode:'swap'});
  const quiet=[...r.nodes].filter(entry=>entry.className==='acid-approved-mask').at(-1);
  assert.equal(quiet.dataset.cols,'1');
  r.controller.dispose();
});
