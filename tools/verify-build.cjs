// End-to-end check of the resolution pipeline against a simulated host document:
//   node tools/verify-build.cjs
// Every host bundle ships its CSS as text inside one <style>, so a realistic document can be
// assembled from the installed app.asar without launching the app. Read-only.
'use strict';

const fs = require('fs');
const path = require('path');
const { mapModules, modulesFromDocument, modulesFromStylesheets, parseToken, rewrite, tokensOf } = require('../src/module-map.cjs');
const { hostStyles } = require('./host-styles.cjs');

const ASAR = process.env.DSH_ASAR || '/Applications/DeepSeek Harness.app/Contents/Resources/app.asar';
const SRC = path.join(__dirname, '..', 'src');
const OWN = 'dsh-industrial-acid-skin';

const CSS = fs.readdirSync(SRC)
  .filter(name => name.endsWith('.css'))
  .map(name => fs.readFileSync(path.join(SRC, name), 'utf8'))
  .join('\n');

function documentWith(sheets) {
  return { querySelectorAll: selector => (selector === 'style' ? sheets : []) };
}

function report() {
  if (!fs.existsSync(ASAR)) return { skipped: `no host build at ${ASAR}` };

  const sheets = hostStyles(ASAR);

  const doc = documentWith(sheets);
  const inventory = modulesFromStylesheets(doc, OWN);
  const mapping = mapModules(CSS, modulesFromDocument(doc, OWN));
  const out = rewrite(CSS, mapping);

  const authored = tokensOf(CSS);
  // Identity mappings are valid, and a host prefix can also be another authored prefix. Compare
  // each selector with its own expected result instead of treating either case as stale.
  const selectorTokens = text => [...text.matchAll(/\.((?:_?[A-Za-z0-9][A-Za-z0-9_-]*?)_[a-z][A-Za-z0-9]*)/g)].map(m => m[1]);
  const before = selectorTokens(CSS), after = selectorTokens(out);
  const stale = before.filter((token, index) => {
    const { prefix, local } = parseToken(token);
    return after[index] !== `${mapping.get(prefix) || prefix}_${local}`;
  });
  if (after.length !== before.length) stale.push('selector count changed');

  return {
    hostStylesheets: sheets.length,
    hostModules: inventory.size,
    authoredModules: authored.size,
    resolvedModules: mapping.size,
    unresolved: [...authored.keys()].filter(prefix => !mapping.has(prefix)),
    staleSelectors: stale.length,
    mapping: Object.fromEntries(mapping)
  };
}

const result = report();
console.log(JSON.stringify(result, null, 2));
if (!result.skipped && (result.unresolved.length || result.staleSelectors)) process.exitCode = 1;
