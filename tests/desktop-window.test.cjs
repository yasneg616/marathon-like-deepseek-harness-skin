const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

const root = path.join(__dirname, '..');
const load = () => import(pathToFileURL(path.join(root, 'lib', 'desktop-icon-host.js')).href);
const script = fs.readFileSync(path.join(root, 'src', 'desktop-icon.ps1'), 'utf8');

// A Desktop Host as Harness starts it: Electron-as-Node, connected, child of DeepSeek Harness.exe.
const host = () => ({ platform: 'win32', env: { ELECTRON_RUN_AS_NODE: '1' }, connected: true, ppid: 4100, pid: 4200,
  execPath: 'C:\\Apps\\DeepSeek Harness.exe', argv: ['C:\\Apps\\DeepSeek Harness.exe', 'C:\\x\\@deepseek-ai\\dsh-desktop-host\\lib\\index.js'] });

function fakeHelper() {
  const handlers = {};
  return { calls: [], stdinEnds: [], options: null,
    launch(command, args, options) { this.calls.push({ command, args }); this.options = options;
      const helper = { stderr: { resume() {} }, stdin: { on() {}, end: text => { this.stdinEnds.push(text); handlers.close?.(0); } },
        once: (event, fn) => { handlers[event] = fn; } };
      return helper; } };
}
const context = () => { const effects = []; return { effects, effect: (fn, label) => effects.push({ fn, label }), logger: () => ({ warn() {} }) }; };

test('the window helper squares the corners by default and keeps the icon', async () => {
  const { installDesktopIcon } = await load();
  const ctx = context(), helper = fakeHelper();
  installDesktopIcon(ctx, host(), helper.launch.bind(helper));
  assert.equal(ctx.effects.length, 1);
  assert.match(ctx.effects[0].label, /icon and corners/);
  const dispose = ctx.effects[0].fn();
  assert.equal(helper.calls[0].command, 'powershell.exe');
  assert.equal(helper.options.env.INDUSTRIAL_WINDOW_ICON, '1');
  assert.equal(helper.options.env.INDUSTRIAL_SQUARE_CORNERS, '1');
  // Disable asks the helper to stop (it restores before exiting) instead of killing it.
  await dispose();
  assert.deepEqual(helper.stdinEnds, ['stop\n']);
});

test('either half can be switched off; with both off no helper starts', async () => {
  const { installDesktopIcon } = await load();
  for (const [options, icon, square] of [[{ squareCorners: false }, '1', '0'], [{ icon: false }, '0', '1']]) {
    const ctx = context(), helper = fakeHelper();
    installDesktopIcon(ctx, host(), helper.launch.bind(helper), options);
    ctx.effects[0].fn();
    assert.equal(helper.options.env.INDUSTRIAL_WINDOW_ICON, icon);
    assert.equal(helper.options.env.INDUSTRIAL_SQUARE_CORNERS, square);
  }
  const ctx = context();
  installDesktopIcon(ctx, host(), () => assert.fail('no helper expected'), { icon: false, squareCorners: false });
  assert.equal(ctx.effects.length, 0);
});

test('nothing runs outside the Electron-owned Desktop Host', async () => {
  const { installDesktopIcon } = await load();
  const ctx = context();
  installDesktopIcon(ctx, { ...host(), platform: 'darwin' }, () => assert.fail('no helper expected'));
  installDesktopIcon(ctx, { ...host(), env: {} }, () => assert.fail('no helper expected'));
  assert.equal(ctx.effects.length, 0);
});

test('the helper squares through DWM and hands the system corners back on disposal', () => {
  assert.match(script, /DllImport\("dwmapi\.dll"\)\] static extern int DwmSetWindowAttribute/);
  assert.match(script, /DwmSetWindowAttribute\(window, 33, ref value, 4\)/);       // DWMWA_WINDOW_CORNER_PREFERENCE
  assert.match(script, /if \(squareCorners && Corners\(window, 1\)\) squared\.Add\(window\)/);  // DWMWCP_DONOTROUND
  assert.match(script, /foreach \(var window in squared\) if \(BelongsToDesktop\(window\)\) Corners\(window, 0\)/); // DWMWCP_DEFAULT
  assert.match(script, /\$env:INDUSTRIAL_WINDOW_ICON -ne '0', \$env:INDUSTRIAL_SQUARE_CORNERS -ne '0'/);
});
