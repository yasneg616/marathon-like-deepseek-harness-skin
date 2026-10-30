const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const { mapModules, rewrite, tokensOf, parseToken, modulesFromDom, modulesFromDocument, modulesFromStylesheets, resolvePrefix } = require(path.join(__dirname, '..', 'src', 'module-map.cjs'));

// Two builds of the same DSH version emit different module hashes for identical local names.
// The skin must follow the running build instead of the one it was authored against.
const AUTHORED = 'wtg9ga';
const BUILT = 'kB3qhq';

function documentWith(classes) {
  const elements = classes.map(name => ({ getAttribute: () => name }));
  return { querySelectorAll: () => elements };
}

const sidebarLocals = ['root', 'footArea', 'regionArea', 'settingsArea', 'logoRow', 'newSession', 'newSessionLabel', 'newSessionShortcut', 'panelList', 'panelRow', 'panelTitle', 'panelActive', 'brand', 'toggle', 'wide', 'collapsed', 'fading', 'railIn', 'moreAnchor'];
const workspaceLocals = ['projectRow', 'projectText', 'sessionRow', 'selected', 'title', 'time', 'chevron', 'folder', 'iconButton', 'hoverContent', 'menuOpen', 'rowActions', 'arrow', 'meta'];
const listLocals = ['root', 'rail', 'list', 'listArea', 'treeBody', 'sectionHeader', 'sectionLabel', 'groupSection', 'fade', 'iconButton', 'searchButton', 'clearButton', 'viewOptionsMenu', 'wide'];

const css = [
  `.${AUTHORED}_root{display:flex}`,
  `.${AUTHORED}_footArea .${AUTHORED}_panelRow{color:red}`,
  `.wnFoaW_projectRow .wnFoaW_title{color:blue}`,
  `.GAkraW_listArea{overflow:auto}`,
  `.acid-drawer{top:0}`
].join('\n');

function host() {
  const classes = [
    ...sidebarLocals.map(name => `${BUILT}_${name}`),
    ...workspaceLocals.map(name => `JoiKIa_${name}`),
    ...listLocals.map(name => `Kjh-qa_${name}`),
    'acid-drawer', 'acid-drawer-handle'
  ];
  return documentWith(classes);
}

test('tokens keep the authored module prefix and a stable local name', () => {
  assert.deepEqual(parseToken(`${AUTHORED}_footArea`), { prefix: AUTHORED, local: 'footArea' });
  // Hashes may begin with an underscore or contain dashes.
  assert.deepEqual(parseToken('_5Qcc8a_trigger'), { prefix: '_5Qcc8a', local: 'trigger' });
  assert.deepEqual(parseToken('Kjh-qa_listArea'), { prefix: 'Kjh-qa', local: 'listArea' });
  assert.equal(parseToken('nounderscore'), null);
});

test('modules are grouped from the class names the document actually carries', () => {
  const modules = modulesFromDom(host());
  assert.ok(modules.get(BUILT).has('footArea'));
  assert.ok(modules.get('JoiKIa').has('projectRow'));
});

test('each authored prefix maps to the module that contains all of its local names', () => {
  const mapping = mapModules(css, modulesFromDom(host()));
  assert.equal(mapping.get(AUTHORED), BUILT);
  assert.equal(mapping.get('wnFoaW'), 'JoiKIa');
  assert.equal(mapping.get('GAkraW'), 'Kjh-qa');
});

test('stylesheets are rewritten onto the running build', () => {
  const out = rewrite(css, mapModules(css, modulesFromDom(host())));
  assert.match(out, new RegExp(`\\.${BUILT}_root`));
  assert.match(out, new RegExp(`\\.${BUILT}_footArea \\.${BUILT}_panelRow`));
  assert.match(out, /\.JoiKIa_projectRow \.JoiKIa_title/);
  assert.match(out, /\.Kjh-qa_listArea/);
  // The skin's own classes are not CSS modules and must survive verbatim.
  assert.match(out, /\.acid-drawer\{top:0\}/);
  assert.doesNotMatch(out, new RegExp(AUTHORED));
});

test('inline query selectors are rewritten with the same mapping', () => {
  const mapping = mapModules(css, modulesFromDom(host()));
  assert.equal(rewrite('.wnFoaW_rowActions', mapping), '.JoiKIa_rowActions');
  assert.equal(rewrite('.acid-drawer-handle', mapping), '.acid-drawer-handle');
});

test('a build that only renders part of the UI resolves only what it renders', () => {
  // Only the sidebar is mounted; the workspace list must stay untouched rather than guessing.
  const partial = documentWith(sidebarLocals.map(name => `${BUILT}_${name}`));
  const out = rewrite(css, mapModules(css, modulesFromDom(partial)));
  assert.match(out, new RegExp(`\\.${BUILT}_root`));
  assert.match(out, /\.wnFoaW_projectRow/);
});

