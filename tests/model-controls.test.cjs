const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
let api;
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../lib/client.js'), 'utf8'), {
  window: { __ModuleLoader__: { load: mod => { api = mod.factory(() => ({ createElement() {} })); } } }
});
const normalize = value => JSON.parse(JSON.stringify(value));
const base = () => ({ current:{provider:'p',model:'m'}, groups:[{id:'p',name:'Provider',models:[{id:'m',name:'Model',reasoning:{defaultEffort:'high',efforts:[{id:'high',name:'High'},{id:'max',name:'Max'}]}}]}], pending:null });

test('advertised ids and provider default determine the slider; no extra tiers are invented', () => {
  const state=base(), view=api.modelControlSnapshot(state);
  assert.deepEqual(normalize(view.levels),[{id:'high',name:'High'},{id:'max',name:'Max'}]);
  assert.equal(view.index,0);assert.equal(view.max,false);
  state.current.reasoningEffort='max';const max=api.modelControlSnapshot(state);
  assert.equal(max.index,1);assert.equal(max.max,true);
  assert.deepEqual(normalize(api.effortSelection(state.current,max.levels[0])),{provider:'p',model:'m',reasoningEffort:'high'});
});
test('provider default is omitted on the wire and a model without reasoning has no slider', () => {
  const state=base();delete state.groups[0].models[0].reasoning.defaultEffort;
  const view=api.modelControlSnapshot(state);
  assert.equal(view.index,0);assert.equal(view.levels[0].id,undefined);
  assert.deepEqual(normalize(api.effortSelection(state.current,view.levels[0])),{provider:'p',model:'m'});
  delete state.groups[0].models[0].reasoning;
  assert.equal(api.modelControlSnapshot(state).levels.length,0);
});
test('unavailable providers and stale efforts retain durable values without silently changing them', () => {
  const state=base();state.current.reasoningEffort='legacy';
  assert.equal(api.modelControlSnapshot(state).index,-1);
  assert.equal(state.current.reasoningEffort,'legacy');
  state.groups=[];state.retainedEffort='Legacy';const view=api.modelControlSnapshot(state);
  assert.equal(view.effortLabel,'Legacy');assert.equal(view.levels.length,0);
  assert.equal(api.effortSelection(null,{id:'max'}),undefined);
});
test('popover remains within the usable viewport on a narrow, short window', () => {
  const position=api.modelPopoverPlacement({top:400,bottom:432,right:306},{height:480},{width:320,height:600},136);
  assert.equal(position.width,296);assert.ok(position.left>=12);assert.ok(position.left+position.width<=308);
  assert.ok(position.top>=136);assert.ok(position.top+position.maxHeight<=600);
});
