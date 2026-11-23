// Generates assets/fonts/acid-cipher.otf — "Acid Cipher", an original unreadable pixel script.
// It replaces the code text of Harness's home-whale easter egg, so the whale is drawn in an
// unknown script instead of `ctx.plugin(Agent)`. The glyphs are original: built from a small set
// of stroke parts (stem, bars, hooks, detached dots, notches) on a 5×7 grid, seeded by the
// character code, so the output is deterministic and every letter and digit is distinct.
//
// Dev-only dependency: opentype.js 1.3.4. Point OPENTYPE_MODULE at an install of it, e.g.
//   npm install --prefix <tmp> opentype.js@1.3.4
//   OPENTYPE_MODULE=<tmp>/node_modules/opentype.js node tools/cipher-font.cjs
// Rebuilding the skin does not need it: the generated font is kept in assets/fonts.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const opentype = require(process.env.OPENTYPE_MODULE || 'opentype.js');

const root = path.resolve(__dirname, '..');
const COLS = 5, ROWS = 7, UNIT = 100;          // one cell = 100 units; the em is the 7-row cell
const EM = ROWS * UNIT, ADVANCE = (COLS + 1) * UNIT;

function rng(seed) { let s = seed >>> 0 || 1; return () => (s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296; }
const blank = () => Array.from({ length: ROWS }, () => Array(COLS).fill(0));
const set = (g, x, y) => { if (x >= 0 && x < COLS && y >= 0 && y < ROWS) g[y][x] = 1; };
const hbar = (g, y, x0, x1) => { for (let x = Math.min(x0, x1); x <= Math.max(x0, x1); x++) set(g, x, y); };
const vbar = (g, x, y0, y1) => { for (let y = Math.min(y0, y1); y <= Math.max(y0, y1); y++) set(g, x, y); };
const key = g => g.map(r => r.join('')).join('/');
const ink = g => g.flat().reduce((a, b) => a + b, 0);

// Rows are counted from the top: row 0 is the cap line, row 6 sits on the baseline.
function letter(code, tall) {
  const r = rng(code * 2654435761);
  const top = tall ? 0 : 2;                      // lowercase uses rows 2–6 (a five-row x-height)
  const mid = tall ? 3 : 4;
  const g = blank();
  // Spine: the script's backbone, on the left, centre or right.
  const stem = [0, 2, 4][Math.floor(r() * 3)];
  if (r() < 0.82) vbar(g, stem, r() < 0.25 ? mid : top, 6);
  // Bars hang off the spine toward the open side.
  const away = stem === 4 ? -1 : 1, reach = () => stem + away * (1 + Math.floor(r() * 4));
  const rows = [top, mid, 6].filter(() => r() < 0.55);
  if (!rows.length) rows.push([top, mid, 6][Math.floor(r() * 3)]);
  for (const y of rows) hbar(g, y, stem, reach());
  // Second, shorter stroke: a hook down from a bar, or a counter-stem.
  if (r() < 0.6) { const x = Math.max(0, Math.min(4, reach())); vbar(g, x, rows[0], rows[0] + 1 + Math.floor(r() * 2)); }
  // Detached notation dot, the script's signature.
  if (r() < 0.5) set(g, stem === 0 ? 4 : 0, top);
  // Notch: cut one cell out of a long run so strokes read as machined parts.
  if (r() < 0.45) { const y = rows[Math.floor(r() * rows.length)]; const x = 1 + Math.floor(r() * 3); if (ink(g) > 7) g[y][x] = 0; }
  return g;
}

function digit(n) {
  const r = rng((n + 101) * 40503);
  const g = blank();
  hbar(g, 1, 0, 4); hbar(g, 6, 0, 4); vbar(g, 0, 1, 6); vbar(g, 4, 1, 6);  // a frame…
  const pattern = n.toString(2).padStart(4, '0');                          // …filled with its number's bits
  [...pattern].forEach((b, i) => { if (b === '1') { set(g, 1 + (i % 2) * 2, 2 + Math.floor(i / 2) * 2); set(g, 2 + (i % 2) * 2 - 1, 3 + Math.floor(i / 2) * 2); } });
  if (r() < 0.5) set(g, 2, 0);
  return g;
}

// Punctuation keeps code's rhythm — brackets still bracket, "=" still binds — without being legible.
const PUNCT = {
  '(': g => { vbar(g, 1, 1, 5); set(g, 2, 0); set(g, 2, 6); },
  ')': g => { vbar(g, 3, 1, 5); set(g, 2, 0); set(g, 2, 6); },
  '{': g => { vbar(g, 2, 0, 6); set(g, 3, 0); set(g, 3, 6); set(g, 1, 3); },
  '}': g => { vbar(g, 2, 0, 6); set(g, 1, 0); set(g, 1, 6); set(g, 3, 3); },
  '[': g => { vbar(g, 1, 0, 6); hbar(g, 0, 1, 3); hbar(g, 6, 1, 3); },
  ']': g => { vbar(g, 3, 0, 6); hbar(g, 0, 1, 3); hbar(g, 6, 1, 3); },
  '.': g => { set(g, 2, 6); },
  ',': g => { set(g, 2, 5); set(g, 1, 6); },
  ':': g => { set(g, 2, 2); set(g, 2, 5); },
  ';': g => { set(g, 2, 2); set(g, 2, 5); set(g, 1, 6); },
  '"': g => { vbar(g, 1, 0, 1); vbar(g, 3, 0, 1); },
  "'": g => { vbar(g, 2, 0, 1); },
  '=': g => { hbar(g, 2, 0, 4); hbar(g, 4, 0, 4); set(g, 2, 3); },
  '>': g => { set(g, 0, 1); set(g, 1, 2); set(g, 2, 3); set(g, 1, 4); set(g, 0, 5); set(g, 3, 3); },
  '<': g => { set(g, 4, 1); set(g, 3, 2); set(g, 2, 3); set(g, 3, 4); set(g, 4, 5); set(g, 1, 3); },
  '/': g => { for (let i = 0; i < 5; i++) set(g, 4 - i, 1 + i); set(g, 4, 0); },
  '\\': g => { for (let i = 0; i < 5; i++) set(g, i, 1 + i); set(g, 0, 0); },
  '_': g => { hbar(g, 6, 0, 4); },
  '-': g => { hbar(g, 3, 1, 3); },
  '+': g => { hbar(g, 3, 0, 4); vbar(g, 2, 1, 5); },
  '*': g => { set(g, 2, 2); set(g, 1, 3); set(g, 3, 3); set(g, 2, 4); set(g, 0, 1); set(g, 4, 5); },
  '#': g => { vbar(g, 1, 1, 5); vbar(g, 3, 1, 5); hbar(g, 2, 0, 4); hbar(g, 4, 0, 4); },
  '!': g => { vbar(g, 2, 0, 3); set(g, 2, 6); set(g, 3, 1); },
  '?': g => { hbar(g, 0, 1, 3); set(g, 3, 1); set(g, 2, 2); set(g, 2, 3); set(g, 2, 6); },
  '|': g => { vbar(g, 2, 0, 6); set(g, 3, 3); },
  '&': g => { hbar(g, 0, 1, 2); vbar(g, 1, 0, 6); hbar(g, 6, 1, 4); set(g, 3, 3); set(g, 4, 4); },
  '@': g => { hbar(g, 1, 0, 4); hbar(g, 5, 0, 4); vbar(g, 0, 1, 5); vbar(g, 4, 1, 3); set(g, 2, 3); },
  '$': g => { vbar(g, 2, 0, 6); hbar(g, 1, 1, 4); hbar(g, 3, 1, 3); hbar(g, 5, 0, 3); },
  '%': g => { set(g, 0, 0); set(g, 4, 6); for (let i = 0; i < 5; i++) set(g, 4 - i, 1 + i); },
  '^': g => { set(g, 2, 0); set(g, 1, 1); set(g, 3, 1); set(g, 0, 2); set(g, 4, 2); },
  '~': g => { set(g, 0, 3); set(g, 1, 2); set(g, 2, 3); set(g, 3, 4); set(g, 4, 3); },
  '`': g => { set(g, 1, 0); set(g, 2, 1); },
};

function glyphGrid(ch) {
  const code = ch.charCodeAt(0);
  if (PUNCT[ch]) { const g = blank(); PUNCT[ch](g); return g; }
  if (/[0-9]/.test(ch)) return digit(code - 48);
  if (/[A-Za-z]/.test(ch)) return letter(code, /[A-Z]/.test(ch));
  return blank();
}

function toPath(g) {
  const p = new opentype.Path();
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (!g[y][x]) continue;
      let end = x; while (end + 1 < COLS && g[y][end + 1]) end++;
      const x0 = x * UNIT, x1 = (end + 1) * UNIT, y1 = (ROWS - y) * UNIT, y0 = y1 - UNIT;
      p.moveTo(x0, y0); p.lineTo(x1, y0); p.lineTo(x1, y1); p.lineTo(x0, y1); p.close();
      x = end;
    }
  }
  return p;
}

