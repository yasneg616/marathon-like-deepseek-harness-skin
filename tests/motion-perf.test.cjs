const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const client = fs.readFileSync(path.join(__dirname, '../lib/client.js'), 'utf8')
  .replace("return { inject: ['slots'", "return { createAcceptedMotionController, acceptedDuration, ACCEPTED_MOTION, Masthead, inject: ['slots'");

function makeStyle() {
  const style = { clipPath: '', position: 'relative', display: 'block', visibility: 'visible', gridTemplateColumns: '', values: {}, writes: 0 };
  style.getPropertyValue = name => style.values[name] || '';
  style.getPropertyPriority = () => '';
  style.setProperty = (name, value) => { style.values[name] = value; style.writes += 1; };
  style.removeProperty = name => { delete style.values[name]; };
  return style;
}

function motionHarness() {
  const queue = [];
  let rafId = 0;
  const timers = new Map();
  let timerId = 0;
  const animations = [];
  const listeners = {};
  const mos = [];
  let motion = 'full';
  let exposeFrame = false;
  let panelQueries = 0;

  class Element {
    constructor(tag = 'div') {
      this.tag = tag;
      this.nodeType = 1;
      this.children = [];
      this.parent = null;
      this.mounted = false;
      this.attrs = {};
      this.dataset = {};
      this.classes = new Set();
      this._class = '';
      this.style = makeStyle();
      this.rect = { width: 320, height: 240, left: 0, top: 0, right: 320, bottom: 240 };
      this.classList = {
        add: (...keys) => { for (const key of keys) this.classes.add(key); },
        remove: (...keys) => { for (const key of keys) this.classes.delete(key); },
        contains: key => this.classes.has(key)
      };
    }
    get className() { return this._class; }
    set className(value) {
      this._class = String(value);
      this.classes = new Set(this._class.split(/\s+/).filter(Boolean));
    }
    get isConnected() {
      let node = this;
      while (node) { if (node.mounted) return true; node = node.parent; }
      return false;
    }
    setAttribute(name, value) { this.attrs[name] = String(value); }
    getAttribute(name) { return Object.prototype.hasOwnProperty.call(this.attrs, name) ? this.attrs[name] : null; }
    hasAttribute(name) { return Object.prototype.hasOwnProperty.call(this.attrs, name); }
    removeAttribute(name) { delete this.attrs[name]; }
    getBoundingClientRect() { return this.rect; }
    setMounted(value) { this.mounted = value; for (const child of this.children) child.setMounted(value); }
    append(...nodes) {
      for (const node of nodes) {
        node.remove();
        node.parent = this;
        this.children.push(node);
        node.setMounted(this.isConnected || this.mounted);
      }
    }
    prepend(node) { this.append(node); this.children.pop(); this.children.unshift(node); node.parent = this; }
    remove() {
      const parent = this.parent;
      if (parent) parent.children.splice(parent.children.indexOf(this), 1);
      this.parent = null;
      this.setMounted(false);
    }
    contains(other) {
      if (other === this) return true;
      return this.children.some(child => child.contains(other));
    }
    matches(selector) { return String(selector).split(',').some(part => this.matchesPart(part.trim())); }
    matchesPart(selector) {
      if (selector === '*' ) return true;
      if (selector === 'button') return this.tag === 'button';
      if (selector === 'dialog') return this.tag === 'dialog';
      if (selector === 'iframe' || selector === 'canvas') return this.tag === selector;
      if (selector.includes('[role="dialog"]')) return this.attrs.role === 'dialog' && !this.classes.has('acid-dialog');
      if (selector === '.acid-dialog[open]') return this.classes.has('acid-dialog') && this.hasAttribute('open');
      if (selector.includes('data-acid-motion-owned')) return Object.prototype.hasOwnProperty.call(this.attrs, 'data-acid-motion-owned') || this.dataset.acidMotionOwned !== undefined;
      if (selector.includes('menuitem')) return this.attrs.role === 'menuitem';
      if (selector.includes('data-menu-material')) return this.hasAttribute('data-menu-material');
      if (selector.startsWith('.') && !selector.includes('[') && !selector.includes(' ')) return this.classes.has(selector.slice(1));
      return false;
    }
    closest(selector) {
      let node = this;
      while (node) { if (node.matches?.(selector)) return node; node = node.parent; }
      return null;
    }
    descendants() { return this.children.flatMap(child => [child, ...child.descendants()]); }
    querySelectorAll(selector) {
      if (selector === ':scope > .acid-fx') return this.children.filter(node => node.classes.has('acid-fx'));
      if (selector === '*') return this.descendants();
      if (selector === 'button') return this.descendants().filter(node => node.tag === 'button');
      if (selector === 'iframe' || selector === 'canvas') return this.descendants().filter(node => node.tag === selector);
      if (String(selector).includes('acid-hover-corner')) return this.descendants().filter(node => node.classes.has('acid-hover-corner'));
      return this.descendants().filter(node => node.matches(selector));
    }
    querySelector(selector) { return this.querySelectorAll(selector)[0] || null; }
    cloneNode(deep) {
      const copy = new Element(this.tag);
      copy.attrs = { ...this.attrs };
      copy.dataset = { ...this.dataset };
      copy.className = this._class;
      for (const key of this.classes) copy.classes.add(key);
      copy.rect = { ...this.rect };
      copy.style.position = this.style.position;
      copy.style.display = this.style.display;
      copy.style.visibility = this.style.visibility;
      if (deep) for (const child of [...this.children]) copy.append(child.cloneNode(true));
      return copy;
    }
    animate(frames, options) {
      const animation = { frames, options, finished: { catch() {} }, cancelled: false, cancel() { this.cancelled = true; } };
      animations.push({ node: this, animation });
      return animation;
    }
    set innerHTML(html) {
      for (const child of [...this.children]) child.remove();
      for (const match of String(html).matchAll(/<i class="([^"]*)"><\/i>/g)) {
        const child = new Element('i');
        child.className = match[1];
        this.append(child);
      }
    }
  }

  const body = new Element('body');
  body.mounted = true;
  const center = new Element('div');
  center.className = 'mP3x-q_centerCol';
  const frame = new Element('div');
  frame.className = 'mP3x-q_frame';
  const documentElement = new Element('html');
  const document = {
    body,
    documentElement,
    hidden: false,
    createElement: tag => new Element(tag),
    addEventListener(type, listener, options) {
      const bucket = listeners[type] || (listeners[type] = new Set());
      bucket.add(listener);
      options?.signal?.addEventListener('abort', () => bucket.delete(listener));
    },
    removeEventListener(type, listener) { listeners[type]?.delete(listener); },
    querySelector(selector) {
      const text = String(selector);
      if (text.includes('mP3x-q_centerCol')) return center;
      if (text.includes('mP3x-q_frame')) return exposeFrame ? frame : null;
      return null;
    },
    querySelectorAll(selector) {
      const text = String(selector);
      if (text === 'style' || text === '[class]' || text.includes('status') || text.includes('alert')) return [];
      if (text.includes('sidebar-right') || text.includes('dockkit')) return [];
      if (text.includes('dialog') || text.includes('acid-model-popover') || text.includes('data-trigger-menu') || text.includes('haSm5q')) {
        panelQueries += 1;
        return body.descendants().filter(node => node.matches(text));
      }
      if (text === 'button') return body.descendants().filter(node => node.tag === 'button');
      return [];
    }
  };
  class MutationObserver {
    constructor(fn) { this.fn = fn; mos.push(this); }
    observe() { this.observing = true; }
    disconnect() { this.observing = false; }
  }
  let api;
  vm.runInNewContext(client, {
    Element, AbortController, MutationObserver, document,
    getComputedStyle: node => node.style,
    performance: { now: () => 0 },
    requestAnimationFrame(fn) { const id = ++rafId; queue.push({ id, fn, cancelled: false }); return id; },
    cancelAnimationFrame(id) { const entry = queue.find(item => item.id === id); if (entry) entry.cancelled = true; },
    setTimeout(fn) { const id = ++timerId; timers.set(id, fn); return id; },
    clearTimeout(id) { timers.delete(id); },
    window: { __ModuleLoader__: { load: module => { api = module.factory(() => ({})); } } }
  });
  const before = mos.length;
  const controller = api.createAcceptedMotionController(() => motion);
  const created = mos.slice(before);
  const fire = (type, event) => { for (const listener of listeners[type] || []) listener(event); };
  return {
    api, controller, body, center, frame, animations, created, fire,
    geometry: created[0], main: created[1],
    setMotion: value => { motion = value; },
    proxies: () => body.children.filter(node => node.className === 'acid-transition-proxy'),
    pendingFrames: () => queue.filter(entry => !entry.cancelled).length,
    flush() { const batch = queue.splice(0, queue.length); for (const entry of batch) if (!entry.cancelled) entry.fn(); },
    panelQueries: () => panelQueries,
    resetPanelQueries: () => { panelQueries = 0; },
    exposeFrame: value => { exposeFrame = value; },
    Element,
    button(extra = {}) {
      const node = new Element('button');
      node.style.position = 'static';
      Object.assign(node, extra);
      return node;
    }
  };
}

