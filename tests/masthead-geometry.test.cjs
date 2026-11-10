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
