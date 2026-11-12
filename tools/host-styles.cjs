// Read the host's emitted CSS without executing its bundles or starting the application.
const fs = require('node:fs');
const { runInNewContext } = require('node:vm');
const { parse } = require('./desktop-bridge.cjs');

// The packaged clients emit either JSON strings or template literals without substitutions.
const literal = /("(?:[^"\\]|\\.)*"|`(?:[^`\\$]|\\[\s\S]|\$(?!\{))*`)/.source;
const sheetDeclaration = new RegExp(`\\bconst css(?:\\$\\d+)?\\s*=\\s*${literal};\\s*const tagId(?:\\$\\d+)?\\s*=\\s*${literal}`, 'g');

function hostStyles(asar) {
  const archive = parse(fs.readFileSync(asar)), sheets = [];
  function walk(node, prefix = '') {
    for (const [name, entry] of Object.entries(node.files || {})) {
      const file = prefix + name;
      if (entry.files) { walk(entry, file + '/'); continue; }
      if (!file.startsWith('dsh/node_modules/@deepseek-ai/') || !/\/lib\/client[\w.-]*\.js$/.test(file)) continue;
      const source = archive.read(file).toString('utf8');
      for (const match of source.matchAll(sheetDeclaration)) {
        const tagId = runInNewContext(match[2]);
        sheets.push({ textContent: runInNewContext(match[1]), dataset: { plugin: tagId.split('/').slice(0, 2).join('/'), pluginCss: tagId } });
      }
    }
  }
  walk(archive.tree);
  return sheets;
}

module.exports = { hostStyles };