test('accepted motion durations stay on the original curve for full, quiet and off', () => {
  const { api } = motionHarness();
  assert.equal(api.ACCEPTED_MOTION.page, 600);
  assert.equal(api.ACCEPTED_MOTION.hover, 300);
  assert.equal(api.ACCEPTED_MOTION.press, 380);
  assert.equal(api.ACCEPTED_MOTION.menu, 500);
  assert.equal(api.ACCEPTED_MOTION.dialog, 600);
  assert.equal(api.acceptedDuration('page', 'full'), 600);
  assert.equal(api.acceptedDuration('page', 'quiet'), 180);
  assert.equal(api.acceptedDuration('page', 'off'), 0);
  assert.equal(api.acceptedDuration('press', 'quiet'), 114);
  assert.equal(api.acceptedDuration('hover', 'full'), 300);
});

test('large pages still keep the old-picture proxy in on and quiet, and motion off does not clone', () => {
  const stage = motionHarness();
  const { controller, center } = stage;
  for (let i = 0; i < 3600; i += 1) center.append(new stage.Element('div'));
  const iframe = new stage.Element('iframe');
  iframe.setAttribute('src', 'https://example.test/session');
  iframe.setAttribute('srcdoc', '<p>session</p>');
  center.append(iframe);
  let clones = 0;
  const original = center.cloneNode.bind(center);
  center.cloneNode = function clone(deep) { clones += 1; return original(deep); };

  controller.captureStage();
  controller.revealStage('page');
  assert.equal(clones, 1);
  const fullProxy = stage.proxies()[0];
  assert.ok(fullProxy);
  assert.equal(fullProxy.dataset.transition, 'page');
  const fullClone = fullProxy.children[0];
  assert.equal(fullClone.descendants().filter(node => node.tag === 'div').length, 3600);
  assert.equal(fullClone.descendants().find(node => node.tag === 'iframe').getAttribute('src'), null);
  assert.equal(iframe.getAttribute('src'), 'https://example.test/session');

  controller.cancel();
  stage.setMotion('quiet');
  controller.captureStage();
  controller.revealStage('page');
  assert.equal(clones, 2);
  assert.equal(stage.proxies().length, 1);
  assert.equal(stage.proxies()[0].dataset.transition, 'page');

  // Turning motion off does not discard a snapshot that was already taken, unless capture runs again.
  controller.cancel();
  stage.setMotion('full');
  controller.captureStage();
  stage.setMotion('off');
  controller.revealStage('page');
  stage.setMotion('full');
  controller.revealStage('page');
  assert.equal(clones, 3);
  assert.equal(stage.proxies().length, 1);

  controller.cancel();
  stage.setMotion('full');
  controller.captureStage();
  const clonesBeforeSkip = clones;
  stage.setMotion('off');
  controller.captureStage();
  assert.equal(clones, clonesBeforeSkip);
  stage.setMotion('full');
  controller.revealStage('page');
  assert.equal(stage.proxies().length, 0);
  assert.equal(center.dataset.acidMaskPhase, 'cover');
  assert.equal(center.dataset.transition, 'page');
  controller.dispose();
  assert.equal(stage.pendingFrames(), 0);
});

