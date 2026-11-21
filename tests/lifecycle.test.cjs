const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');

function harness(options = {}) {
  const styles = new Set(), attributes = new Map([['data-unrelated', 'preserve']]);
  const properties = new Map([['--acid-header-max', '180px']]);
  const disposers = [], slots = new Map(), layers = new Map(), events = new Map(), storageEvents = new Set();
  const windowEvents = new Map([['storage', storageEvents]]);
  const storage = new Map(Object.entries(options.storage || {}));
  let nativeScheme = options.nativeScheme || 'light';
  let nativeGrouping = options.nativeGrouping || 'workspace';
  let exports;
  const html = {
    getAttribute: key => attributes.get(key) ?? null,
    setAttribute: (key, value) => attributes.set(key, value),
    removeAttribute: key => attributes.delete(key),
    style: { getPropertyValue: key => properties.get(key) ?? '', getPropertyPriority: () => '', setProperty: (key, value) => properties.set(key, value), removeProperty: key => properties.delete(key) }
  };
  const bodies=new Set();
  const makeNode=()=>({dataset:{},style:{},classList:{add(){},remove(){}},setAttribute(){},querySelectorAll(){return []},remove(){styles.delete(this);bodies.delete(this)}});
  const context = vm.createContext({
    Element: class Element {},AbortController,MutationObserver:class{observe(){}disconnect(){}},setTimeout,clearTimeout,innerHeight:1000,
    window: { addEventListener: (name, fn) => { if (!windowEvents.has(name)) windowEvents.set(name, new Set()); windowEvents.get(name).add(fn); }, removeEventListener: (name, fn) => windowEvents.get(name)?.delete(fn), __ModuleLoader__: { load: declaration => { exports = declaration.factory(() => ({ createElement: (...args) => args, useState: value => [value, () => {}], useEffect: () => {}, useLayoutEffect: () => {}, useRef: current => ({ current }), useId: () => ':acid:', useSyncExternalStore: (_subscribe, getSnapshot) => getSnapshot() })); } } },
    document: { documentElement: html, head: { appendChild: node => styles.add(node) },body:{append:node=>bodies.add(node)},addEventListener(){},removeEventListener(){},querySelectorAll(){return []},querySelector(){return null},createElement:makeNode },
    localStorage: { getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value) }
  });
  vm.runInContext(fs.readFileSync(path.join(root, 'lib/client.js'), 'utf8'), context);
  const ctx = {
    uiWorkspace: { view: { setGroupBy: mode => { nativeGrouping = mode; } } },
    inject: (_names, fn) => ctx.effect(() => fn(ctx)),
    effect: fn => { const dispose = fn(); if (typeof dispose === 'function') disposers.push(dispose); return dispose; },
    locale: { register: () => () => {} },
    on: (name, fn) => { events.set(name, fn); disposers.push(() => events.delete(name)); },
    slots: { inject: (_name, fn) => ctx.effect(fn), register: (options, Component) => { slots.set(options.id, { options, Component }); return () => slots.delete(options.id); } },
    theme: { getTheme: () => ({ active: { colorScheme: nativeScheme } }), overrideTokens: (source, tokens) => { const layer = { tokens }; layers.set(source, layer); events.get('theme/change')?.({ active: { colorScheme: nativeScheme } }); return () => { if (layers.get(source) === layer) layers.delete(source); }; } }
  };
  return { exports, ctx, html, styles, attributes, properties, slots, layers, storage, events, storageEvents, windowEvents, getGrouping: () => nativeGrouping, changeTheme: value => { nativeScheme = value; events.get('theme/change')?.({ active: { colorScheme: value } }); }, notifyStorage: key => { for (const fn of storageEvents) fn({ key }); }, dispose: () => disposers.reverse().forEach(fn => fn()) };
}

