const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.join(__dirname, '..');
const client = fs.readFileSync(path.join(root, 'lib', 'client.js'), 'utf8');
const motion = fs.readFileSync(path.join(root, 'src', 'accepted-motion.js'), 'utf8');
const dots = fs.readFileSync(path.join(root, 'src', 'dot-motion.js'), 'utf8');
const chrome = fs.readFileSync(path.join(root, 'src', 'chrome.css'), 'utf8');
let api;
vm.runInNewContext(client, { window: { __ModuleLoader__: { load: mod => { api = mod.factory(() => ({ createElement() {} })); } } } });

test('the rate meter maps arrival speed onto its rows: silent at zero, full near 600 chars/s, monotonic', () => {
  assert.equal(api.dotRateLevel(0), 0);
  assert.equal(api.dotRateLevel(-5), 0);
  assert.ok(api.dotRateLevel(5) > 0, 'a trickle still shows');
  assert.ok(Math.abs(api.dotRateLevel(600) - 1) < 1e-9);
  assert.equal(api.dotRateLevel(10000), 1);
  let last = -1;
  for (const v of [0, 1, 10, 50, 120, 300, 600]) { const level = api.dotRateLevel(v); assert.ok(level >= last); last = level; }
});

test('without a canvas or observers the dot motion is a no-op instead of breaking the skin', () => {
  const motion = api.createDotMotion({ getMotion: () => 'full', statusSource: { getSnapshot: () => new Map(), subscribe: () => () => {} } });
  assert.equal(typeof motion.attachRate, 'function');
  assert.doesNotThrow(() => { motion.attachRate({}); motion.dispose(); });
});

test('dot motion listens to real events only and cleans up after itself', () => {
  // Sending: Enter (not Shift+Enter, not composing) in the composer, or its send key.
  assert.match(dots, /event\.key==='Enter'&&!event\.shiftKey&&!event\.isComposing&&event\.target\?\.closest\?\.\('\[data-composer-card\]'\)/);
  // The writing point and the rate come from text arriving outside the composer and our own nodes.
  assert.match(dots, /closest\?\.\('\[data-composer-card\],\[data-acid-motion-owned\]'\)/);
  // A session finishing sweeps the scan band.
  assert.match(dots, /if\(next<running\)scan\(\)/);
  // Motion levels: quiet keeps the meter only, off runs nothing.
  assert.match(dots, /m!=='off'&&\(m==='full'\|\|kind!=='field'\)/);
  // Disposal removes listeners, observers, the canvas and the stage marker.
  for (const part of ["removeEventListener('keydown',onKey,true)", "removeEventListener('click',onClick,true)", 'textObserver.disconnect()', 'sizeObserver.disconnect()', 'field.remove()', 'delete root.dataset.acidDots', 'clearInterval(rootTimer)', 'unsubscribe()'])
    assert.ok(dots.includes(part), part);
});

test('the workspace switch uses LEDs only under the Marathon chrome', () => {
  assert.match(motion, /if\(kind==='workspace'&&chromeMarathon\(\)\)dressWorkspaceMask\(current,columns,quiet\?\.5:1\)/);
  assert.match(motion, /if\(chromeMarathon\(\)\)return ledWorkspace\(button,index,label,ordinal,name,acceptedDuration\('workspace',getMotion\(\)\)\)/);
  // The flip ends on the real digits: the mask is cleared on finish and on cancel.
  assert.match(motion, /const current=run\(index,duration,clear\)/);
  assert.match(motion, /if\(current\.ended\)\{clear\(\);return;\}/);
  // The mask's mark is scaled by whole steps and locked a gap outside its drawn frame.
  assert.match(motion, /scale=Math\.max\(2,Math\.floor\(/);
  assert.match(motion, /out=3\*scale/);
});

test('the masthead name, path, tag and mark join the LED flip without touching React-owned nodes', () => {
  // Text decodes on a laid-over copy; the original is hidden and handed back, restored on finish and cancel.
  assert.match(motion, /const copy=detail\.cloneNode\(true\)/);
  assert.match(motion, /detail\.style\.opacity='0'/);
  assert.match(motion, /if\(detail\)detail\.style\.opacity='';/);
  // Placed from client rects (sub-pixel exact) and collapsed back to one text node once locked.
  assert.match(motion, /const at=detail\.getBoundingClientRect\(\),own=button\.getBoundingClientRect\(\)/);
  assert.match(motion, /if\(!d\.done&&k>=d\.from\+d\.span\)\{d\.el\.textContent=d\.text;d\.done=true;\}/);
  assert.match(motion, /decode\(copy\.querySelector\('\.acid-context-title'\),\.30,\.45\)/);
  assert.match(motion, /decode\(copy\.querySelector\('\.acid-context-path'\),\.45,\.40\)/);
  // The mark only animates opacity and visibility on its own parts, plus a temporary scan bar.
  assert.match(motion, /button\.querySelector\('\.acid-context-mark \.acid-ws-mark'\)/);
  assert.match(motion, /current\.temp\('acid-led-markscan',button\)/);
});

test('the chrome stylesheet carries the dot field, the rate meter and the LED faces', () => {
  for (const rule of ['[data-acid-dots]{isolation:isolate}', '.acid-dots-field{position:absolute;inset:0;z-index:-1', '.acid-hud-rate{display:block;width:72px;height:15px', '@property --led-r', '.acid-led-digit[data-phase=lock]', ".acid-mask-char[data-cipher]{font-family:'Acid Cipher'", '.acid-mask-col[data-face=mark] .acid-ws-mark{transform:translate(-50%,-50%) scale(var(--mark-scale,2))!important}'])
    assert.ok(chrome.includes(rule), rule);
});
