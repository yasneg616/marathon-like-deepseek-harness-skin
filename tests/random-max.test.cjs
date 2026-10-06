const test = require('node:test'), assert = require('node:assert/strict');
const fs = require('node:fs'), path = require('node:path'), vm = require('node:vm');
const normalize = value => JSON.parse(JSON.stringify(value));

function fixture(selectResult = { ok: true }) {
  let cursor = 0, hooks = [], effects = [], api, state = {
    current: {provider:'p', model:'m', reasoningEffort:'high'}, pending:null, status:'ready', failures:[],
    groups:[{id:'p', name:'Provider', models:[{id:'m', name:'Model', reasoning:{defaultEffort:'high', efforts:[{id:'high', name:'High'}, {id:'max', name:'Max'}]}}]}]
  };
  const calls = [];
  const React = {
    createElement(type, props, ...children) { return {type, props:props || {}, children:children.flat()}; },
    useState(initial) { const i=cursor++; if (!hooks[i]) hooks[i]={value:initial}; return [hooks[i].value, value=>hooks[i].value=value]; },
    useRef(initial) { const i=cursor++; return hooks[i] ||= {current:initial}; },
    useSyncExternalStore(_subscribe, get) { return get(); }, useId() { return 'qa-native-max'; },
    useEffect(fn, dependencies) {
      const i=cursor++, old=hooks[i];
      if (!old || dependencies.some((item,j)=>item!==old.dependencies[j])) { hooks[i]={dependencies}; effects.push(fn); }
    },
    useLayoutEffect() { cursor++; }
  };
  const original = fs.readFileSync(path.join(__dirname, '../lib/client.js'), 'utf8');
  // Expose a private component only in this test VM, keeping the package API unchanged.
  const compiled = original.replace("return { inject: ['slots'", "return { IndustrialModelControls, inject: ['slots'");
  vm.runInNewContext(compiled, {
    window:{__ModuleLoader__:{load:module=>api=module.factory(name=>name==='react'?React:{createPortal:node=>node})}},
    document:{activeElement:null, body:{},addEventListener(){},removeEventListener(){}},
    setTimeout:()=>0,clearTimeout(){}
  });
  const props = {locked:false, available:true, directory:{subscribe(){},getSnapshot:()=>state}, load(){}, t:key=>key,
    useAppearance:()=>({mode:'day',effectiveMotion:'full',palettes:api.DEFAULT_PALETTES}),
    async select(selection) { calls.push(normalize(selection)); if(selectResult.ok) state.current={...selection}; return selectResult; }
  };
  function render() { cursor=0; const tree=api.IndustrialModelControls(props); for(const fn of effects.splice(0)) fn(); return tree; }
  function find(tree, predicate) { if (!tree || typeof tree!=='object') return; if(predicate(tree))return tree; for(const child of tree.children || []) { const found=find(child,predicate);if(found)return found; } }
  render(); let tree=render();
  find(tree,node=>node.props.className==='acid-effort-trigger').props.onClick({currentTarget:{focus(){}}});
  render();
  return {api, calls, state, render, range:()=>find(render(),node=>node.type==='input'&&node.props.type==='range'),
    output:()=>find(render(),node=>node.type==='output'), async settle(){await Promise.resolve(); await Promise.resolve();render();} };
}

test('native drag keeps its continuous position after acknowledgement and sends only a supported enum', async () => {
  const f=fixture(), range=f.range();
  range.props.onPointerDown({pointerId:1,currentTarget:{setPointerCapture(){}}});
  range.props.onChange({target:{value:'.63'}});
  assert.equal(f.calls.length,0);
  f.range().props.onPointerUp({currentTarget:{value:'.63'}});
  await f.settle();
  assert.deepEqual(f.calls,[{provider:'p',model:'m',reasoningEffort:'max'}]);
  assert.equal(f.range().props.value,.63); assert.equal(f.output().children[0],'High → Max');
  f.state.current={provider:'p',model:'m',reasoningEffort:'high'};f.render();
  assert.equal(f.range().props.value,0);
});
test('keyboard change and keyup do not erase the draft or duplicate a pending commit', async () => {
  const f=fixture(), range=f.range();
  range.props.onChange({target:{value:'.6'}});
  range.props.onKeyUp({key:'ArrowRight',currentTarget:{value:'.6'}});
  await f.settle();
  assert.equal(f.range().props.value,.6);assert.equal(f.calls.length,1);
});
test('failed host save rolls back the visual position; same-level movement keeps it without a request', async () => {
  const f=fixture({ok:false,error:{code:'session/writer-held',message:'busy'}});
  f.range().props.onChange({target:{value:'.65'}});await f.settle();
  assert.equal(f.range().props.value,0);
  f.range().props.onChange({target:{value:'.3'}});await f.settle();
  assert.equal(f.range().props.value,.3);assert.equal(f.calls.length,1);
});
test('actual sparse, reordered and single-level catalogs determine charge without synthetic tiers', () => {
  const {api}=fixture();
  assert.equal(api.effortVisual([{id:'max',name:'Max'}],0).amount,1);
  assert.equal(api.effortVisual([{id:'low',name:'Low'},{id:'high',name:'High'}],1).amount,0);
  const levels=[{id:'low',name:'Low'},{id:'high',name:'High'},{id:'max',name:'Max'}];
  assert.equal(api.effortVisual(levels,1).amount,0);
  assert.ok(api.effortVisual(levels,1.5).amount>0);assert.equal(api.effortVisual(levels,2).amount,1);
});