test('mount and withdraw only owned visuals, preserving another plugin and prior root state', () => {
  const runtime = harness();
  const unrelated = { dataset: { plugin: 'other-plugin' } };
  runtime.styles.add(unrelated);
  runtime.exports.apply(runtime.ctx, {});
  assert.equal(runtime.styles.size, 2);
  assert.equal(runtime.slots.size, 7);
  assert.ok(runtime.slots.has('industrial.marathon'));
  assert.equal(runtime.attributes.get('data-industrial-canvas'), 'paper');
  assert.equal(runtime.layers.size, 1);
  runtime.dispose();
  assert.deepEqual([...runtime.styles], [unrelated]);
  assert.equal(runtime.slots.size, 0);
  assert.equal(runtime.layers.size, 0);
  assert.equal(runtime.events.size, 0);
  assert.equal(runtime.storageEvents.size, 0);
  assert.ok([...runtime.windowEvents.values()].every(listeners => listeners.size === 0));
  assert.equal(runtime.attributes.has('data-industrial-mode'), false);
  assert.equal(runtime.attributes.has('data-industrial-acid'), false);
  assert.equal(runtime.attributes.has('data-industrial-shell'), false);
  assert.equal(runtime.attributes.has('data-industrial-motion'), false);
  assert.equal(runtime.attributes.get('data-unrelated'), 'preserve');
  assert.equal(runtime.properties.get('--acid-header-max'), '180px');
});

test('day, night and adaptive token layers preserve semantic status and user preference ownership', () => {
  const { exports } = harness();
  const paper = exports.tokenOverrides('paper'), night = exports.tokenOverrides('night'), adaptive = exports.tokenOverrides('adaptive');
  for (const pair of Object.values(paper)) assert.equal(pair.light, pair.dark);
  for (const pair of Object.values(night)) assert.equal(pair.light, pair.dark);
  assert.notEqual(paper['--dsw-alias-bg-base'].light, night['--dsw-alias-bg-base'].light);
  assert.notEqual(adaptive['--dsw-alias-bg-base'].light, adaptive['--dsw-alias-bg-base'].dark);
  for (const tokens of [paper, night, adaptive]) {
    for (const pair of Object.values(tokens)) { assert.equal(typeof pair.light, 'string'); assert.equal(typeof pair.dark, 'string'); }
    for (const kind of ['error', 'success', 'warn']) assert.equal(tokens[`--dsw-alias-state-${kind}-primary`], undefined);
  }
});


test('native and skin appearance combinations always keep user-message bubbles readable', () => {
  const cases = [
    ['paper', 'light', 'day'], ['paper', 'dark', 'day'],
    ['night', 'light', 'night'], ['night', 'dark', 'night'],
    ['adaptive', 'light', 'day'], ['adaptive', 'dark', 'night']
  ];
  for (const [canvas, nativeScheme, expectedMode] of cases) {
    const runtime = harness({ nativeScheme, storage: { 'dsh-industrial-acid-skin:canvas': canvas } });
    runtime.exports.apply(runtime.ctx);
    assert.equal(runtime.attributes.get('data-industrial-mode'), expectedMode);
    const scheme = runtime.exports.makeScheme(expectedMode, runtime.exports.DEFAULT_PALETTES[expectedMode]);
    const tokens = [...runtime.layers.values()][0].tokens;
    const schemeKey = nativeScheme === 'dark' ? 'dark' : 'light';
    for (const name of ['--dsw-specific-bubble', '--dsw-specific-bubble-highlight']) {
      assert.equal(tokens[name][schemeKey], scheme.tokens[name], canvas + ' / ' + nativeScheme + ': ' + name);
      assert.ok(runtime.exports.contrast(tokens['--dsw-alias-label-primary'][schemeKey], tokens[name][schemeKey]) >= 4.5,
        canvas + ' / ' + nativeScheme + ': unreadable ' + name);
    }
    runtime.dispose();
  }
});

test('masthead derives actual workspace ordinal, including absence and reordered workspaces', () => {
  const { exports } = harness();
  const items = [{ title: 'Alpha', sessionIds: ['a'] }, { title: 'Beta', sessionIds: ['b'] }];
  const context = exports.workspaceContext(items, 'b');
  assert.equal(context.index, 2); assert.equal(context.title, 'Beta');
  assert.equal(exports.workspaceContext(items, undefined), null);
  assert.equal(exports.workspaceContext(items.reverse(), 'b').index, 1);
  assert.equal(exports.workspaceContext([{ workspaceId: 'x', sessionIds: ['s'] }, { workspaceId: 'y', sessionIds: ['b'] }], 'b', { x: 1, y: 7 }).index, 7);
});

