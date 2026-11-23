import { spawn } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { win32 } from 'node:path';
import { fileURLToPath } from 'node:url';

/** Only the Electron-owned Desktop Host may change its parent window icons. */
export function isDesktopIconHost(runtime = process) {
  return runtime.platform === 'win32' && runtime.env.ELECTRON_RUN_AS_NODE === '1'
    && runtime.connected === true && Number.isSafeInteger(runtime.ppid) && runtime.ppid > 0
    && win32.basename(runtime.execPath).toLowerCase() === 'deepseek harness.exe'
    && runtime.argv.some(value => /[/\\]@deepseek-ai[/\\]dsh-desktop-host[/\\]lib[/\\]index\.js$/i.test(value));
}

/**
 * One helper dresses the Desktop window: the skin icon and square corners (Windows 11 rounds every
 * window; the skin is a hard-edged object). A pipe owns the helper lifetime: disable, Host exit and
 * pipe EOF restore the original icons and the system corners.
 */
export function installDesktopIcon(ctx, runtime = process, launch = spawn, { icon = true, squareCorners = true } = {}) {
  if (!isDesktopIconHost(runtime) || (!icon && !squareCorners)) return;
  const warn = () => ctx.logger('industrial-acid').warn('Windows window icon could not be updated; the skin remains available.');
  ctx.effect(() => {
    let helper;
    try {
      const script = readFileSync(new URL('./desktop-icon.ps1', import.meta.url), 'utf8');
      helper = launch('powershell.exe', ['-NoLogo', '-NoProfile', '-NonInteractive', '-EncodedCommand', Buffer.from(script, 'utf16le').toString('base64')], {
        windowsHide: true,
        stdio: ['pipe', 'ignore', 'pipe'],
        env: {
          ...runtime.env,
          INDUSTRIAL_DESKTOP_PID: String(runtime.ppid),
          INDUSTRIAL_HOST_PID: String(runtime.pid),
          INDUSTRIAL_DESKTOP_EXE: runtime.execPath,
          INDUSTRIAL_ICON_FILE: fileURLToPath(new URL('../assets/window.ico', import.meta.url)),
          INDUSTRIAL_WINDOW_ICON: icon ? '1' : '0',
          INDUSTRIAL_SQUARE_CORNERS: squareCorners ? '1' : '0'
        }
      });
    } catch {
      warn();
      return;
    }
    // Drain diagnostics without exposing machine paths or letting a failed helper break the Host.
    helper.stderr.resume();
    helper.stdin.on('error', () => {});
    let finished = false;
    const closed = new Promise(resolve => {
      helper.once('error', () => { finished = true; warn(); resolve(); });
      helper.once('close', code => { finished = true; if (code !== 0 && code !== null) warn(); resolve(); });
    });
    return async () => {
      if (finished) return;
      helper.stdin.end('stop\n');
      // Do not kill the helper: it must restore WM_SETICON before releasing its HICONs.
      await closed;
    };
  }, 'industrial-acid: reversible Windows window icon and corners');
}
