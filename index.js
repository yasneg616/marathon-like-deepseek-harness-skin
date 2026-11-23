import { writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { installTokenActivityHost } from './lib/token-activity-host.js';
import { installDesktopIcon } from './lib/desktop-icon-host.js';
import { installWindowControlHost } from './lib/window-control-host.js';

/** Host half: validates options and serves counters from read-only session observations. */
export const name = 'industrial-acid-skin';

/** Mount daily usage counters and the optional temporary validation connection. */
export function apply(ctx, raw = {}) {
  const height = raw.mastheadHeight ?? 216;
  const canvas = raw.canvas ?? 'paper';
  if (!Number.isFinite(height) || height < 96 || height > 260) {
    throw new Error('mastheadHeight must be between 96 and 260 CSS pixels.');
  }
  if (!['paper', 'night', 'adaptive'].includes(canvas)) throw new Error('canvas must be paper, night or adaptive.');
  if (raw.diagnostics !== undefined && typeof raw.diagnostics !== 'boolean') {
    throw new Error('diagnostics must be a boolean.');
  }
  if (raw.desktopIcon !== undefined && typeof raw.desktopIcon !== 'boolean') {
    throw new Error('desktopIcon must be a boolean.');
  }
  if (raw.squareCorners !== undefined && typeof raw.squareCorners !== 'boolean') {
    throw new Error('squareCorners must be a boolean.');
  }
  // Windows only, and reversible: the helper hands the icon and the corners back on disable.
  installDesktopIcon(ctx, process, undefined, { icon: raw.desktopIcon !== false, squareCorners: raw.squareCorners !== false });
  ctx.inject(['connection', 'sessionQuery'], installTokenActivityHost);
  // The macOS build exposes no window-control channel to the renderer, so the caption buttons
  // route through the host half, which can reach the accessibility API.
  ctx.inject(['connection'], installWindowControlHost);
  if (raw.diagnostics === true) ctx.inject(['connection', 'webServer'], (child) => {
    child.effect(() => {
      const directory = fileURLToPath(new URL('.validation/', import.meta.url));
      const file = fileURLToPath(new URL('.validation/connection.json', import.meta.url));
      mkdirSync(directory, { recursive: true });
      const url = child.connection.authenticatedUrl(`http://127.0.0.1:${child.webServer.port}`);
      writeFileSync(file, JSON.stringify({ url }), { mode: 0o600 });
      return () => rmSync(file, { force: true });
    }, 'industrial-acid: temporary validation connection');
  });
}
