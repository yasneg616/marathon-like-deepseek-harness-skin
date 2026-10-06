import { writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

/** Host half: validates visual options; all UI work belongs to the Client half. */
export const name = 'industrial-acid-skin';

/** Mount the skin's Host settings and optional temporary validation connection. */
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
