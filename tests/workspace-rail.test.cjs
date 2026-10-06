const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
function rail(props){
  let api;
  const code=fs.readFileSync(path.join(__dirname,'../lib/client.js'),'utf8').replace("return { inject: ['slots'","return { WorkspaceRailButtons, inject: ['slots'");
  vm.runInNewContext(code,{window:{__ModuleLoader__:{load:module=>api=module.factory(()=>({createElement:(...args)=>args}))}}});
  return api.WorkspaceRailButtons({...props,t:key=>key==='workspace'?'工作区':'未选择工作区'});
}

test('compact numbers preserve native workspace identity and complete labels after reordering',()=>{
  const selected=[],items=[{workspaceId:'b',name:'Beta'},{workspaceId:'a',title:'Alpha'},{workspaceId:'c',path:'D:\\Projects\\Gamma'}];
  const tree=rail({items,workspaceId:'a',onPick:id=>selected.push(id)}),buttons=tree.slice(2);
  assert.deepEqual(Array.from(buttons,button=>button[2]),['001','002','003']);
  assert.deepEqual(Array.from(buttons,button=>button[1].title),['001 Beta','002 Alpha','003 Gamma']);
  assert.deepEqual(Array.from(buttons,button=>button[1]['aria-pressed']),[false,true,false]);
  assert.equal(buttons[1][1]['aria-label'],'工作区 002 Alpha');
  buttons[0][1].onClick();buttons[2][1].onClick();assert.deepEqual(selected,['b','c']);
});

test('removed and absent workspaces leave no stale number or selected entry',()=>{
  const items=[{workspaceId:'a',title:'Renamed Alpha'}];
  const tree=rail({items,workspaceId:'removed',onPick(){}}),button=tree[2];
  assert.equal(button[2],'001');assert.equal(button[1].title,'001 Renamed Alpha');
  assert.equal(button[1]['aria-pressed'],false);assert.equal(button[1].key,'a');
  assert.equal(rail({items:[],workspaceId:'a',onPick(){}}),null);
});