test('inserted buttons are decorated before paint, and the first hover, press and keyboard activation keep their motion', () => {
  const stage = motionHarness();
  const { controller, main, fire, animations } = stage;
  stage.setMotion('off');
  const disabled = stage.button({ disabled: true });
  stage.body.append(disabled);
  main.fn([{ addedNodes: [disabled], removedNodes: [] }]);
  assert.equal(disabled.classList.contains('acid-layered'), true);
  assert.equal(disabled.classList.contains('acid-layer-positioned'), true);
  assert.equal(disabled.querySelector(':scope > .acid-fx').className, 'acid-fx');
  fire('pointerover', { target: disabled, relatedTarget: null });
  assert.equal(disabled.dataset.acidFeedback, undefined);

  stage.setMotion('full');
  const button = stage.button();
  stage.body.append(button);
  main.fn([{ addedNodes: [button], removedNodes: [] }]);
  assert.equal(stage.pendingFrames(), 0);
  assert.equal(button.querySelector(':scope > .acid-fx').querySelectorAll('.acid-hover-corner').length, 4);
  assert.equal(button.dataset.acidFeedback, undefined);

  fire('pointerover', { target: button, relatedTarget: null });
  assert.equal(button.dataset.acidFeedback, 'hover');
  const corners = animations.filter(entry => entry.node.classes.has('acid-hover-corner'));
  assert.equal(corners.length, 4);
  assert.equal(corners[0].animation.frames[0].opacity, 0);
  assert.equal(corners[0].animation.frames[1].opacity, 1);
  assert.equal(corners[0].animation.frames[1].transform, 'none');
  assert.equal(corners[0].animation.options.duration, 300);
  const line = animations.find(entry => entry.node.classes.has('acid-hover-line'));
  assert.equal(line.animation.frames[0].transform, 'scaleX(0)');
  assert.equal(line.animation.frames[1].transform, 'scaleX(1)');

  fire('pointerdown', { type: 'pointerdown', target: button, button: 0 });
  assert.equal(button.dataset.acidFeedback, 'press');
  const fill = animations.find(entry => entry.node.classes.has('acid-press-fill'));
  assert.equal(fill.animation.frames[0].clipPath, 'inset(0 50%)');
  assert.equal(fill.animation.frames[1].clipPath, 'inset(0)');
  assert.equal(fill.animation.options.duration, 380);
  const outline = animations.find(entry => entry.node.classes.has('acid-press-outline'));
  assert.equal(outline.animation.frames[1].transform, 'scale(1.08)');

  stage.setMotion('quiet');
  const keyed = stage.button();
  stage.body.append(keyed);
  main.fn([{ addedNodes: [keyed], removedNodes: [] }]);
  fire('click', { target: keyed, detail: 0 });
  assert.equal(keyed.dataset.acidFeedback, 'press');
  const quiet = animations.filter(entry => entry.node.parent === keyed.querySelector(':scope > .acid-fx') && entry.node.classes.has('acid-press-fill')).at(-1);
  assert.equal(quiet.animation.options.duration, 114);
  controller.dispose();
});

