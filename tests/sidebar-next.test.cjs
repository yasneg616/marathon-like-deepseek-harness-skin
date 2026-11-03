const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
function load(){
  let api;
  const code=fs.readFileSync(path.join(__dirname,'../lib/client.js'),'utf8').replace("return { inject: ['slots'","return { assignIdentity, stripPlacement, IDENTITY_COLORS, inject: ['slots'");
  vm.runInNewContext(code,{window:{__ModuleLoader__:{load:module=>api=module.factory(()=>({createElement:(...args)=>args}))}}});
  return api;
}
test('identity colours are assigned once per workspace and stay stable',()=>{
  const {assignIdentity,IDENTITY_COLORS}=load();
  const first=assignIdentity({},['a','b','c']);
  assert.equal(first.changed,true);assert.deepEqual({...first.state.map},{a:0,b:1,c:2});
  const again=assignIdentity(first.state,['c','a','b']);
  assert.equal(again.changed,false);assert.deepEqual({...again.state.map},{a:0,b:1,c:2});
  const created=assignIdentity(again.state,['a','b','c','d']);
  assert.equal(created.state.map.d,3);assert.equal(created.state.next,4);
  assert.ok(IDENTITY_COLORS.length>=8);assert.equal(new Set(IDENTITY_COLORS).size,IDENTITY_COLORS.length);
  const wrapped=assignIdentity({next:IDENTITY_COLORS.length-1,map:{}},['x','y']);
  assert.equal(wrapped.state.map.x,IDENTITY_COLORS.length-1);assert.equal(wrapped.state.map.y,0);
  const repaired=assignIdentity({next:2,map:{bad:'no',big:99}},['bad','big']);
  assert.equal(repaired.state.map.bad,2);assert.equal(repaired.state.map.big,3);
});
test('strips interlock: equal strips alternate columns, right column offset half a strip',()=>{
  const {stripPlacement,IDENTITY_COLORS}=load();
  const all=[0,1,2,3,4,5].map(i=>({...stripPlacement(i)}));
  assert.deepEqual(all.map(p=>p.column),[1,2,1,2,1,2]);
  assert.deepEqual(all.map(p=>p.row),[1,2,3,4,5,6]);
  assert.ok(all.every(p=>p.span===2));
  // same column never collides; the command block owns column 2, row 1
  for(let i=2;i<all.length;i++)assert.equal(all[i].row,all[i-2].row+all[i-2].span);
  assert.equal(all[1].row,2);
  assert.deepEqual([...IDENTITY_COLORS.slice(0,6)],['#C6F500','#FF2D78','#FF6A1A','#2B45FF','#9B4DFF','#00D1E0']);
});
test('crossing another strip on the way to the flyout cancels the pending switch',t=>{
  t.mock.timers.enable({apis:['setTimeout']});
  const events={},effects=[],refs=[],states=[];
  const groups=['a','b'].map(id=>{
    const row={dataset:{rowKey:'workspace:'+id},classList:{contains:()=>false},getAttribute:()=>null,querySelector:()=>null};
    const group={classList:{contains:()=>true},querySelector:()=>row,getBoundingClientRect:()=>({top:20,bottom:80,right:id==='a'?60:110}),
      setAttribute(){},removeAttribute(){}};
    group.closest=selector=>selector==='[data-acid-ws-strip]'?group:null;
    return group;
  });
  const list={children:groups,contains:node=>groups.includes(node),addEventListener:(type,fn)=>{events[type]=fn;}};
  states.push(list);
  let stateIndex=0,refIndex=0,api;
  const React={
    createElement:(type,props,...children)=>({type,props,children}),
    useState(initial){const i=stateIndex++;if(!(i in states))states[i]=initial;return [states[i],value=>{states[i]=value;}];},
    useRef(initial){const i=refIndex++;return refs[i]??={current:initial};},
    useMemo:fn=>fn(),useSyncExternalStore:(_subscribe,snapshot)=>snapshot(),useLayoutEffect(){},
    useEffect:fn=>effects.push(fn),
  };
  const code=fs.readFileSync(path.join(__dirname,'../lib/client.js'),'utf8').replace("return { inject: ['slots'","return { SidebarNext, inject: ['slots'");
  const document={querySelector:()=>null,activeElement:null};
  const window={addEventListener(){},__ModuleLoader__:{load:module=>api=module.factory(name=>name==='react'?React:{createPortal:element=>element})}};
  vm.runInNewContext(code,{document,window,setTimeout,clearTimeout});
  const flyout=()=>{
    stateIndex=refIndex=0;
    return api.SidebarNext({items:[{workspaceId:'a'},{workspaceId:'b'}]}).children[1];
  };
  const [first,second]=groups;
  const tick=ms=>t.mock.timers.tick(ms);
  flyout();effects.at(-1)();
  events.pointerover({target:first});tick(90);
  assert.equal(flyout().props.state.id,'a');
  assert.equal(flyout().props.state.anchor.left,60);
  events.pointerout({target:first,relatedTarget:second});
  events.pointerover({target:second});tick(180);
  assert.equal(flyout().props.state.id,'a');
  events.pointerout({target:second,relatedTarget:{closest:selector=>selector==='.acid-ws-flyout'?{}:null}});
  flyout().props.onEnter();tick(400);
  assert.equal(flyout().props.state.id,'a');
  flyout().props.onLeave();
  events.pointerover({target:second});tick(350);
  assert.equal(flyout().props.state.id,'b');
  assert.equal(flyout().props.state.anchor.left,110);
});
function loadNumbering(){
  let api;const store={};
  const code=fs.readFileSync(path.join(__dirname,'../lib/client.js'),'utf8').replace("return { inject: ['slots'","return { workspaceIdentity, normalizeWorkspaceColors, identityInk, inject: ['slots'");
  const localStorage={getItem:k=>k in store?store[k]:null,setItem:(k,v)=>{store[k]=String(v);}};
  vm.runInNewContext(code,{localStorage,window:{__ModuleLoader__:{load:module=>api=module.factory(()=>({createElement:(...args)=>args}))}}});
  return {api,store};
}
test('numbering is stable and append-style: new workspaces get count + 1',()=>{
  const {rankWorkspaces}=loadNumbering().api;
  const seed=rankWorkspaces(null,['a','b','c']);
  assert.deepEqual([...seed.order],['a','b','c']);assert.deepEqual({...seed.numbers},{a:1,b:2,c:3});
  // native list puts the new workspace on top; it is still appended as 004
  const added=rankWorkspaces(seed.order,['d','a','b','c']);
  assert.deepEqual({...added.numbers},{a:1,b:2,c:3,d:4});
  // delete closes the gap without reshuffling the remaining order
  const removed=rankWorkspaces(added.order,['d','a','c']);
  assert.deepEqual({...removed.numbers},{a:1,c:2,d:3});
  // a reorder the user performed is adopted wholesale
  const moved=rankWorkspaces(removed.order,['c','a','d'],true);
  assert.deepEqual({...moved.numbers},{c:1,a:2,d:3});
  // empty native list (still loading) never wipes the stored order
  assert.deepEqual([...rankWorkspaces(moved.order,[]).order],['c','a','d']);
});
test('workspaceNumbers persists order and only adopts permutations after a reorder',()=>{
  const {api,store}=loadNumbering();
  const items=ids=>ids.map(workspaceId=>({workspaceId}));
  assert.deepEqual({...api.workspaceNumbers(items(['a','b']))},{a:1,b:2});
  assert.deepEqual(JSON.parse(store['dsh-industrial-acid-skin:workspace-order']),['a','b']);
  assert.deepEqual({...api.workspaceNumbers(items(['n','a','b']))},{a:1,b:2,n:3});
  // native order differs without a user reorder: numbers stay put
  assert.deepEqual({...api.workspaceNumbers(items(['b','n','a']))},{a:1,b:2,n:3});
  api.markWorkspaceReorder();
  assert.deepEqual({...api.workspaceNumbers(items(['b','n','a']))},{b:1,n:2,a:3});
  assert.deepEqual([...api.moveInOrder(['a','b','c'],'c','a')],['c','a','b']);
  assert.deepEqual([...api.moveInOrder(['a','b','c'],'a',null)],['b','c','a']);
});
test('v3 palette migration re-maps existing workspaces by number once, then stays persisted',()=>{
  const {api}=loadNumbering();
  const old={next:3,map:{a:1,b:0,c:2}};
  const m=api.migrateIdentity(old,['a','b','c'],{c:1,a:2,b:3});
  assert.equal(m.migrated,true);assert.deepEqual({...m.state.map},{c:0,a:1,b:2});assert.equal(m.state.v,3);
  assert.equal(api.migrateIdentity(m.state,['a','b','c'],{a:1,b:2,c:3}).migrated,false);
  assert.equal(api.migrateIdentity(old,[],{}).migrated,false);
});