const glyphs = [new opentype.Glyph({ name: '.notdef', unicode: 0, advanceWidth: ADVANCE, path: new opentype.Path() })];
const grids = new Map(), seen = new Map();
for (let code = 0x20; code <= 0x7e; code++) {
  const ch = String.fromCharCode(code);
  let g = glyphGrid(ch);
  // Letters and digits must all differ and carry enough strokes to read as script rather than
  // debris (capitals 8 cells, lowercase 6); a clash or a sparse glyph re-rolls with a shifted seed.
  if (/[A-Za-z0-9]/.test(ch)) {
    let salt = 0;
    const least = /[A-Z]/.test(ch) ? 8 : /[a-z]/.test(ch) ? 6 : 4;
    while (seen.has(key(g)) || ink(g) < least) { salt++; g = /[0-9]/.test(ch) ? digit(code - 48 + salt * 16) : letter(code + salt * 977, /[A-Z]/.test(ch)); }
    seen.set(key(g), ch);
  }
  grids.set(ch, g);
  glyphs.push(new opentype.Glyph({ name: code === 0x20 ? 'space' : `uni${code.toString(16).toUpperCase().padStart(4, '0')}`, unicode: code, advanceWidth: ADVANCE, path: toPath(g) }));
}

const font = new opentype.Font({ familyName: 'Acid Cipher', styleName: 'Regular', unitsPerEm: EM, ascender: EM, descender: 0, glyphs,
  copyright: 'Original glyphs for the dsh-industrial-acid-skin. MIT License.', version: '1.000' });
const out = path.join(root, 'assets/fonts/acid-cipher.otf');
const bytes = Buffer.from(font.toArrayBuffer());
fs.writeFileSync(out, bytes);
const report = { family: 'Acid Cipher', generator: 'tools/cipher-font.cjs', opentype: require(path.join(path.dirname(require.resolve(process.env.OPENTYPE_MODULE || 'opentype.js')), '..', 'package.json')).version,
  grid: `${COLS}x${ROWS}`, unitsPerEm: EM, advance: ADVANCE, asciiCoverage: grids.size, distinctLettersAndDigits: seen.size, otfSha256: crypto.createHash('sha256').update(bytes).digest('hex') };
fs.writeFileSync(path.join(root, 'assets/fonts/acid-cipher.json'), JSON.stringify(report, null, 2) + '\n');
// A text preview of every glyph, for review without a font viewer.
if (process.argv.includes('--preview')) for (const [ch, g] of grids) if (ch !== ' ') console.log(`${ch}\n${g.map(r => r.map(v => (v ? '█' : '·')).join('')).join('\n')}`);
console.log(JSON.stringify(report));