test('native vector spells the exact two names in row reading order', () => {
  const svg = fs.readFileSync(path.join(root, 'assets/masthead.svg'), 'utf8');
  const letters = [...svg.matchAll(/data-harness-letter="([A-Z])" x="(\d+)" y="(\d+)"/g)];
  assert.equal(letters.map(row => row[1]).join(''), 'HARNESS');
  for (let i = 1; i < letters.length; i++) assert.ok(Number(letters[i][3]) > Number(letters[i-1][3]) || (letters[i][3] === letters[i-1][3] && Number(letters[i][2]) > Number(letters[i-1][2])));
  assert.equal([...svg.matchAll(/data-letter="([A-Z])"/g)].map(row => row[1]).join(''), 'DEEPSEEK');
});

test('workspace numbering crosses decimal boundaries and caps 1000 at 999 plus', () => {
  const {formatWorkspaceIndex:format}=harness().exports;
  for(const [value,expected] of [[1,'001'],[9,'009'],[10,'010'],[99,'099'],[100,'100'],[999,'999'],[1000,'999＋'],[1001,'999＋'],[Number.MAX_SAFE_INTEGER,'999＋']])assert.equal(format(value),expected);
  for(const invalid of [0,-1,1.5,NaN,Infinity,'1',Number.MAX_SAFE_INTEGER+1])assert.throws(()=>format(invalid),/positive safe integer/);
});

test('motion preference updates and restores only owned markers on withdrawal', () => {
  const key='dsh-industrial-acid-skin:motion';const runtime=harness({storage:{[key]:'quiet'}});
  runtime.exports.apply(runtime.ctx,{});
  assert.equal(runtime.attributes.get('data-industrial-shell'),'planar-v2');
  assert.equal(runtime.attributes.get('data-industrial-motion'),'quiet');
  runtime.storage.set(key,'off');runtime.notifyStorage(key);
  assert.equal(runtime.attributes.get('data-industrial-motion'),'off');
  runtime.storage.set(key,'invalid');runtime.notifyStorage(key);
  assert.equal(runtime.attributes.get('data-industrial-motion'),'full');
  runtime.dispose();assert.equal(runtime.attributes.has('data-industrial-shell'),false);
  assert.equal(runtime.attributes.has('data-industrial-motion'),false);
});

test('Host rejects invalid options before applying any effects', async () => {
  const host = await import('../index.js');
  const ctx = { inject: () => assert.fail('Invalid config must not touch runtime') };
  assert.throws(() => host.apply(ctx, { mastheadHeight: 500 }), /mastheadHeight/);
  assert.throws(() => host.apply(ctx, { canvas: 'neon' }), /canvas/);
  assert.throws(() => host.apply(ctx, { diagnostics: 'true' }), /diagnostics/);
  // The window-control host registers on the same connection seam, so both injects must arrive.
  const validCtx = { inject: names => assert.ok(
    JSON.stringify(names) === JSON.stringify(['connection', 'sessionQuery'])
    || JSON.stringify(names) === JSON.stringify(['connection']),
    `unexpected inject: ${JSON.stringify(names)}`) };
  host.apply(validCtx, { diagnostics: false });
  host.apply(validCtx, { canvas: 'night', diagnostics: false });
});

test('legacy canvas preferences survive and adaptive mode tracks the native scheme without replacing tokens', () => {
  for (const canvas of ['paper', 'night', 'adaptive']) {
    const runtime = harness({ storage: { 'dsh-industrial-acid-skin:canvas': canvas }, nativeScheme: 'light' });
    runtime.exports.apply(runtime.ctx, {});
    assert.equal(runtime.attributes.get('data-industrial-mode'), canvas === 'night' ? 'night' : 'day');
    const layer = [...runtime.layers.values()][0];
    runtime.changeTheme('dark');
    assert.equal(runtime.attributes.get('data-industrial-mode'), canvas === 'paper' ? 'day' : 'night');
    assert.equal([...runtime.layers.values()][0], layer);
    assert.equal(runtime.storage.size, 1);
    runtime.dispose();
  }
});