test('an unknown build leaves every token untouched', () => {
  const foreign = documentWith(['other_thing', 'acid-drawer']);
  const mapping = mapModules(css, modulesFromDom(foreign));
  assert.equal(mapping.size, 0);
  assert.equal(rewrite(css, mapping), css);
});

test('resolution never assigns one host module to two authored prefixes', () => {
  // A superset module could satisfy several signatures; each host module is claimed once.
  const ambiguous = documentWith([
    ...sidebarLocals.map(name => `${BUILT}_${name}`),
    ...sidebarLocals.map(name => `extra_${name}`)
  ]);
  const mapping = mapModules(css, modulesFromDom(ambiguous));
  const targets = [...mapping.values()];
  assert.equal(new Set(targets).size, targets.length);
});

test('tokens found in the authored stylesheet are all parseable', () => {
  const authored = require('node:fs').readFileSync(path.join(__dirname, '..', 'src', 'sidebar-next.css'), 'utf8');
  const tokens = tokensOf(authored);
  assert.ok(tokens.size > 0);
  for (const prefix of tokens.keys()) assert.ok(prefix.length > 0);
});

// The host injects each module's complete CSS as a <style> element. Reading those is what makes
// resolution independent of mount order, which is the difference between a correct layout on
// first paint and a broken one that only repairs itself after some later re-render.
const sheetDoc = sheets => ({ querySelectorAll: selector => (selector === 'style' ? sheets : []) });

test('a stylesheet inventory resolves modules that are not mounted yet', () => {
  const { modulesFromStylesheets } = require(path.join(__dirname, '..', 'src', 'module-map.cjs'));
  // Sidebar CSS is known; the workspace tree has not rendered at all.
  const doc = sheetDoc([{ textContent: `.${BUILT}_root{display:flex}.${BUILT}_footArea{color:red}`, dataset: {} }]);
  const inventory = modulesFromStylesheets(doc, 'dsh-industrial-acid-skin');
  assert.equal(inventory.get(BUILT).size, 2);
});

test('class names split at their last underscore so dashed and underscore hashes survive', () => {
  const { modulesFromStylesheets } = require(path.join(__dirname, '..', 'src', 'module-map.cjs'));
  const doc = sheetDoc([{ textContent: '.rh_gBW_table{x:1}.Kjh-qa_listArea{y:2}._77Pn0W_row{z:3}', dataset: {} }]);
  const inventory = modulesFromStylesheets(doc, 'dsh-industrial-acid-skin');
  assert.ok(inventory.get('rh_gBW')?.has('table'));
  assert.ok(inventory.get('Kjh-qa')?.has('listArea'));
  assert.ok(inventory.get('_77Pn0W')?.has('row'));
});

test('the skin never resolves against its own stylesheet', () => {
  const { modulesFromStylesheets } = require(path.join(__dirname, '..', 'src', 'module-map.cjs'));
  const doc = sheetDoc([
    { textContent: `.${BUILT}_root{x:1}`, dataset: { plugin: 'dsh-industrial-acid-skin' } },
    { textContent: '.acid-drawer{x:1}', dataset: {} }
  ]);
  const inventory = modulesFromStylesheets(doc, 'dsh-industrial-acid-skin');
  assert.equal(inventory.size, 0);
});

test('the stylesheet inventory covers modules the DOM has not mounted yet', () => {
  const { modulesFromDocument, mapModules } = require(path.join(__dirname, '..', 'src', 'module-map.cjs'));
  // Every module's CSS is present, but only the sidebar is mounted right now.
  const sidebar = sidebarLocals.map(n => `.${BUILT}_${n}{a:1}`).join('');
  const workspace = workspaceLocals.map(n => `.JoiKIa_${n}{a:1}`).join('');
  const listing = listLocals.map(n => `.Kjh-qa_${n}{a:1}`).join('');
  const sheets = [{ textContent: sidebar + workspace + listing, dataset: {} }];
  const doc = { querySelectorAll: selector => (selector === 'style' ? sheets : []) };

  const full = mapModules(css, modulesFromDocument(doc, 'own'));
  assert.equal(full.get(AUTHORED), BUILT);
  assert.equal(full.get('wnFoaW'), 'JoiKIa');
  assert.equal(full.get('GAkraW'), 'Kjh-qa');

  // The DOM alone only knows what is on screen, which is why stylesheets are the primary source.
  const partial = mapModules(css, modulesFromDom(documentWith(sidebarLocals.map(n => `${BUILT}_${n}`))));
  assert.equal(partial.has('wnFoaW'), false);
});

