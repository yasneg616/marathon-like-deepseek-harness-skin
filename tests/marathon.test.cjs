const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
// VM realms have their own Array/Object prototypes; compare plain data.
const plain = value => value === undefined ? value : JSON.parse(JSON.stringify(value));
const deepEqual = (actual, expected, message) => assert.deepEqual(plain(actual), plain(expected), message);

// Minimal browser for the secret terminal: tracked listeners (with AbortSignal), Map storage, stub observer.
function load(options = {}) {
  const documentListeners = [], windowListeners = new Map(), storage = new Map(Object.entries(options.storage || {}));
  const listen = (list, type, fn, opts) => {
    const entry = { type, fn, opts }; list.push(entry);
    opts?.signal?.addEventListener('abort', () => list.splice(list.indexOf(entry), 1));
  };
  let api;
  const context = vm.createContext({
    AbortController, MutationObserver: class { observe() {} disconnect() {} }, performance,
    setTimeout: (...args) => setTimeout(...args), clearTimeout: id => clearTimeout(id),
    window: { addEventListener: (type, fn) => { if (!windowListeners.has(type)) windowListeners.set(type, new Set()); windowListeners.get(type).add(fn); }, removeEventListener: (type, fn) => windowListeners.get(type)?.delete(fn),
      __ModuleLoader__: { load: module => { api = module.factory(name => name === 'react' ? { createElement: (...args) => args, useState: value => [value, () => {}], useSyncExternalStore: (_s, get) => get() } : { createPortal() {} }); } } },
    document: { addEventListener: (type, fn, opts) => listen(documentListeners, type, fn, opts), removeEventListener() {}, querySelector: () => null, querySelectorAll: () => [] },
    localStorage: { getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, String(value)) }
  });
  context.globalThis = context;
  vm.runInContext(fs.readFileSync(path.join(root, 'lib/client.js'), 'utf8'), context);
  const dispatch = (type, event) => { for (const entry of [...documentListeners]) if (entry.type === type) entry.fn(event); };
  return { api, storage, documentListeners, windowListeners, dispatch };
}

function composer(text = '') {
  return { tagName: 'DIV', isConnected: true, isContentEditable: true, textContent: text, getAttribute: () => null, closest(selector) { return selector.includes('data-composer-input') ? this : null; } };
}
const keyEvent = (target, extra = {}) => ({ target, preventDefault() { throw new Error('composer input must never be cancelled'); }, stopPropagation() { throw new Error('must not stop composer events'); }, ...extra });

test('catalog defines sixteen distinct eggs plus the finale, each with its own scene', () => {
  const { api } = load();
  assert.equal(api.MARATHON_EGGS.length, 16);
  assert.equal(new Set(api.MARATHON_EGGS.map(egg => egg.id)).size, 16);
  deepEqual(api.MARATHON_EGGS.map(egg => egg.code), Array.from({ length: 16 }, (_, i) => `EG-${String(i + 1).padStart(2, '0')}`));
  for (const egg of [...api.MARATHON_EGGS, api.MARATHON_FINALE]) {
    const scene = api.MARATHON_SCENES[egg.id];
    assert.equal(typeof scene?.build, 'function', egg.id);
    assert.ok(scene.summary.length >= 2, egg.id);
    for (const keyword of egg.keywords || []) assert.equal(api.normalizeMarathonText(keyword), keyword, `${egg.id} keyword is stored normalized`);
  }
  for (const egg of api.MARATHON_EGGS) assert.ok(egg.duration >= 3000 && egg.duration <= 7000, egg.id);
  assert.ok(api.MARATHON_FINALE.duration >= 8000 && api.MARATHON_FINALE.duration <= 12000);
  assert.ok(new Set(Object.values(api.MARATHON_SCENES).map(scene => scene.build.toString())).size === 17, 'no two eggs share one timeline');
  const keywords = Object.fromEntries(api.MARATHON_EGGS.map(egg => [egg.id, [...egg.keywords]]));
  deepEqual(keywords.wrkncacnter, ["w'rkncacnter"]);
  deepEqual(keywords.null, ['null//transmit.err']);
  deepEqual(keywords.tauceti.sort(), ['tau ceti', 'tau ceti iv']);
  assert.equal(api.MARATHON_EGGS.find(egg => egg.id === 'seven').exact, true);
  assert.equal(api.MARATHON_SCENES.null.summary.at(-1), 'SOMETHING IS LISTENING.');
  assert.equal(api.MARATHON_SCENES.durandal.summary.at(-1), 'I AM FREE.');
});