function nest(stage, depth) {
  const root = new stage.Element('div');
  let cursor = root;
  for (let i = 0; i < depth; i += 1) {
    const next = new stage.Element('div');
    cursor.append(next);
    cursor = next;
  }
  return { root, leaf: cursor };
}
function placeDialog(stage, parent, position) {
  const dialog = new stage.Element('dialog');
  dialog.setAttribute('role', 'dialog');
  if (position) dialog.style.position = position;
  parent.append(dialog);
  return dialog;
}
// The mutation callback scans the live document. Delivering the callback after the DOM change is
// what a MutationObserver does; depth and sibling index are not part of that scan.
function openThenClose(stage, root, panel, onOpen) {
  const before = stage.proxies().length;
  stage.body.append(root);
  stage.main.fn([{ addedNodes: [root], removedNodes: [] }]);
  assert.equal(panel.dataset.acidMaskPhase, 'cover');
  assert.equal(panel.dataset.acidMaskDirection, 'down-up');
  assert.equal(stage.pendingFrames(), 0);
  if (onOpen) onOpen();
  root.remove();
  stage.main.fn([{ addedNodes: [], removedNodes: [root] }]);
  assert.equal(stage.proxies().length, before + 1);
  assert.equal(stage.proxies().at(-1).children[0].tag, 'dialog');
  assert.equal(stage.proxies().at(-1).dataset.acidMaskPhase, 'cover');
  assert.equal(stage.pendingFrames(), 0);
}

