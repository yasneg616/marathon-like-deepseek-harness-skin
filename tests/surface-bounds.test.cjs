const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

let surfaceUnion, nativePaneKey;
const code = fs.readFileSync(path.join(__dirname, '../lib/client.js'), 'utf8')
  .replace("return { inject: ['slots'", "return { surfaceUnion, nativePaneKey, inject: ['slots'");
vm.runInNewContext(code, { window: { __ModuleLoader__: {
  load(module) { ({ surfaceUnion, nativePaneKey } = module.factory(() => ({ createElement() {} }))); }
} } });
const bounds = (...args) => JSON.parse(JSON.stringify(surfaceUnion(...args)));

test('collapsing and expanding keep the complete old and new sidebar within the mask', () => {
  const wide = { left: 0, top: 128, width: 280, height: 692 };
  const rail = { left: 0, top: 128, width: 56, height: 692 };
  assert.deepEqual(bounds(wide, rail, 128), wide);
  assert.deepEqual(bounds(rail, wide, 128), wide);
});

test('right-pane fullscreen masks both positions without covering the masthead', () => {
  const dock = { left: 704, top: 128, width: 576, height: 692 };
  const fullscreen = { left: 56, top: 0, width: 1224, height: 820 };
  assert.deepEqual(bounds(dock, fullscreen, 128), { left: 56, top: 128, width: 1224, height: 692 });
  assert.deepEqual(bounds(fullscreen, dock, 128), { left: 56, top: 128, width: 1224, height: 692 });
});

test('a remounted native pane keeps its snapshot identity and cannot reuse another session or floating pane', () => {
  const element = attrs => ({ hasAttribute: key => key in attrs, getAttribute: key => attrs[key] ?? null });
  const sessionA = element({ 'data-sidebar-right-session': 'session-a' });
  const sessionB = element({ 'data-sidebar-right-session': 'session-b' });
  const oldPane = element({ 'data-dockkit-pane': 'pane1' });
  const remounted = element({ 'data-dockkit-pane': 'pane1' });
  const floating = element({ 'data-dockkit-float': 'pane1' });
  assert.equal(nativePaneKey(oldPane, sessionA), nativePaneKey(remounted, sessionA));
  assert.notEqual(nativePaneKey(oldPane, sessionA), nativePaneKey(remounted, sessionB));
  assert.notEqual(nativePaneKey(oldPane, sessionA), nativePaneKey(floating, sessionA));
});
