// The check reads whatever the installer actually deployed, so it has to find the version
// directory that is present. A hardcoded version checks nothing after the next release, and a
// bare absolute path cannot be imported at all on Windows, so both cases are pinned here.
const test = require('node:test');
const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const { mkdirSync, mkdtempSync, writeFileSync } = require('node:fs');
const { tmpdir } = require('node:os');
const { join } = require('node:path');

const TOOL = join(__dirname, '..', 'tools', 'verify-window-host.cjs');

// os.homedir() reads HOME on POSIX and USERPROFILE on Windows, so a fake home has to set both.
function run(home) {
  return execFileSync(process.execPath, [TOOL], {
    encoding: 'utf8',
    env: { ...process.env, HOME: home, USERPROFILE: home },
  });
}

function fakeHome(version) {
  const home = mkdtempSync(join(tmpdir(), 'acid-verify-'));
  const dir = join(home, '.dsh', 'plugins', 'dsh-industrial-acid-skin', version, 'lib');
  mkdirSync(dir, { recursive: true });
  writeFileSync(
    join(dir, 'window-control-host.js'),
    `module.exports.applyWindowAction = async () => ({ available: true, version: '${version}' });\n`,
  );
  return home;
}

test('checks the version directory that is installed, not a pinned one', () => {
  const home = fakeHome('2.4.10');
  const out = run(home);
  assert.match(out, /2\.4\.10/, 'the deployed version must be checked');
  assert.match(out, /"available":true/, 'the host module must actually load');
});

test('says so when nothing is deployed instead of printing nothing', () => {
  const home = mkdtempSync(join(tmpdir(), 'acid-verify-empty-'));
  const out = run(home);
  assert.match(out, /no deployed dsh-industrial-acid-skin/);
});