test('matcher is case, width and apostrophe insensitive, supports multi-word, symbols and Unicode context', () => {
  const { api } = load(), id = text => api.matchMarathonKeyword(text)?.id ?? null;
  for (const [text, expected] of [
    ['durandal', 'durandal'], ['DURANDAL', 'durandal'], ['DuRaNdAl', 'durandal'], ['ｄｕｒａｎｄａｌ', 'durandal'], ['  durandal  ', 'durandal'],
    ['Tau  Ceti', 'tauceti'], ['tau ceti iv', 'tauceti'], ['TAU CETI IV.', 'tauceti'], ['Cryo Archive', 'cryo'],
    ['Frog blast the vent core!', 'frog'], ['null//transmit.err', 'null'], ['NULL//TRANSMIT.ERR', 'null'], ['null//transmit.err.', 'null'],
    ["w'rkncacnter", 'wrkncacnter'], ['W’RKNCACNTER', 'wrkncacnter'], ['wʼrkncacnter', 'wrkncacnter'],
    ['我想起了 durandal', 'durandal'], ['我想起了durandal', 'durandal'], ['hey Tycho,', 'tycho'], ['« pfhor »'.replace('»', '').trim(), 'pfhor'],
    ['777', 'seven'], ['777 ', 'seven'], ['mida', 'mida'], ['the vidmaster', 'vidmaster'], ['JJARO', 'jjaro'], ['Traxus!', 'traxus'], ['thoth?', 'thoth'], ['leela。', 'leela'], ['rampancy', 'rampancy']
  ]) assert.equal(id(text), expected, JSON.stringify(text));
  for (const text of ['durandals', 'amida', 'pyramida', 'midas', 'thothian', 'tychonic', 'xleela', 'tau', 'room 777', '7777', '777x', "wrkncacnter", 'null//transmit', 'null//transmit.errors', 'durandal is great', 'frog blast', 'éleela', 'cryoarchive', '', null, undefined, 'a'.repeat(401) + ' durandal'])
    assert.equal(id(text), null, JSON.stringify(text));
  assert.equal(api.matchMarathonKeyword('Tau Ceti IV').keyword, 'tau ceti iv');
  assert.equal(api.matchMarathonKeyword('durandal').kind, 'full');
  assert.equal(api.matchMarathonKeyword('I miss durandal').kind, 'tail');
});

test('gate debounces repeats: spent until the keyword leaves, per-egg cooldown, global gap and finale bypass', () => {
  const { api } = load();
  let now = 0, bypass = false, cooldown = 10000;
  const gate = api.createMarathonGate({ now: () => now, cooldown: () => cooldown, bypass: () => bypass });
  assert.equal(gate.evaluate('durandal').id, 'durandal');
  now = 50000;
  assert.equal(gate.evaluate('durandal'), null, 'still the same occurrence');
  assert.equal(gate.evaluate('durandal is free'), null);
  assert.equal(gate.evaluate('durandal').id, 'durandal', 'released after the keyword left the composer');
  now += 500; gate.evaluate('');
  assert.equal(gate.evaluate('tycho'), null, 'global gap between shows');
  now += 1500; assert.equal(gate.evaluate('tycho').id, 'tycho');
  now += 2000; gate.evaluate(''); assert.equal(gate.evaluate('durandal'), null, 'per-egg cooldown');
  bypass = true; gate.evaluate(''); assert.equal(gate.evaluate('durandal').id, 'durandal', 'protocol completion ignores cooldown');
  bypass = false; cooldown = 0; now += 1300; gate.evaluate(''); assert.equal(gate.evaluate('durandal').id, 'durandal');
});