// A partial mapping is the state that actually breaks the layout: half of a component's rules
// match and half do not, so the grid reflows around pieces that are still unstyled. The runtime
// therefore paints nothing until every authored module has been placed on the running build.
test('stylesheet inventory resolves a module that is not mounted', () => {
  const sheets = [
    { textContent: `.${BUILT}_root{display:grid}.${BUILT}_footArea{padding:0}`, dataset: {} },
  ];
  const doc = { querySelectorAll: selector => (selector === 'style' ? sheets : []) };
  const inventory = modulesFromStylesheets(doc, 'own');
  const mapping = mapModules(`.${AUTHORED}_root{display:grid}.${AUTHORED}_footArea{padding:0}`, inventory);
  assert.equal(mapping.get(AUTHORED), BUILT);
});

test('greedy split keeps a multi-part local name intact', () => {
  // `rh_gBW` is a prefix containing an underscore; splitting lazily would read it as `rh`.
  assert.deepEqual(parseToken('rh_gBW_assistantVioletBright'), { prefix: 'rh_gBW', local: 'assistantVioletBright' });
});

test('a partial inventory leaves modules unresolved instead of guessing', () => {
  const sheets = [{ textContent: `.${BUILT}_root{display:grid}`, dataset: {} }];
  const doc = { querySelectorAll: selector => (selector === 'style' ? sheets : []) };
  const mapping = mapModules(`.${AUTHORED}_root{a:1}.${AUTHORED}_footArea{b:2}`, modulesFromDocument(doc, 'own'));
  // Only `root` is known, so the module cannot be identified with confidence.
  assert.equal(mapping.has(AUTHORED), false);
});

test('modulesFromDocument prefers stylesheets over the mounted DOM', () => {
  const sheets = [{ textContent: `.${BUILT}_root{}.${BUILT}_footArea{}`, dataset: {} }];
  const domClasses = ['legacy_unrelated'];
  const doc = {
    querySelectorAll: selector => (selector === 'style'
      ? sheets
      : domClasses.map(name => ({ getAttribute: () => name }))),
  };
  const inventory = modulesFromDocument(doc, 'own');
  assert.ok(inventory.has(BUILT));
});

// `.arrow`, `.span` and `.panel` exist in many modules. A signature made of one reusable name
// cannot tell them apart, so resolving it would point the rule at an unrelated component. Left
// unresolved the rule simply does not match, which is a missing decoration rather than a
// misplaced one.
test('a single reusable local name is not resolved when ambiguous', () => {
  const candidates = new Map([
    ['AAAAAA', new Set(['arrow', 'chevron'])],
    ['BBBBBB', new Set(['arrow', 'label'])],
  ]);
  assert.equal(resolvePrefix(new Set(['arrow']), candidates), null);
});

test('a single reusable local name remains unresolved even when candidates have different sizes', () => {
  const candidates = new Map([
    ['SMALL', new Set(['panel'])],
    ['RIGHT', new Set(['panel', 'tabBody'])],
  ]);
  assert.equal(resolvePrefix(new Set(['panel']), candidates), null);
});

test('right sidebar and font arrows use their complete component signatures', () => {
  const candidates = new Map([
    ['PICKER', new Set(['panel'])],
    ['RIGHT', new Set(['panel', 'tabBody'])],
    ['ATTACHMENT', new Set(['arrow'])],
    ['FONT', new Set(['arrow', 'stepper', 'arrows'])],
  ]);
  const mapping = mapModules('.OUqwTW_panel{}._0Fr0Ha_arrow{}', candidates);
  assert.equal(mapping.get('OUqwTW'), 'RIGHT');
  assert.equal(mapping.get('_0Fr0Ha'), 'FONT');
  assert.equal(rewrite('.OUqwTW_tabBody ._0Fr0Ha_arrow', mapping), '.RIGHT_tabBody .FONT_arrow');
});

test('component signatures wait for their host stylesheet instead of matching unrelated controls', () => {
  const candidates = new Map([
    ['PICKER', new Set(['panel'])],
    ['ATTACHMENT', new Set(['arrow'])],
  ]);
  const mapping = mapModules('.OUqwTW_panel{}._0Fr0Ha_arrow{}', candidates);
  assert.equal(mapping.has('OUqwTW'), false);
  assert.equal(mapping.has('_0Fr0Ha'), false);
});

test('a decisive signature still resolves', () => {
  const candidates = new Map([
    ['AAAAAA', new Set(['arrow', 'chevron'])],
    ['BBBBBB', new Set(['arrow', 'label'])],
  ]);
  assert.equal(resolvePrefix(new Set(['arrow', 'chevron']), candidates), 'AAAAAA');
});

test('unchanged host hashes count as resolved when building the initial mapping', () => {
  const current = new Map([['wtg9ga', new Set(['root', 'footArea', 'panelRow'])]]);
  const mapping = mapModules('.wtg9ga_root .wtg9ga_footArea .wtg9ga_panelRow', current);
  assert.equal(mapping.get('wtg9ga'), 'wtg9ga');
  assert.equal(rewrite('.wtg9ga_footArea', mapping), '.wtg9ga_footArea');
});