test('separate palettes restore from storage and malformed data cannot add CSS declarations', () => {
  const key = 'dsh-industrial-acid-skin:palettes';
  const saved = JSON.stringify({ day: { accent: '#ff953d' }, night: { signal: '#8058eb', surface: '#10191f', text: 'red;}body{display:none}' } });
  const runtime = harness({ storage: { [key]: saved, 'dsh-industrial-acid-skin:canvas': 'night' } });
  runtime.exports.apply(runtime.ctx, {});
  const style = [...runtime.styles][0];
  assert.ok(style.textContent.includes('--acid-blue:#8058EB'));
  assert.ok(!style.textContent.includes('red;}body'));
  assert.equal([...runtime.layers.values()][0].tokens['--dsw-alias-bg-base'].light, '#10191F');
  runtime.storage.set(key, '{ broken json');
  runtime.notifyStorage(key);
  assert.equal([...runtime.layers.values()][0].tokens['--dsw-alias-bg-base'].light, '#10191F');
  runtime.storage.delete(key); runtime.storage.delete('dsh-industrial-acid-skin:canvas'); runtime.notifyStorage(null);
  assert.equal(runtime.attributes.get('data-industrial-mode'), 'day');
  assert.equal([...runtime.layers.values()][0].tokens['--dsw-alias-bg-base'].light, '#F0F1E8');
  runtime.dispose();
});

test('palette controls update only the active mode and persist across plugin remounts', () => {
  const runtime = harness(); runtime.exports.apply(runtime.ctx, {});
  const render = id => runtime.slots.get(id).Component({ wide: true, t: value => value });
  const treeFind = (tree, predicate) => {
    if (!Array.isArray(tree)) return;
    if (predicate(tree)) return tree;
    for (const child of tree.slice(2)) { const found = treeFind(child, predicate); if (found) return found; }
  };
  treeFind(render('industrial.signature'), n => n[1]?.['data-appearance-option'] === 'night')[1].onClick();
  assert.equal(runtime.attributes.get('data-industrial-mode'), 'night');
  treeFind(render('industrial.canvas'), n => n[1]?.['data-palette-preset'] === 'orange')[1].onClick();
  const saved = JSON.parse(runtime.storage.get('dsh-industrial-acid-skin:palettes'));
  assert.equal(saved.night.accent, '#FF953D'); assert.equal(saved.day.accent, '#D5FF00');
  assert.ok([...runtime.styles][0].textContent.includes('--acid-palette-surface:' + saved.night.surface));
  assert.ok([...runtime.styles][0].textContent.includes('--acid-palette-text:' + saved.night.text));
  const next = harness({ storage: Object.fromEntries(runtime.storage) }); next.exports.apply(next.ctx, {});
  assert.equal(next.attributes.get('data-industrial-mode'), 'night');
  assert.ok([...next.styles][0].textContent.includes('--acid-lime:#FF953D'));
  treeFind(render('industrial.canvas'), n => n[1]?.['data-palette-reset'])[1].onClick();
  assert.equal(JSON.parse(runtime.storage.get('dsh-industrial-acid-skin:palettes')).night.accent, '#D5FF00');
  runtime.dispose(); next.dispose();
});

test('mask colors retain the four raw palette values even when reading text requires contrast correction', () => {
  const { exports } = harness();
  for (const palette of [
    { accent: '#C5FA31', signal: '#4255FF', surface: '#11151A', text: '#ECF0E8' },
    { accent: '#123456', signal: '#654321', surface: '#888888', text: '#888888' }
  ]) {
    const scheme = exports.makeScheme('night', palette), v = scheme.variables;
    assert.deepEqual([v['--acid-lime'], v['--acid-blue'], v['--acid-palette-surface'], v['--acid-palette-text']],
      [palette.accent, palette.signal, palette.surface, palette.text]);
    if (palette.text === palette.surface) assert.notEqual(scheme.text, v['--acid-palette-text']);
  }
});