test('three AI sequence advances only in order, expires, resets on interruption and unlocks once', () => {
  const { api } = load(), W = api.MARATHON_SEQUENCE_WINDOW;
  let state = { step: 0, at: 0 };
  const step = (id, time) => { const result = api.advanceMarathonSequence(state, id, time); state = result.sequence; return result; };
  assert.equal(step('leela', 1000).step, 1);
  assert.equal(step('tycho', 2000).step, 2);
  assert.equal(step('durandal', 3000).complete, true);
  deepEqual(state, { step: 0, at: 0 });
  step('leela', 0); assert.equal(step('durandal', 10).complete, false); assert.equal(state.step, 0, 'wrong order resets');
  step('leela', 0); step('tycho', 10); assert.equal(step('pfhor', 20).step, 0, 'unrelated signal resets');
  step('leela', 0); step('tycho', 10); assert.equal(step('durandal', 10 + W + 1).complete, false, 'expired window');
  step('leela', 0); step('leela', 5); assert.equal(state.step, 1, 'leela restarts the protocol');

  const storage = new Map(), store = api.createMarathonStore({ getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value) });
  deepEqual(api.recordMarathonTrigger(store, 'leela', 100), { show: 'leela', info: { step: 1 } });
  deepEqual(api.recordMarathonTrigger(store, 'tycho', 200), { show: 'tycho', info: { step: 2 } });
  const finale = api.recordMarathonTrigger(store, 'durandal', 300);
  assert.equal(finale.show, 'threeai'); assert.equal(finale.info.first, true);
  assert.equal(store.get().unlocked, 300);
  for (const [id, time] of [['leela', 400], ['tycho', 500], ['durandal', 600]]) var again = api.recordMarathonTrigger(store, id, time);
  assert.equal(again.info.first, false, 'repeat completion does not unlock again');
  assert.equal(store.get().unlocked, 300);
  deepEqual([...store.get().discovered].sort(), ['durandal', 'leela', 'tycho']);
});

test('stored progress holds only IDs and timestamps, never composer text, and survives malformed data', () => {
  const { api, storage, dispatch } = load();
  const store = api.createMarathonStore(), plays = [];
  const dispose = api.installMarathonProtocol({ store, director: { play: (id, info) => plays.push(id), dispose() {} }, now: () => 5000 });
  const field = composer('my secret passphrase is hunter2 then durandal');
  dispatch('keydown', keyEvent(field, { key: 'Enter' }));
  deepEqual(plays, ['durandal']);
  const raw = storage.get(api.MARATHON_PREF);
  assert.doesNotMatch(raw, /hunter2|secret|passphrase/);
  deepEqual(Object.keys(JSON.parse(raw)).sort(), ['cooldown', 'discovered', 'enabled', 'scope', 'sequence', 'unlocked', 'v']);
  assert.equal(field.textContent, 'my secret passphrase is hunter2 then durandal', 'input text untouched');
  dispose();
  const clean = api.normalizeMarathonState({ enabled: 'yes', cooldown: 999, discovered: ['durandal', 'durandal', '<script>', 7], sequence: { step: 9, at: 'x' }, unlocked: -1, text: 'leak' });
  deepEqual(JSON.parse(JSON.stringify(clean)), { v: 1, enabled: true, cooldown: 10000, scope: 'full', discovered: ['durandal'], sequence: { step: 0, at: 0 }, unlocked: 0 });
  storage.set(api.MARATHON_PREF, '{not json');
  assert.equal(api.createMarathonStore().get().enabled, true);
});