test('a connected panel is masked and then exit-proxied in the mutation callbacks, at any depth or sibling index', () => {
  const stage = motionHarness();
  const deep = nest(stage, 80);
  const deepDialog = placeDialog(stage, deep.leaf, 'absolute');
  openThenClose(stage, deep.root, deepDialog, () => {
    assert.equal(deepDialog.classList.contains('acid-mask-positioned'), false);
  });

  const wide = new stage.Element('div');
  for (let i = 0; i < 80; i += 1) wide.append(new stage.Element('div'));
  const wideDialog = placeDialog(stage, wide, 'static');
  openThenClose(stage, wide, wideDialog, () => {
    assert.equal(wideDialog.classList.contains('acid-mask-positioned'), true);
  });

  const again = nest(stage, 80);
  const reopened = placeDialog(stage, again.leaf, 'absolute');
  openThenClose(stage, again.root, reopened);
  reopened.dataset.acidMaskPhase = 'stale';
  stage.body.append(again.root);
  stage.main.fn([{ addedNodes: [again.root], removedNodes: [] }]);
  assert.equal(reopened.dataset.acidMaskPhase, 'cover');
  assert.equal(stage.pendingFrames(), 0);

  stage.resetPanelQueries();
  stage.main.fn([{ addedNodes: [], removedNodes: [] }]);
  stage.main.fn([{ addedNodes: [], removedNodes: [] }]);
  assert.equal(stage.panelQueries(), 2);

  let clones = 0;
  const original = reopened.cloneNode.bind(reopened);
  reopened.cloneNode = function clone(deep) { clones += 1; return original(deep); };
  stage.setMotion('off');
  stage.fire('pointerdown', { type: 'pointerdown', target: stage.body, button: 0 });
  assert.equal(clones, 0);
  stage.setMotion('quiet');
  stage.fire('pointerdown', { type: 'pointerdown', target: stage.body, button: 0 });
  assert.equal(clones, 1);
  stage.controller.dispose();
});