test('default, preset and midtone custom palettes keep text, metadata, links and selected states readable', () => {
  const { exports } = harness();
  function ratio(first, second) {
    const y = hex => { const channels = hex.match(/[a-f0-9]{2}/gi).map(n => parseInt(n, 16) / 255).map(n => n <= .04045 ? n / 12.92 : ((n + .055) / 1.055) ** 2.4); return .2126 * channels[0] + .7152 * channels[1] + .0722 * channels[2]; };
    const a = y(first), b = y(second); return (Math.max(a, b) + .05) / (Math.min(a, b) + .05);
  }
  const custom = ['#000000', '#FFFFFF', '#777777', '#747474', '#888888', '#112233', '#C0C030'].map(color => ({ accent: color, signal: color, surface: color, text: color }));
  for (const mode of ['day', 'night']) for (const palette of [...Object.values(exports.PALETTE_PRESETS).map(p => p[mode]), ...custom]) {
    const { tokens: t, variables: v } = exports.makeScheme(mode, palette);
    const backgrounds = ['--dsw-alias-bg-base', '--dsw-alias-bg-layer-1', '--dsw-alias-bg-layer-3', '--dsw-alias-interactive-bg-hover', '--dsw-alias-interactive-bg-hover-solid', '--dsw-specific-bubble', '--dsw-specific-bubble-highlight'];
    for (const fg of ['--dsw-alias-label-primary', '--dsw-alias-label-secondary', '--dsw-alias-label-tertiary', '--dsw-alias-link']) for (const bg of backgrounds) assert.ok(ratio(t[fg], t[bg]) >= 4.5, `${mode} ${palette.surface} ${fg} on ${bg}`);
    for (const [fg, bg] of [['--acid-blue-fore', '--acid-blue'], ['--acid-accent-fore', '--acid-lime'], ['--acid-masthead-fore', '--acid-masthead-bg'], ['--acid-context-fore', '--acid-context-bg'], ['--acid-sidebar-fore', '--acid-sidebar-bg'], ['--acid-sidebar-secondary', '--acid-sidebar-hover'], ['--acid-sidebar-active-fore', '--acid-sidebar-active'], ['--acid-settings-nav-fore', '--acid-settings-nav-hover']]) assert.ok(ratio(v[fg], v[bg]) >= 4.5, `${mode} ${palette.surface} ${fg} on ${bg}`);
  }
});

test('NEXT footer keeps day/night inside the SYS drawer; colours live in the masthead color system', () => {
  const runtime = harness(); runtime.exports.apply(runtime.ctx, {});
  runtime.html.setAttribute('data-acid-sidebar', 'next');
  const tree = runtime.slots.get('industrial.signature').Component({ wide: true, t: value => value });
  const find = (node, predicate) => { if (!Array.isArray(node)) return; if (predicate(node)) return node; for (const child of node.slice(2)) { const found = find(child, predicate); if (found) return found; } };
  const drawer = find(tree, n => n[1]?.className === 'acid-drawer');
  assert.ok(drawer);
  const handle = find(drawer, n => n[1]?.className === 'acid-drawer-handle');
  assert.equal(handle[1]['aria-expanded'], false);
  assert.equal(handle[1]['data-state'], 'idle');
  const body = find(drawer, n => n[1]?.className === 'acid-drawer-body');
  assert.ok(find(body, n => n[1]?.['data-appearance-option'] === 'night'));
  assert.equal(find(body, n => n[1]?.className === 'acid-palette-shortcut'), undefined);
  runtime.dispose();
});

