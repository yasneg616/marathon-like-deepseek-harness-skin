#!/usr/bin/env node
// Verifies the deployed host module can actually drive this window, without going through the
// app. Useful after a restart: if this passes but the buttons still do nothing, the host process
// is running older code than what is on disk.
const { execFileSync } = require('node:child_process');
const { existsSync, readdirSync } = require('node:fs');
const { homedir } = require('node:os');
const { join } = require('node:path');
const { pathToFileURL } = require('node:url');

const home = homedir();
const PACKAGE = 'dsh-industrial-acid-skin';
const HOST = join('lib', 'window-control-host.js');

// The plugin is deployed twice: pnpm copies it into the profile's node_modules, and the versioned
// copy stays under ~/.dsh/plugins. The version directory is not hardcoded — it changes on every
// release, and a stale one made this check print nothing at all, which reads like a pass.
function deployedHosts() {
  const copied = join(home, '.dsh', 'profiles', 'desktop', 'node_modules', PACKAGE, HOST);
  const root = join(home, '.dsh', 'plugins', PACKAGE);
  let versions = [];
  try {
    versions = readdirSync(root, { withFileTypes: true })
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name)
      .sort((a, b) => b.localeCompare(a, 'en', { numeric: true }));
  } catch {}
  const versioned = versions.map(version => join(root, version, HOST));
  return [copied, ...versioned].filter(file => existsSync(file));
}

(async () => {
  const candidates = deployedHosts();
  if (!candidates.length) {
    console.log(`no deployed ${PACKAGE} found under ${join(home, '.dsh')}`);
    return;
  }
  for (const file of candidates) {
    try {
      // A bare absolute path is not a valid ES module specifier on Windows: the loader reads "D:"
      // as a URL scheme and refuses it (ERR_UNSUPPORTED_ESM_URL_SCHEME). Import through a file URL
      // so the check runs everywhere the desktop build does.
      const m = await import(pathToFileURL(file).href);
      const state = await m.applyWindowAction('state');
      console.log(`${file}\n  state: ${JSON.stringify(state)}`);
      if (!state.available) {
        console.log('  host cannot read the window. Check System Settings > Privacy & Security > Accessibility for DeepSeek Harness.');
      }
    } catch (error) {
      console.log(`${file}\n  FAILED: ${error.message}`);
    }
  }
  // A host process started before the module was written cannot serve the route. `ps -eo lstart`
  // is a BSD/GNU spelling, so the hint is skipped where ps does not accept it.
  if (process.platform === 'win32') return;
  try {
    const out = execFileSync('ps', ['-eo', 'pid,lstart,command'], { encoding: 'utf8' });
    const line = out.split('\n').find(l => l.includes('dsh-desktop-host'));
    if (line) console.log(`\nhost process: ${line.trim().split(/\s{2,}/)[0]} started ${line.trim().slice(0, 30).trim()}`);
  } catch {}
})();
