const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const font = name => fs.readFileSync(path.join(root, 'assets/fonts', name)).toString('base64');
const css = (fs.readFileSync(path.join(root, 'src/skin.css'), 'utf8') + '\n' + fs.readFileSync(path.join(root,'src/planar.css'),'utf8') + '\n' + fs.readFileSync(path.join(root,'src/model-controls.css'),'utf8') + '\n' + fs.readFileSync(path.join(root,'src/accepted-motion.css'),'utf8') + '\n' + fs.readFileSync(path.join(root,'src/sidebar-next.css'),'utf8'))
  .concat('\n', fs.readFileSync(path.join(root, 'src/token-activity.css'), 'utf8'))
  .concat('\n', fs.readFileSync(path.join(root, 'src/marathon.css'), 'utf8'))
  .replaceAll('__GRID_WOFF2__', font('eventide-grid.woff2'))
  .replaceAll('__SIGNAL_WOFF2__', font('eventide-signal.woff2'));
const svg = fs.readFileSync(path.join(root, 'assets/masthead.svg'), 'utf8');
const source = fs.readFileSync(path.join(root, 'src/client.js'), 'utf8')
  .replace('/*__WORKSPACE_CORE__*/', fs.readFileSync(path.join(root,'src/workspaces.js'),'utf8'))
  .replace('/*__MODULE_MAP__*/', () => fs.readFileSync(path.join(root, 'src/module-map.cjs'), 'utf8').replace(/^'use strict';\n/, ''))
  .replace('/*__MOTION_CORE__*/', fs.readFileSync(path.join(root,'src/accepted-motion.js'),'utf8') + '\n' + fs.readFileSync(path.join(root,'src/motion.js'),'utf8'))
  .replace('/*__SHELL_CORE__*/', fs.readFileSync(path.join(root,'src/shell.js'),'utf8'))
  .replace('/*__SIDEBAR_CORE__*/', fs.readFileSync(path.join(root,'src/sidebar-next.js'),'utf8'))
  .replace('/*__MODEL_CORE__*/', fs.readFileSync(path.join(root,'src/max-berserk.js'),'utf8') + '\n' + fs.readFileSync(path.join(root,'src/model-controls.js'),'utf8'))
  .replace('"__SYMBOL_SVG__"',JSON.stringify(fs.readFileSync(path.join(root,'assets/symbol.svg'),'utf8').replace(/^<svg[^>]*>|<\/svg>$/g,'')))
  .replace('/*__MARATHON_CORE__*/', () => ['marathon-core.js', 'marathon-stage.js', 'marathon.js'].map(name => fs.readFileSync(path.join(root, 'src', name), 'utf8')).join('\n'))
  .replace('/*__PALETTE_CORE__*/', fs.readFileSync(path.join(root, 'src/palette.js'), 'utf8'))
  .replace('/*__TOKEN_ACTIVITY_CORE__*/', fs.readFileSync(path.join(root, 'src/token-activity-core.js'), 'utf8').replace(/^export /gm, '') + '\n' + fs.readFileSync(path.join(root, 'src/token-activity.js'), 'utf8'))
  .replace('"__SKIN_CSS__"', JSON.stringify(css))
  .replace('"__MASTHEAD_SVG__"', JSON.stringify(svg));
// Every module prefix the stylesheet is authored against. The runtime refuses to paint a
// partial mapping, so it needs the complete expected set rather than "whatever resolved".
const authoredPrefixes = [...new Set([...css.matchAll(/\.((?:_?[A-Za-z0-9][A-Za-z0-9_-]*?)_[a-z][A-Za-z0-9]*)/g)]
  .map(match => match[1].slice(0, match[1].lastIndexOf('_'))))].sort();
// Modules that own the shell: the frame grid, the sidebar tree, the workspace list and the
// composer. Everything else (settings, plugin manager, deliverables) loads on demand, so making
// the paint wait for those would hold the skin back until the user opens that page.
const STRUCTURAL = new Set(['mP3x-q', 'wtg9ga', 'GAkraW', 'wnFoaW', 'RlGAzG', 'GRgSLq', 'Dc7zOa', 'WOwLGG', 'OUqwTW']);
const structuralPrefixes = authoredPrefixes.filter(prefix => STRUCTURAL.has(prefix));
fs.mkdirSync(path.join(root, 'lib'), { recursive: true });
fs.writeFileSync(path.join(root, 'lib/client.js'), source.replace('__AUTHORED_MODULES__', JSON.stringify(authoredPrefixes)).replace('__STRUCTURAL_MODULES__', JSON.stringify(structuralPrefixes)));
for (const name of ['token-activity-core.js', 'token-activity-host.js', 'desktop-icon-host.js', 'desktop-icon.ps1']) fs.copyFileSync(path.join(root, 'src', name), path.join(root, 'lib', name));
console.log(JSON.stringify({ clientBytes: Buffer.byteLength(source), fontsEmbedded: 2, harnessLetters: [...svg.matchAll(/data-harness-letter="([A-Z])"/g)].map(x => x[1]).join('') }));