test('workspace style switches immediately, survives remounts and synchronizes without changing palettes or workspace identity', () => {
  const key = 'dsh-industrial-acid-skin:sidebar-style';
  const preserved = { 'dsh-industrial-acid-skin:workspace-order': '["a","b"]', 'dsh-industrial-acid-skin:workspace-identity': '{"v":3,"map":{"a":0,"b":1}}' };
  const runtime = harness({ storage: preserved }); runtime.exports.apply(runtime.ctx, {});
  const find = (tree, predicate) => {
    if (!Array.isArray(tree)) return;
    if (predicate(tree)) return tree;
    for (const child of tree.slice(2)) { const found = find(child, predicate); if (found) return found; }
  };
  const render = (owner, id) => { if (owner.storage.get(key) !== 'classic') owner.html.setAttribute('data-acid-sidebar', 'next'); else owner.html.removeAttribute('data-acid-sidebar'); return owner.slots.get(id).Component({ wide: true, t: value => value }); };
  const selector = () => find(render(runtime, 'industrial.canvas'), node => node[1]?.id === 'acid-sidebar-style');
  const drawer = owner => find(render(owner, 'industrial.signature'), node => node[1]?.className === 'acid-drawer');
  const tokens = JSON.stringify([...runtime.layers.values()][0].tokens);
  assert.equal(selector()[1].value, 'next'); assert.ok(drawer(runtime));
  selector()[1].onChange({ target: { value: 'classic' } });
  assert.equal(runtime.storage.get(key), 'classic'); assert.equal(drawer(runtime), undefined);
  const classic = render(runtime, 'industrial.signature');
  assert.ok(find(classic, node => node[1]?.['data-appearance-option'] === 'night'));
  assert.ok(find(classic, node => node[1]?.className === 'acid-palette-shortcut'));
  assert.equal(JSON.stringify([...runtime.layers.values()][0].tokens), tokens);
  for (const [pref, value] of Object.entries(preserved)) assert.equal(runtime.storage.get(pref), value);
  const remounted = harness({ storage: Object.fromEntries(runtime.storage) }); remounted.exports.apply(remounted.ctx, {});
  assert.equal(drawer(remounted), undefined);
  runtime.storage.set(key, 'next'); runtime.notifyStorage(key); assert.ok(drawer(runtime));
  runtime.storage.set(key, 'invalid'); runtime.notifyStorage(key); assert.equal(selector()[1].value, 'next');
  runtime.storage.delete(key); runtime.notifyStorage(null); assert.ok(drawer(runtime));
  runtime.dispose(); remounted.dispose();
});

test('a flat or not-yet-loaded workspace list uses the normal footer without an unanchored MORE bar', () => {
  const runtime = harness(); runtime.exports.apply(runtime.ctx, {});
  const tree = runtime.slots.get('industrial.signature').Component({ wide: true, t: value => value });
  const classes = [];
  const visit = node => { if (!Array.isArray(node)) return; if (node[1]?.className) classes.push(node[1].className); node.slice(2).forEach(visit); };
  visit(tree);
  assert.ok(classes.includes('acid-mode-switch'));
  assert.ok(classes.includes('acid-palette-shortcut'));
  assert.ok(!classes.includes('acid-drawer-handle'));
  assert.ok(!classes.includes('acid-drawer-tools'));
  runtime.dispose();
});

test('returning from classic flat lists restores native workspace grouping for every next-style activation', () => {
  const key='dsh-industrial-acid-skin:sidebar-style';
  const runtime=harness({storage:{[key]:'classic'},nativeGrouping:'flat'});runtime.exports.apply(runtime.ctx,{});
  const find=node=>{if(!Array.isArray(node))return;if(node[1]?.id==='acid-sidebar-style')return node;for(const child of node.slice(2)){const found=find(child);if(found)return found;}};
  const change=value=>find(runtime.slots.get('industrial.canvas').Component({t:value=>value}))[1].onChange({target:{value}});
  assert.equal(runtime.getGrouping(),'flat');
  for(let cycle=0;cycle<3;cycle++){
    change('next');assert.equal(runtime.getGrouping(),'workspace');assert.equal(runtime.storage.get(key),'next');
    change('classic');runtime.ctx.uiWorkspace.view.setGroupBy('flat');
  }
  runtime.storage.set(key,'next');runtime.notifyStorage(key);assert.equal(runtime.getGrouping(),'workspace');
  runtime.dispose();
  const restored=harness({storage:{[key]:'next'},nativeGrouping:'flat'});restored.exports.apply(restored.ctx,{});
  assert.equal(restored.getGrouping(),'workspace');restored.dispose();
});

