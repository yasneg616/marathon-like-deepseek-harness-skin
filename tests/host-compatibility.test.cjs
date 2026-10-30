const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const { hostStyles } = require('../tools/host-styles.cjs');
const { mapModules, modulesFromStylesheets } = require('../src/module-map.cjs');

test('installed host maps right sidebar and font controls to their actual stylesheets', { skip: !process.env.DSH_ASAR }, () => {
  const sheets = hostStyles(process.env.DSH_ASAR);
  const doc = { querySelectorAll: selector => selector === 'style' ? sheets : [] };
  const inventory = modulesFromStylesheets(doc, 'dsh-industrial-acid-skin');
  const src = path.join(__dirname, '..', 'src');
  const css = fs.readdirSync(src).filter(name => name.endsWith('.css'))
    .map(name => fs.readFileSync(path.join(src, name), 'utf8')).join('\n');
  const mapping = mapModules(css, inventory);
  const prefixIn = (suffix, local) => {
    const sheet = sheets.find(item => item.dataset.pluginCss.endsWith(suffix));
    assert.ok(sheet, `missing host stylesheet ${suffix}`);
    const match = sheet.textContent.match(new RegExp(`\\.([A-Za-z0-9_-]+)_${local}\\b`));
    assert.ok(match, `missing ${local} in ${suffix}`);
    return match[1];
  };
  assert.equal(mapping.get('OUqwTW'), prefixIn('/SidebarRight.module.css', 'tabBody'));
  assert.equal(mapping.get('_0Fr0Ha'), prefixIn('/FontSizeRow.module.css', 'stepper'));
  const report = JSON.parse(execFileSync(process.execPath, [path.join(__dirname, '..', 'tools', 'verify-build.cjs')], { encoding: 'utf8' }));
  assert.deepEqual(report.unresolved, []);
  assert.equal(report.staleSelectors, 0);
});
