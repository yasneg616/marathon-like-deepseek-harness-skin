const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const chrome = fs.readFileSync(path.join(root, 'src', 'chrome.css'), 'utf8');
const client = fs.readFileSync(path.join(root, 'lib', 'client.js'), 'utf8');
const rules = chrome.replace(/\/\*[\s\S]*?\*\//g, '').match(/[^{}]+\{[^{}]*\}/g) ?? [];
const rule = selector => rules.filter(r => r.slice(0, r.indexOf('{')).trim() === selector).map(r => r.slice(r.indexOf('{') + 1, -1)).join(';');
const ATTR = 'html[data-acid-chrome=marathon]';

test('the Marathon chrome ships in the built stylesheet, after every rule it overrides', () => {
  const css = JSON.parse(client.match(/const CSS = ("(?:[^"\\]|\\.)*")/)?.[1] ?? '""');
  assert.ok(css.length > 0, 'built stylesheet found');
  const at = css.indexOf(`${ATTR} .acid-masthead[data-acid-hud]{`);
  assert.ok(at > 0, 'chrome.css is in the build');
  assert.ok(at > css.indexOf('.acid-ws-flyout{position:fixed'), 'chrome.css comes after sidebar-next.css');
  assert.ok(at > css.indexOf('html[data-industrial-acid] .acid-masthead[data-acid-hud]{--hud-slab'), 'chrome.css comes after planar.css');
});

// Split a selector list on its top-level commas only (not the ones inside :is(...)).
const parts = selector => { const out = []; let depth = 0, start = 0; for (let i = 0; i < selector.length; i++) { const c = selector[i]; if (c === '(') depth++; else if (c === ')') depth--; else if (c === ',' && depth === 0) { out.push(selector.slice(start, i)); start = i + 1; } } out.push(selector.slice(start)); return out.map(p => p.trim()); };

test('every chrome rule is keyed on the chrome attribute, and none targets showcase-only markup', () => {
  for (const r of rules) {
    const selector = r.slice(0, r.indexOf('{')).replace(/^@[^{]*\{/, '').trim();
    if (selector.startsWith('@') || /^(from|to|\d+%)$/.test(selector)) continue;
    assert.ok(parts(selector).every(part => part.startsWith(ATTR)), `unkeyed rule: ${selector.slice(0, 80)}`);
  }
  assert.doesNotMatch(chrome, /\.demo-|data-acid-flavor/);
});

test('colour is a signal: the masthead slab is graphite and the workspace colour survives only as accents', () => {
  assert.match(rule(`${ATTR} .acid-masthead[data-acid-hud]`), /--hud-slab:var\(--mf-panel\)/);
  assert.match(rule(`${ATTR} .acid-masthead[data-acid-hud] .acid-context`), /color-mix\(in oklab,var\(--mf-ws\) 10%,var\(--mf-panel\)\)/);
  assert.match(rule(`${ATTR} .acid-masthead[data-acid-hud] .acid-context`), /inset 4px 0 0 var\(--mf-ws\)/);
});

test('the workspace number sits on the slab\'s vertical centre', () => {
  const body = rule(`${ATTR} .acid-masthead[data-acid-hud] .workspace-counter`);
  assert.match(body, /align-self:center!important/);
  assert.match(body, /margin:0!important/);
});

test('dialogs keep their padding for direct content; only the colour system bleeds to the edges', () => {
  assert.match(rule(`${ATTR} .acid-dialog`), /padding:0 18px 18px!important/);
  assert.match(rule(`${ATTR} .acid-dialog-heading`), /margin:0 -18px 16px!important/);
  assert.match(rule(`${ATTR} .acid-cs-dialog .acid-color-system`), /margin:-16px -18px -18px!important/);
});

test('the crosshair grid sits on the conversation root, found by stable attributes only', () => {
  // Harness paints the conversation an opaque base colour, so a grid on the centre column alone is hidden.
  assert.match(rule(`${ATTR} [data-phase]:has([data-composer-card])`), /background-image:var\(--mf-grid\)!important/);
});

test('the home whale is lettered in the cipher font, in the workspace colour', () => {
  const whale = rule(`${ATTR} [data-home-whale]`);
  assert.match(whale, /font-family:'Acid Cipher',monospace!important/);
  assert.match(whale, /--home-whale-code-ink:var\(--mf-ws\)/);
  assert.match(whale, /filter:none!important/);
  assert.match(chrome, /@font-face\{font-family:Acid Cipher;src:url\(data:font\/otf;base64,__CIPHER_OTF__\)/);
  // The built client carries the font itself, and loads it before the whale's first lettering pass.
  assert.doesNotMatch(client, /__CIPHER_OTF__/);
  const font = fs.readFileSync(path.join(root, 'assets', 'fonts', 'acid-cipher.otf'));
  assert.ok(client.includes(font.toString('base64').slice(0, 200)), 'cipher font embedded');
  assert.ok(client.includes(`document.fonts?.load?.('7px "Acid Cipher"')`), 'cipher font preloaded');
  const report = JSON.parse(fs.readFileSync(path.join(root, 'assets', 'fonts', 'acid-cipher.json'), 'utf8'));
  assert.equal(report.otfSha256, require('node:crypto').createHash('sha256').update(font).digest('hex'));
  assert.equal(report.asciiCoverage, 95);
  assert.equal(report.distinctLettersAndDigits, 62);
});

test('flyout band ink is computed on the band, not inherited from the root colour', () => {
  assert.match(rule(`${ATTR} .acid-ws-fly-head`), /color:oklch\(from var\(--acid-ws-id/);
  assert.doesNotMatch(chrome, /--mf-band-ink/);
});