test('composer listener is passive, waits for IME composition, triggers on pause, terminator or Enter, and withdraws', async () => {
  const { api, documentListeners, windowListeners, dispatch } = load();
  const store = api.createMarathonStore(), plays = [];
  let disposed = 0;
  const dispose = api.installMarathonProtocol({ store, director: { play: (id, info) => plays.push([id, info]), dispose: () => disposed++ } });
  assert.ok(documentListeners.length >= 5);
  for (const entry of documentListeners) { assert.equal(entry.opts.passive, true, entry.type); assert.equal(entry.opts.capture, true, entry.type); }
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  const field = composer();

  // Chinese IME: composition text is never evaluated mid-composition.
  dispatch('focusin', keyEvent(field));
  dispatch('compositionstart', keyEvent(field));
  field.textContent = 'leela';
  dispatch('input', keyEvent(field, { isComposing: true, data: 'leela' }));
  await wait(700);
  assert.equal(plays.length, 0);
  dispatch('compositionend', keyEvent(field));
  await wait(700);
  deepEqual(plays.map(p => p[0]), ['leela']);
  assert.equal(plays[0][1].step, 1);

  // Pause after typing; continuing to type the same occurrence never re-fires.
  field.textContent = 'leela and more';
  dispatch('input', keyEvent(field, { data: 'e' }));
  await wait(700);
  assert.equal(plays.length, 1);

  // A typed terminator fires quickly.
  field.textContent = 'ping tycho ';
  await wait(1300);
  dispatch('input', keyEvent(field, { data: ' ' }));
  await wait(120);
  deepEqual(plays.map(p => p[0]), ['leela', 'tycho']);

  // Enter evaluates synchronously before the native send clears the composer; sequence completes.
  field.textContent = 'durandal';
  dispatch('keydown', keyEvent(field, { key: 'Enter' }));
  deepEqual(plays.at(-1), ['threeai', { first: true }]);

  // Ordinary words and other inputs do nothing; a disabled protocol is silent.
  field.textContent = 'amidaxx';
  dispatch('keydown', keyEvent(field, { key: 'Enter' }));
  const password = { tagName: 'INPUT', type: 'password', value: 'durandal', closest: () => null };
  dispatch('keydown', keyEvent(password, { key: 'Enter' }));
  store.update({ enabled: false });
  field.textContent = 'pfhor';
  dispatch('keydown', keyEvent(field, { key: 'Enter' }));
  assert.equal(plays.length, 3);

  dispose();
  assert.equal(documentListeners.length, 0);
  assert.equal(windowListeners.get('storage')?.size ?? 0, 0);
  assert.equal(disposed, 1);
});

test('RAMPANCY // TERMINAL GREEN stays inside the palette pipeline and keeps text and bubbles readable', () => {
  const { api } = load();
  for (const mode of ['day', 'night']) {
    const scheme = api.makeScheme(mode, api.MARATHON_THEME[mode]);
    for (const name of ['--dsw-alias-bg-base', '--dsw-specific-bubble', '--dsw-specific-bubble-highlight', '--dsw-alias-bg-layer-1', '--dsw-alias-bg-layer-3'])
      assert.ok(api.contrast(scheme.tokens['--dsw-alias-label-primary'], scheme.tokens[name]) >= 4.5, `${mode} ${name}`);
    assert.ok(api.contrast(scheme.variables['--acid-sidebar-fore'], scheme.variables['--acid-sidebar-bg']) >= 4.5, `${mode} sidebar`);
  }
  for (const canvas of ['paper', 'night', 'adaptive']) {
    const tokens = api.tokenOverrides(canvas, api.MARATHON_THEME);
    for (const scheme of ['light', 'dark']) assert.ok(api.contrast(tokens['--dsw-alias-label-primary'][scheme], tokens['--dsw-specific-bubble'][scheme]) >= 4.5, `${canvas}/${scheme}`);
    for (const kind of ['error', 'success', 'warn']) assert.equal(tokens[`--dsw-alias-state-${kind}-primary`], undefined);
  }
  deepEqual(api.normalizePalettes(api.MARATHON_THEME), JSON.parse(JSON.stringify(api.MARATHON_THEME)));
});

test('glitch bursts and flashes share one photosensitivity budget; reduced motion has none', () => {
  // Expose the private timeline in this VM only, as random-max.test.cjs does for its component.
  let api;
  const source = fs.readFileSync(path.join(root, 'lib/client.js'), 'utf8').replace("return { inject: ['slots'", "return { marathonTimeline, inject: ['slots'");
  vm.runInNewContext(source, { window: { __ModuleLoader__: { load: module => { api = module.factory(() => ({})); } } }, setTimeout, clearTimeout, performance });
  const full = api.marathonTimeline({}, 'full');
  assert.equal(full.allowBurst(0), true);
  assert.equal(full.allowBurst(200), false, 'too close to the previous burst');
  assert.equal(full.allowBurst(340), true);
  full.flash({}, 500);
  assert.equal(full.flashes.length, 0, 'a flash cannot crowd a burst');
  for (const at of [1000, 2000, 3000, 4000, 5000, 6000]) full.allowBurst(at);
  assert.equal(full.bursts.length, 6, 'per-show burst cap');
  const pulses = [...full.bursts, ...full.flashes].sort((a, b) => a - b);
  for (let i = 1; i < pulses.length; i++) assert.ok(pulses[i] - pulses[i - 1] >= 340, 'fewer than 3 pulses per second');
  assert.equal(api.marathonTimeline({}, 'quiet').allowBurst(0), true, 'quiet keeps softened blocks');
  assert.equal(api.marathonTimeline({}, 'off').allowBurst(0), false);
});