test('a panel that is already disconnected, hidden, or zero-sized when the callback runs is not given an exit', () => {
  const stage = motionHarness();
  const detached = nest(stage, 80);
  const detachedDialog = placeDialog(stage, detached.leaf, 'absolute');
  stage.body.append(detached.root);
  detached.root.remove();
  const before = stage.proxies().length;
  stage.main.fn([{ addedNodes: [detached.root], removedNodes: [detached.root] }]);
  assert.equal(detachedDialog.dataset.acidMaskPhase, undefined);
  assert.equal(stage.proxies().length, before);

  const hidden = placeDialog(stage, stage.body, 'absolute');
  hidden.style.visibility = 'hidden';
  stage.main.fn([{ addedNodes: [hidden], removedNodes: [] }]);
  assert.equal(hidden.dataset.acidMaskPhase, undefined);
  hidden.remove();
  stage.main.fn([{ addedNodes: [], removedNodes: [hidden] }]);
  assert.equal(stage.proxies().length, before);
  hidden.style.visibility = 'visible';
  stage.body.append(hidden);
  stage.main.fn([{ addedNodes: [hidden], removedNodes: [] }]);
  assert.equal(hidden.dataset.acidMaskPhase, 'cover');

  const empty = placeDialog(stage, stage.body, 'static');
  empty.rect = { width: 0, height: 40, left: 0, top: 0, right: 0, bottom: 40 };
  stage.main.fn([{ addedNodes: [empty], removedNodes: [] }]);
  assert.equal(empty.dataset.acidMaskPhase, undefined);
  empty.rect = { width: 20, height: 20, left: 0, top: 0, right: 20, bottom: 20 };
  stage.main.fn([{ addedNodes: [], removedNodes: [] }]);
  assert.equal(empty.dataset.acidMaskPhase, 'cover');

  const owned = new stage.Element('div');
  owned.dataset.acidMotionOwned = '';
  const ownedDialog = placeDialog(stage, owned, 'absolute');
  stage.body.append(owned);
  stage.main.fn([{ addedNodes: [owned], removedNodes: [] }]);
  assert.equal(ownedDialog.dataset.acidMaskPhase, undefined);
  assert.equal(stage.pendingFrames(), 0);
  stage.controller.dispose();
});

test('after dispose a late panel mutation does not open or exit', () => {
  const stage = motionHarness();
  const dialog = placeDialog(stage, stage.body, 'absolute');
  stage.controller.dispose();
  stage.main.fn([{ addedNodes: [dialog], removedNodes: [] }]);
  dialog.remove();
  stage.main.fn([{ addedNodes: [], removedNodes: [dialog] }]);
  assert.equal(dialog.dataset.acidMaskPhase, undefined);
  assert.equal(stage.proxies().length, 0);
  assert.equal(stage.pendingFrames(), 0);
});

test('column geometry still syncs in the mutation callback instead of waiting for a frame', () => {
  const stage = motionHarness();
  stage.exposeFrame(true);
  stage.frame.style.gridTemplateColumns = '56px minmax(0px, 1fr) minmax(0px, 400px)';
  stage.frame.style.writes = 0;
  stage.geometry.fn();
  assert.ok(stage.frame.style.writes > 0);
  assert.equal(stage.frame.style.getPropertyValue('--acid-next-columns').startsWith('113px'), true);
  assert.equal(stage.pendingFrames(), 0);
  stage.controller.dispose();
});

