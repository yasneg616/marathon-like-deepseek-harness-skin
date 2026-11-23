const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const css = fs.readFileSync(path.join(__dirname, '..', 'src', 'planar.css'), 'utf8');

test('the wordmark is capped by the masthead height instead of growing with the viewport width', () => {
  // v3c used max-height:100% against an auto-height parent, so the logo scaled with the column and
  // the masthead backgrounds painted over the page on wide windows.
  const rules = [...css.matchAll(/(?:^|[{}])([^{}]*\.acid-wordmark-svg>svg[^{}]*)\{([^{}]*)\}/g)].map(match => match[2]);
  const effective = rules.at(-1);
  assert.ok(effective, 'wordmark svg rule is missing');
  assert.match(effective, /max-height:\s*\d+px/);
  assert.doesNotMatch(effective, /max-height:\s*100%/);
  assert.match(css, /\.acid-masthead\{grid-template-rows:minmax\(0,1fr\)\}/);
  assert.match(css, /@media\(min-width:1900px\)\{html\[data-industrial-acid\] \.acid-wordmark-svg>svg\{max-height:103px\}\}/);
});

test('Windows native buttons reserve space without replacing the masthead action columns', () => {
  const windowsFallback = /html\[data-industrial-acid\]\[data-windows-titlebar\] \.acid-masthead(?:\[[^\]]+\])*\[data-native-controls=false\]\{([^{}]*)\}/g;
  const rules = [...css.matchAll(windowsFallback)].filter(match => !match[0].includes('[data-acid-hud]')).map(match => match[1]);
  assert.ok(rules.some(rule => /padding-right:[^;]*env\(titlebar-area-width,/.test(rule)));
  assert.ok(rules.every(rule => !rule.includes('grid-template-columns')));
});

// v3.0.0 regression: the HUD masthead forced `padding-right:0!important`, so without the caption
// adapter Harness's own minimize / maximize / close landed on top of the colour and workspace keys.
test('the HUD masthead keeps the native Windows caption clear without the adapter', () => {
  const hud = '.acid-masthead[data-acid-hud][data-native-controls=false]';
  const rule = selector => [...css.replace(/\/\*[\s\S]*?\*\//g, '').matchAll(/([^{}]+)\{([^{}]*)\}/g)].filter(m => m[1].trim() === selector).map(m => m[2]);
  // Overlay geometry comes from Window Controls Overlay, with Harness's 3×46 px / 40 px as fallback.
  const vars = rule('html[data-industrial-acid][data-windows-titlebar]').join(';');
  assert.match(vars, /--acid-cap-w:[^;]*env\(titlebar-area-width,calc\(100vw - 138px\)\)/);
  assert.match(vars, /--acid-cap-h:env\(titlebar-area-height,40px\)/);
  // Every HUD breakpoint widens the keys column to the overlay and drops the keys below it.
  const columns = rule(`html[data-industrial-acid][data-windows-titlebar] ${hud}`).map(body => body.match(/grid-template-columns:([^;}]*)/)?.[1]).filter(Boolean);
  assert.equal(columns.length, 4);
  assert.ok(columns.every(value => value.includes('var(--acid-cap-w)')));
  assert.match(rule(`html[data-industrial-acid][data-windows-titlebar] ${hud} .acid-menus`).join(';'), /padding-top:var\(--acid-cap-h\)!important/);
  // The HUD's upper band is the overlay's height, so one rule runs under the fields and the tab.
  assert.match(rule(`html[data-industrial-acid][data-windows-titlebar] ${hud} .acid-hud`).join(';'), /grid-template-rows:var\(--acid-cap-h\) minmax\(0,1fr\)!important/);
  // Harness samples this probe for the native caption colours; the skin answers with the slab colour.
  assert.match(rule('html[data-industrial-acid][data-windows-titlebar] body>span[style*="--dsw-specific-sidebar-fill"]').join(';'),
    /--dsw-specific-sidebar-fill:var\(--acid-ws-context,var\(--acid-lime\)\);--dsw-alias-label-primary:var\(--acid-ws-context-fore,var\(--acid-accent-fore\)\)/);
  // The adapter path (data-native-controls=true) is untouched.
  assert.doesNotMatch(css, /\[data-acid-hud\]\[data-native-controls=true\]/);
});

test('workspace changes are written into <head> so Harness re-reads the native caption colour', () => {
  const vm = require('node:vm');
  const head = { children: [], append(node) { node.parentNode = head; this.children.push(node); },
    querySelector(selector) { return selector === 'style[data-acid-caption-probe]' ? this.children.find(node => 'acidCaptionProbe' in node.dataset) ?? null : null; } };
  const document = { head, createElement: () => ({ dataset: {}, textContent: '', remove() { head.children.splice(head.children.indexOf(this), 1); } }) };
  let api;
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '..', 'lib', 'client.js'), 'utf8'),
    { document, window: { __ModuleLoader__: { load: mod => { api = mod.factory(() => ({ createElement() {} })); } } } });
  const probe = 'html[data-industrial-acid][data-windows-titlebar] body>span[style*="--dsw-specific-sidebar-fill"]';
  api.syncCaptionProbe('#FF6A1A');
  assert.equal(head.children.length, 1);
  assert.ok(head.children[0].textContent.startsWith(`${probe}{--dsw-specific-sidebar-fill:#FF6A1A;--dsw-alias-label-primary:#`));
  // Switching workspace edits the same element instead of piling up rules.
  api.syncCaptionProbe('#2F45FF');
  assert.equal(head.children.length, 1);
  assert.match(head.children[0].textContent, /fill:#2F45FF;/);
  // No colour, or anything that is not a hex colour, removes the rule and leaves the CSS fallback.
  api.syncCaptionProbe('red;}body{display:none');
  assert.equal(head.children.length, 0);
  api.syncCaptionProbe('#2F45FF'); api.syncCaptionProbe(null);
  assert.equal(head.children.length, 0);
});
