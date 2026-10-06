const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const font = name => fs.readFileSync(path.join(root, 'assets/fonts', name)).toString('base64');
const css = (fs.readFileSync(path.join(root, 'src/skin.css'), 'utf8') + '\n' + fs.readFileSync(path.join(root,'src/planar.css'),'utf8') + '\n' + fs.readFileSync(path.join(root,'src/model-controls.css'),'utf8') + '\n' + fs.readFileSync(path.join(root,'src/accepted-motion.css'),'utf8'))
  .replaceAll('__GRID_WOFF2__', font('eventide-grid.woff2'))
  .replaceAll('__SIGNAL_WOFF2__', font('eventide-signal.woff2'));
const svg = fs.readFileSync(path.join(root, 'assets/masthead.svg'), 'utf8');
const source = fs.readFileSync(path.join(root, 'src/client.js'), 'utf8')
  .replace('/*__WORKSPACE_CORE__*/', fs.readFileSync(path.join(root,'src/workspaces.js'),'utf8'))
  .replace('/*__MOTION_CORE__*/', fs.readFileSync(path.join(root,'src/accepted-motion.js'),'utf8') + '\n' + fs.readFileSync(path.join(root,'src/motion.js'),'utf8'))
  .replace('/*__SHELL_CORE__*/', fs.readFileSync(path.join(root,'src/shell.js'),'utf8'))
  .replace('/*__MODEL_CORE__*/', fs.readFileSync(path.join(root,'src/max-berserk.js'),'utf8') + '\n' + fs.readFileSync(path.join(root,'src/model-controls.js'),'utf8'))
  .replace('"__SYMBOL_SVG__"',JSON.stringify(fs.readFileSync(path.join(root,'assets/symbol.svg'),'utf8').replace(/^<svg[^>]*>|<\/svg>$/g,'')))
  .replace('/*__PALETTE_CORE__*/', fs.readFileSync(path.join(root, 'src/palette.js'), 'utf8'))
  .replace('"__SKIN_CSS__"', JSON.stringify(css))
  .replace('"__MASTHEAD_SVG__"', JSON.stringify(svg));
fs.mkdirSync(path.join(root, 'lib'), { recursive: true });
fs.writeFileSync(path.join(root, 'lib/client.js'), source);
console.log(JSON.stringify({ clientBytes: Buffer.byteLength(source), fontsEmbedded: 2, harnessLetters: [...svg.matchAll(/data-harness-letter="([A-Z])"/g)].map(x => x[1]).join('') }));