test('workspace colour changes persist, synchronize and reset without changing identity or palettes', () => {
  const key='dsh-industrial-acid-skin:workspace-colors',identity='dsh-industrial-acid-skin:workspace-identity';
  const initial={v:3,next:2,map:{a:0,b:1}},runtime=harness({storage:{[identity]:JSON.stringify(initial)}});
  runtime.exports.apply(runtime.ctx,{});
  const masthead=owner=>owner.slots.get('industrial.masthead').Component({})[1];
  const colors=owner=>masthead(owner).useAppearance().workspaceColors;
  const tokens=JSON.stringify([...runtime.layers.values()][0].tokens);
  masthead(runtime).setWorkspaceColor('a','#123abc');
  assert.deepEqual({...colors(runtime)},{a:'#123ABC'});
  assert.equal(runtime.storage.get(key),'{"a":"#123ABC"}');
  masthead(runtime).setWorkspaceColor('b','red;display:none');
  assert.deepEqual({...colors(runtime)},{a:'#123ABC'});
  assert.equal(runtime.storage.get(identity),JSON.stringify(initial));
  assert.equal(JSON.stringify([...runtime.layers.values()][0].tokens),tokens);
  const restored=harness({storage:Object.fromEntries(runtime.storage)});restored.exports.apply(restored.ctx,{});
  assert.deepEqual({...colors(restored)},{a:'#123ABC'});
  restored.storage.set(key,'{"a":"#000000","b":"#FFFFFF","invalid":"url(evil)"}');restored.notifyStorage(key);
  assert.deepEqual({...colors(restored)},{a:'#000000',b:'#FFFFFF'});
  masthead(restored).setWorkspaceColor('a',null);
  assert.deepEqual({...colors(restored)},{b:'#FFFFFF'});
  assert.equal(restored.storage.get(identity),JSON.stringify(initial));
  restored.storage.set(key,'{}');restored.notifyStorage(key);assert.deepEqual({...colors(restored)},{});
  runtime.dispose();restored.dispose();
});

test('the current or hovered workspace colour drives the skin accent without touching the saved palette', () => {
  const runtime=harness();runtime.exports.apply(runtime.ctx,{});
  const masthead=()=>runtime.slots.get('industrial.masthead').Component({})[1];
  const sidebarFill=()=>[...runtime.layers.values()][0].tokens['--dsw-specific-sidebar-fill'].light;
  const saved=JSON.stringify(masthead().useAppearance().palettes);
  assert.equal(sidebarFill(),'#D5FF00');
  masthead().setWorkspaceAccent('#ff2d78');
  assert.equal(sidebarFill(),'#FF2D78');
  assert.equal(masthead().useAppearance().effectivePalettes.day.accent,'#FF2D78');
  assert.equal(masthead().useAppearance().effectivePalettes.night.accent,'#FF2D78');
  assert.equal(JSON.stringify(masthead().useAppearance().palettes),saved);
  assert.equal(runtime.storage.get('dsh-industrial-acid-skin:palettes'),undefined);
  masthead().setWorkspaceAccent('url(evil)');
  assert.equal(sidebarFill(),'#D5FF00');
  masthead().setWorkspaceAccent('#2B45FF');
  assert.equal(sidebarFill(),'#2B45FF');
  masthead().setWorkspaceAccent(null);
  assert.equal(sidebarFill(),'#D5FF00');
  runtime.dispose();
});

test('the workspace colour follow can be switched off and syncs across windows', () => {
  const key='dsh-industrial-acid-skin:workspace-accent';
  const runtime=harness({storage:{[key]:'off'}});runtime.exports.apply(runtime.ctx,{});
  const masthead=()=>runtime.slots.get('industrial.masthead').Component({})[1];
  const sidebarFill=()=>[...runtime.layers.values()][0].tokens['--dsw-specific-sidebar-fill'].light;
  assert.equal(masthead().useAppearance().workspaceAccent,'off');
  masthead().setWorkspaceAccent('#FF2D78');
  assert.equal(sidebarFill(),'#D5FF00');
  runtime.storage.set(key,'on');runtime.notifyStorage(key);
  assert.equal(masthead().useAppearance().workspaceAccent,'on');
  assert.equal(sidebarFill(),'#FF2D78');
  runtime.storage.set(key,'bogus');runtime.notifyStorage(key);
  assert.equal(masthead().useAppearance().workspaceAccent,'on');
  runtime.dispose();
});
