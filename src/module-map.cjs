'use strict';

// CSS modules emit class names as `<hash>_<localName>`. The hash is derived from the module
// path inside one particular DSH build, so it changes between builds and platforms even when
// the version number is identical. The local name is stable, which makes it the only safe
// anchor for a skin that has to run on every build.
//
// The skin keeps readable tokens such as `wtg9ga_footArea` in source. Before use, each token is
// rewritten to the hash of the running build. A module is identified by the set of local names
// the skin relies on: a candidate must contain every one of them, and the smallest such
// candidate wins. Local names are far more distinctive together than alone, so this resolves
// without hardcoding any build-specific value.
//
// Class names are collected from the live DOM rather than from a stylesheet listing. That is
// also the only correct window: a selector can only match an element that is already mounted,
// so the moment a query runs, the real class name is in the DOM and can be discovered. When a
// module cannot be identified the original token is left untouched, which keeps the skin
// looking exactly as it does without this step.

// `<prefix>_<local>`, allowing a leading `_` and dashes inside either part.
const TOKEN = /(^|[^\w-])((?:_?[A-Za-z0-9][A-Za-z0-9_-]*?)_([a-z][A-Za-z0-9]*))(?=[^\w-]|$)/g;

function parseToken(token) {
  const split = token.lastIndexOf('_');
  if (split < 1) return null;
  return { prefix: token.slice(0, split), local: token.slice(split + 1) };
}

function tokensOf(source) {
  const byPrefix = new Map();
  for (const match of source.matchAll(TOKEN)) {
    const parsed = parseToken(match[2]);
    if (!parsed) continue;
    if (!byPrefix.has(parsed.prefix)) byPrefix.set(parsed.prefix, new Set());
    byPrefix.get(parsed.prefix).add(parsed.local);
  }
  return byPrefix;
}

// Every host stylesheet ships its complete CSS text as a <style> element, which lists all of a
// module's class names whether or not the matching component is mounted. That makes stylesheets
// the dependable source: the sidebar tree mounts long after the plugin starts, so reading the DOM
// alone yields a partial inventory and the layout comes out wrong until something re-triggers it.
function modulesFromStylesheets(doc, ownMark) {
  const byPrefix = new Map();
  const scan = text => {
    if (!text) return;
    // Greedy prefix: the class name splits at its LAST underscore, which is where the host puts
    // the boundary. A lazy pattern would cut `rh_gBW_assistantVioletBright` in the wrong place.
    for (const match of text.matchAll(/\.([A-Za-z0-9_-]+_[a-z][A-Za-z0-9]*)(?![\w-])/g)) {
      const parsed = parseToken(match[1]);
      if (!parsed) continue;
      if (!byPrefix.has(parsed.prefix)) byPrefix.set(parsed.prefix, new Set());
      byPrefix.get(parsed.prefix).add(parsed.local);
    }
  };
  for (const node of doc.querySelectorAll('style')) {
    if (ownMark && node.dataset?.plugin === ownMark) continue;
    scan(node.textContent);
  }
  return byPrefix;
}

// Group the class names actually present in the document by their CSS module prefix.
function modulesFromDom(doc) {
  const byPrefix = new Map();
  const add = name => {
    const parsed = parseToken(name);
    if (!parsed) return;
    if (!byPrefix.has(parsed.prefix)) byPrefix.set(parsed.prefix, new Set());
    byPrefix.get(parsed.prefix).add(parsed.local);
  };
  for (const element of doc.querySelectorAll('[class]')) {
    const value = element.getAttribute('class');
    if (!value) continue;
    for (const name of value.split(/\s+/)) if (name) add(name);
  }
  return byPrefix;
}

// Pick the host module that best explains an authored token set.
//
// Matching only on "contains every local name" is too loose for the tokens that carry a single
// reusable local: `.arrow`, `.span` and `.panel` exist in many modules, so the smallest superset
// can be an unrelated component and the rule then points at the wrong element. The redundancy of
// the signature is what makes it safe, so a single-name signature is only accepted when it
// identifies exactly one candidate. Ambiguous cases are left unresolved, which means the authored
// name stays in place and the rule simply does not match — a missing decoration rather than a
// rule applied to the wrong widget.
function resolvePrefix(locals, candidates) {
  let best = null;
  let matches = 0;
  for (const [prefix, names] of candidates) {
    let missing = false;
    for (const local of locals) if (!names.has(local)) { missing = true; break; }
    if (missing) continue;
    matches++;
    if (!best || names.size < best.size) best = { prefix, size: names.size };
  }
  if (!best) return null;
  // A one-name signature cannot tell different modules apart, regardless of their size.
  if (locals.size < 2 && matches > 1) return null;
  return best.prefix;
}

// Resolve as many skin prefixes as the document currently allows.
// Prefer the complete stylesheet inventory and fall back to the DOM when no host stylesheet is
// reachable (for example if the host switches to adopted stylesheets).
function modulesFromDocument(doc, ownMark) {
  const fromSheets = modulesFromStylesheets(doc, ownMark);
  if (fromSheets.size) return fromSheets;
  return modulesFromDom(doc);
}

function mapModules(css, candidates) {
  const mapping = new Map();
  const byPrefix = tokensOf(css);
  // Larger signatures first so the most specific module claims its hash first; ties are ordered
  // by name to keep the result identical across runs.
  const ordered = [...byPrefix].sort((a, b) => b[1].size - a[1].size || (a[0] < b[0] ? -1 : 1));
  for (const [prefix, locals] of ordered) {
    // The stylesheet only references a common local name for these components. Include the
    // other stable names used by the host so unrelated panels and arrows cannot win the match.
    const extra = prefix === 'OUqwTW' ? ['tabBody'] : prefix === '_0Fr0Ha' ? ['stepper', 'arrows'] : [];
    const hit = resolvePrefix(new Set([...locals, ...extra]), candidates);
    if (hit) mapping.set(prefix, hit); // Unchanged hashes still count as resolved for first paint.
  }
  return mapping;
}

function rewrite(source, mapping) {
  if (!mapping.size) return source;
  return source.replace(TOKEN, (whole, before, token) => {
    const parsed = parseToken(token);
    if (!parsed) return whole;
    const next = mapping.get(parsed.prefix);
    if (!next || next === parsed.prefix) return whole;
    return before + next + '_' + parsed.local;
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TOKEN, parseToken, tokensOf, modulesFromDom, modulesFromStylesheets, modulesFromDocument, resolvePrefix, mapModules, rewrite };
}