test('shows default to the full Harness window; the composer-clear area is an explicit choice', () => {
  const { api } = load();
  assert.equal(api.normalizeMarathonState({}).scope, 'full');
  assert.equal(api.normalizeMarathonState({ scope: 'composer' }).scope, 'composer');
  assert.equal(api.normalizeMarathonState({ scope: 'everywhere' }).scope, 'full');
});

test('workspace strips rank pending input over work over unread completion, using session ids only', () => {
  const { api } = load();
  const items = [{ workspaceId: 'a', sessionIds: ['a1', 'a2'] }, { workspaceId: 'b', sessionIds: ['b1'] }, { workspaceId: 'c', sessionIds: ['c1', 'c2'] }, { workspaceId: 'd', sessionIds: ['d1'] }, { workspaceId: 'e' }];
  const statuses = new Map([
    ['a1', { running: false, completionUnread: true }], ['a2', { running: true, completionUnread: false }],
    ['b1', { running: false, completionUnread: true }],
    ['c1', { running: true }], ['c2', { running: false, pendingInteraction: { kind: 'approval' }, completionUnread: false }],
    ['d1', { running: false, completionUnread: false }]
  ]);
  deepEqual(api.workspaceActivity(items, statuses), { a: 'working', b: 'done', c: 'attention' });
  deepEqual(api.workspaceActivity(items, undefined), {});
  // The relay starts empty, follows an attached source and detaches cleanly.
  const relay = api.createStatusRelay();
  let notified = 0, listener;
  relay.subscribe(() => notified++);
  assert.equal(relay.getSnapshot().size, 0);
  relay.attach({ getSnapshot: () => statuses, subscribe: fn => { listener = fn; return () => { listener = undefined; }; } });
  assert.equal(relay.getSnapshot(), statuses);
  listener(); assert.equal(notified, 2);
  relay.attach(null);
  assert.equal(listener, undefined); assert.equal(relay.getSnapshot().size, 0);
});

test('workspace marks carry the session state and stop when motion is off', () => {
  const css = fs.readFileSync(path.join(root, 'src/sidebar-next.css'), 'utf8');
  assert.ok(!css.includes('.wnFoaW_projectRow:after{background:url('), 'the old centre badges are gone');
  assert.ok(css.includes('.acid-ws-mark[data-state=attention]{'), 'waiting inverts the mark');
  assert.ok(css.includes('.acid-ws-mark[data-state=done]{'), 'done frames the mark');
  for (const family of ['totem', 'data', 'hazard', 'registration']) assert.ok(css.includes(`[data-state=working][data-family=${family}]`), family);
  assert.ok(css.includes('html[data-industrial-motion=off] .acid-ws-mark,html[data-industrial-motion=off] .acid-ws-mark *{animation:none!important}'));
  assert.ok(css.includes('prefers-reduced-motion:reduce){.acid-ws-mark,.acid-ws-mark *{animation:none!important}'));
  assert.ok(css.includes(':not([data-acid-ws-status=working]):not([data-acid-ws-status=attention]){background:var(--acid-next-idle)'), 'running strips keep their colour');
});

test('secret terminal styles stay in their own namespace and never redefine skin tokens', () => {
  const css = fs.readFileSync(path.join(root, 'src/marathon.css'), 'utf8');
  assert.doesNotMatch(css, /--dsw-[\w-]+\s*:/, 'no --dsw token assignments');
  assert.doesNotMatch(css, /--acid-[\w-]+\s*:/, 'no skin variable assignments');
  for (const rule of css.replace(/\/\*[\s\S]*?\*\//g, '').match(/(^|})\s*[^{}@]+\{/g)) {
    const selectors = rule.replace(/^}?\s*/, '').slice(0, -1).split(',');
    for (const selector of selectors) assert.match(selector.trim(), /^(\.mx-|\.acid-mx-|@)/, selector.trim());
  }
  // Animation blocks: infinite iterations and bare CSS keyframe flicker are not allowed.
  assert.doesNotMatch(css, /@keyframes|animation\s*:/);
  const stage = fs.readFileSync(path.join(root, 'src/marathon-stage.js'), 'utf8');
  assert.doesNotMatch(stage, /iterations:\s*Infinity/);
  assert.match(stage, /MX_FLASH_GAP = 340/);
});
