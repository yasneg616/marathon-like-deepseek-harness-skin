const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const ID = 'dsh-industrial-acid-skin';
const home = process.env.DSH_HOME || path.join(os.homedir(), '.dsh');
const profile = path.join(home, 'profiles', 'desktop');
const manifestFile = path.join(profile, 'package.json');
const manifestText = fs.readFileSync(manifestFile, 'utf8');
const manifest = JSON.parse(manifestText);
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
if (pkg.name !== ID || !Array.isArray(manifest.dsh?.profile?.bundles)) throw new Error('Unexpected package/profile; no files changed.');
const stamp = new Date().toISOString().replaceAll(/[:.]/g, '-');
const backup = path.join(home, 'backups', `${ID}-${stamp}`);
fs.mkdirSync(backup, { recursive: true });
for (const name of ['package.json', 'cordis.patch.yml', 'pnpm-lock.yaml', 'pnpm-workspace.yaml']) {
  const source = path.join(profile, name);
  if (fs.existsSync(source)) fs.copyFileSync(source, path.join(backup, name));
}
const hash = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const appAsar = path.resolve(root, '..', 'resources/app.asar');
const original = { patchSha256: hash(path.join(profile, 'cordis.patch.yml')), appAsarSha256: fs.existsSync(appAsar) ? hash(appAsar) : null };
const canonical = path.join(home, 'plugins', ID, pkg.version);
const mounted = path.join(profile, 'node_modules', ID);
for (const target of [canonical, mounted]) {
  if (fs.existsSync(path.join(target, 'package.json'))) {
    const existing = JSON.parse(fs.readFileSync(path.join(target, 'package.json'), 'utf8'));
    if (existing.name !== ID) throw new Error(`Refusing to overwrite unrelated package: ${target}`);
  }
  fs.mkdirSync(target, { recursive: true });
  for (const name of ['package.json', ...pkg.files]) {
    fs.cpSync(path.join(root, name), path.join(target, name), { recursive: true });
  }
  if (process.argv.includes('--diagnostics')) {
    const file = path.join(target, 'cordis.patch.yml');
    fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace('diagnostics: false', 'diagnostics: true'));
  }
}
manifest.dependencies = { ...manifest.dependencies, [ID]: `file:${canonical.replaceAll('\\', '/')}` };
manifest.dsh.profile.bundles = [...manifest.dsh.profile.bundles.filter(name => name !== ID), ID];
// Recheck concurrent edits before replacing the manifest; the user's patch is never rewritten.
if (fs.readFileSync(manifestFile, 'utf8') !== manifestText) throw new Error('Profile changed during installation. Backup and package retained; manifest not replaced.');
fs.writeFileSync(`${manifestFile}.industrial.tmp`, `${JSON.stringify(manifest, null, 2)}\n`);
fs.renameSync(`${manifestFile}.industrial.tmp`, manifestFile);
if (hash(path.join(profile, 'cordis.patch.yml')) !== original.patchSha256) throw new Error('Profile patch changed concurrently; inspect before proceeding.');
const report = { installedAt: new Date().toISOString(), version: pkg.version, profile, canonical, mounted, backup, ...original };
fs.writeFileSync(path.join(backup, 'installation.json'), JSON.stringify(report, null, 2));
fs.mkdirSync(path.join(root, 'validation'), { recursive: true });
fs.writeFileSync(path.join(root, 'validation', 'installation.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report));