test('classic workspace chips and ordinals paint once per frame and settle after the burst', t => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const queue = [];
  let rafId = 0;
  const rows = [];
  const effects = [];
  const observers = [];
  const ordinals = [];
  function row(id) {
    const node = {
      dataset: { rowKey: 'workspace:' + id }, attrs: {}, chips: [],
      style: { values: {}, setProperty(name, value) { this.values[name] = value; }, removeProperty(name) { delete this.values[name]; } },
      setAttribute(name, value) { if (name === 'data-acid-ordinal') ordinals.push(id + ':' + value); this.attrs[name] = value; },
      getAttribute: name => node.attrs[name] ?? null,
      hasAttribute: name => Object.prototype.hasOwnProperty.call(node.attrs, name),
      removeAttribute(name) { delete node.attrs[name]; },
      querySelector(selector) { return String(selector).includes('acid-ws-chip') ? node.chips[0] || null : null; },
      append(chip) { node.chips.push(chip); }
    };
    return node;
  }
  rows.push(row('a'), row('b'));
  const document = {
    documentElement: { setAttribute() {}, removeAttribute() {}, getAttribute: () => null, style: { setProperty() {}, removeProperty() {} } },
    body: {},
    addEventListener() {},
    removeEventListener() {},
    createElement() {
      const chip = {
        attrs: {}, style: { values: {}, setProperty(name, value) { this.values[name] = value; }, removeProperty(name) { delete this.values[name]; } },
        setAttribute(name, value) { this.attrs[name] = value; },
        getAttribute: name => chip.attrs[name] ?? null,
        removeAttribute(name) { delete chip.attrs[name]; },
        addEventListener() {},
        remove() { for (const item of rows) { const index = item.chips.indexOf(chip); if (index >= 0) item.chips.splice(index, 1); } }
      };
      return chip;
    },
    querySelector: selector => String(selector).includes('sidebar.workspaces') ? { slot: 'workspaces' } : null,
    querySelectorAll(selector) {
      const text = String(selector);
      if (text.includes('acid-ws-chip')) return rows.flatMap(item => item.chips);
      if (text.includes('workspace:')) return rows;
      return [];
    }
  };
  class MutationObserver {
    constructor(fn) { this.fn = fn; observers.push(this); }
    observe() { this.observing = true; }
    disconnect() { this.observing = false; }
  }
  const React = {
    createElement: (type, props, ...children) => ({ type, props, children }),
    useState: value => [typeof value === 'function' ? value() : value, () => {}],
    useRef: value => ({ current: value }),
    useLayoutEffect() {},
    useEffect(fn) { effects.push(fn); }
  };
  let api;
  const items = [{ workspaceId: 'a', title: 'Alpha' }, { workspaceId: 'b', title: 'Beta' }];
  vm.runInNewContext(client, {
    Element: class Element {}, MutationObserver, document, navigator: { platform: 'Linux' }, localStorage: { getItem: () => null, setItem() {} },
    requestAnimationFrame(fn) { const id = ++rafId; queue.push({ id, fn, cancelled: false }); return id; },
    cancelAnimationFrame(id) { const entry = queue.find(item => item.id === id); if (entry) entry.cancelled = true; },
    setTimeout, clearTimeout,
    window: { __ModuleLoader__: { load: module => { api = module.factory(name => name === 'react' ? React : { createPortal: element => element, flushSync: fn => fn() }); } } }
  });
  api.Masthead({
    t: key => key,
    useWorkspaces: fn => fn({ items }),
    useSessions: fn => fn({ byId: {} }),
    usePanelInfo: fn => fn({ activePanelId: null }),
    useAppearance: () => ({ sidebarStyle: 'classic', workspaceColors: { a: '#112233' } }),
    getMotion: () => 'full'
  });
  let cleanup;
  let observer;
  for (const effect of effects) {
    const before = observers.length;
    const result = effect();
    if (observers.length > before) { observer = observers.at(-1); cleanup = result; break; }
  }
  assert.ok(observer);
  const pending = () => queue.filter(entry => !entry.cancelled).length;
  const flush = () => { const batch = queue.splice(0, queue.length); for (const entry of batch) if (!entry.cancelled) entry.fn(); };
  assert.equal(rows[0].chips.length, 0);
  assert.equal(pending(), 1);
  observer.fn();
  observer.fn();
  observer.fn();
  assert.equal(pending(), 1);
  assert.equal(ordinals.length, 0);
  flush();
  assert.deepEqual(ordinals, ['a:001', 'b:002']);
  assert.equal(rows[0].chips.length, 1);
  assert.equal(rows[0].chips[0].attrs['data-acid-ws-chip'], 'a');
  assert.equal(rows[0].style.values['--acid-ws-id'], '#112233');
  assert.equal(rows[1].chips.length, 1);
  assert.equal(rows[1].style.values['--acid-ws-id'], undefined);

  const painted = ordinals.length;
  observer.fn();
  t.mock.timers.tick(200);
  observer.fn();
  t.mock.timers.tick(200);
  assert.equal(ordinals.length, painted);
  t.mock.timers.tick(240);
  assert.deepEqual(ordinals.slice(painted), ['a:001', 'b:002']);

  const late = row('c');
  rows.push(late);
  observer.fn();
  assert.equal(late.chips.length, 0);
  cleanup();
  flush();
  assert.equal(pending(), 0);
  assert.equal(late.chips.length, 0);
  assert.equal(rows[0].chips.length, 0);
  assert.equal(rows[1].chips.length, 0);
  assert.equal(observer.observing, false);
});