test('custom workspace colours override identity without changing numbering or the default slots',()=>{
  const {api,store}=loadNumbering(),ids=['a','b'],numbers={a:1,b:2};
  const defaults=api.workspaceIdentity(ids,numbers),saved=store['dsh-industrial-acid-skin:workspace-identity'];
  const colors=api.normalizeWorkspaceColors({a:'#123abc',b:'red;display:none',other:'#000000'});
  assert.deepEqual({...colors},{a:'#123ABC',other:'#000000'});
  const custom=api.workspaceIdentity(['b','a'],{b:1,a:2},colors);
  assert.equal(custom.a,'#123ABC');assert.equal(custom.b,defaults.b);
  assert.equal(store['dsh-industrial-acid-skin:workspace-identity'],saved);
  assert.deepEqual({...api.workspaceIdentity(ids,numbers,{})},{...defaults});
  assert.deepEqual({...api.normalizeWorkspaceColors(null)},{});
  assert.deepEqual({...api.normalizeWorkspaceColors(['#FFFFFF'])},{});
  assert.equal(api.identityInk('#123ABC'),'#0B0C0D');
  for(const color of ['#000000','#FFFFFF','#777777','#123ABC'])assert.ok(api.contrast(api.identityInk(color,true),color)>=4.5);
});
