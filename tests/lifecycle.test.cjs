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
    window: { addEventListener: (name, fn) => { if (!windowEvents.has(name)) windowEvents.set(name, new Set()); windowEvents.get(name).add(fn); }, removeEventListener: (name, fn) => windowEvents.get(name)?.delete(fn), __ModuleLoader__: { load: declaration => { exports = declaration.factory(() => ({ createElement: (...args) => args, useState: value => [value, () => {}], useEffect: () => {}, useSyncExternalStore: (_subscribe, getSnapshot) => getSnapshot() })); } } },
    document: { documentElement: html, head: { appendChild: node => styles.add(node) },body:{append:node=>bodies.add(node)},addEventListener(){},removeEventListener(){},querySelectorAll(){return []},querySelector(){return null},createElement:makeNode },
    localStorage: { getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value) }
  });
  vm.runInContext(fs.readFileSync(path.join(root, 'lib/client.js'), 'utf8'), context);
  const ctx = {
    inject: (_names, fn) => ctx.effect(() => fn(ctx)),
    effect: fn => { const dispose = fn(); if (typeof dispose === 'function') disposers.push(dispose); return dispose; },
    locale: { register: () => () => {} },
    on: (name, fn) => { events.set(name, fn); disposers.push(() => events.delete(name)); },
    slots: { inject: (_name, fn) => ctx.effect(fn), register: (options, Component) => { slots.set(options.id, { options, Component }); return () => slots.delete(options.id); } },
    theme: { getTheme: () => ({ active: { colorScheme: nativeScheme } }), overrideTokens: (source, tokens) => { const layer = { tokens }; layers.set(source, layer); events.get('theme/change')?.({ active: { colorScheme: nativeScheme } }); return () => { if (layers.get(source) === layer) layers.delete(source); }; } }
  };
  return { exports, ctx, html, styles, attributes, properties, slots, layers, storage, events, storageEvents, windowEvents, changeTheme: value => { nativeScheme = value; events.get('theme/change')?.({ active: { colorScheme: value } }); }, notifyStorage: key => { for (const fn of storageEvents) fn({ key }); }, dispose: () => disposers.reverse().forEach(fn => fn()) };
}

test('mount and withdraw only owned visuals, preserving another plugin and prior root state', () => {
  const runtime = harness();
  const unrelated = { dataset: { plugin: 'other-plugin' } };
  runtime.styles.add(unrelated);
  runtime.exports.apply(runtime.ctx, {});
  assert.equal(runtime.styles.size, 2);
  assert.equal(runtime.slots.size, 6);
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

test('masthead derives actual workspace ordinal, including absence and reordered workspaces', () => {
  const { exports } = harness();
  const items = [{ title: 'Alpha', sessionIds: ['a'] }, { title: 'Beta', sessionIds: ['b'] }];
  const context = exports.workspaceContext(items, 'b');
  assert.equal(context.index, 2); assert.equal(context.title, 'Beta');
  assert.equal(exports.workspaceContext(items, undefined), null);
  assert.equal(exports.workspaceContext(items.reverse(), 'b').index, 1);
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
  const validCtx = { inject: names => assert.deepEqual(names, ['connection', 'sessionQuery']) };
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
    const backgrounds = ['--dsw-alias-bg-base', '--dsw-alias-bg-layer-1', '--dsw-alias-bg-layer-3', '--dsw-alias-interactive-bg-hover', '--dsw-alias-interactive-bg-hover-solid'];
    for (const fg of ['--dsw-alias-label-primary', '--dsw-alias-label-secondary', '--dsw-alias-label-tertiary', '--dsw-alias-link']) for (const bg of backgrounds) assert.ok(ratio(t[fg], t[bg]) >= 4.5, `${mode} ${palette.surface} ${fg} on ${bg}`);
    for (const [fg, bg] of [['--acid-blue-fore', '--acid-blue'], ['--acid-accent-fore', '--acid-lime'], ['--acid-masthead-fore', '--acid-masthead-bg'], ['--acid-context-fore', '--acid-context-bg'], ['--acid-sidebar-fore', '--acid-sidebar-bg'], ['--acid-sidebar-secondary', '--acid-sidebar-hover'], ['--acid-sidebar-active-fore', '--acid-sidebar-active'], ['--acid-settings-nav-fore', '--acid-settings-nav-hover']]) assert.ok(ratio(v[fg], v[bg]) >= 4.5, `${mode} ${palette.surface} ${fg} on ${bg}`);
  }
});
