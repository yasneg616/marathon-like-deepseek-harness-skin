// Version-bound, reversible caption adapter. The Cordis skin owns all application UI.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const {execFileSync} = require('node:child_process');
const root = path.resolve(__dirname, '..');
const appRoot = process.env.DSH_DESKTOP_DIR || path.resolve(root, '..');
const archive = path.join(appRoot, 'resources/app.asar');
const stateFile = path.join(root, 'validation/desktop-bridge.json');
const SUPPORTED_SHA = '983ca71114e6dfd353fc79af5a1f9481a250ee64c2a3c757673029b811b23bc2';
const CHANNEL = 'dsh-desktop:industrial-window-controls';
const sha = data => crypto.createHash('sha256').update(data).digest('hex');

const MAIN_IPC = `
        // Industrial caption: main app frame only; preserve native close policy.
        ipcMain.handle("${CHANNEL}", (event, action) => {
            assertDesktopSender(event, ["app"]);
            if (!mainWindow || mainWindow.isDestroyed() || event.sender !== mainWindow.webContents || event.senderFrame !== mainWindow.webContents.mainFrame) throw new Error("industrial caption: rejected sender");
            if (!["state", "minimize", "maximize", "restore", "close"].includes(action)) throw new Error("industrial caption: invalid action");
            const window = mainWindow;
            if (action === "minimize") window.minimize();
            else if (action === "maximize") { if (window.isMaximized()) window.unmaximize(); else window.maximize(); }
            else if (action === "restore") { if (window.isMinimized()) window.restore(); window.show(); }
            else if (action === "close") window.close();
            return window.isDestroyed() ? {closed:true} : {maximized:window.isMaximized(), minimized:window.isMinimized()};
        });
`;

const PRELOAD_API = `
        windowControls: process.platform === "win32" ? Object.freeze({
            invoke: (action) => electron.ipcRenderer.invoke("${CHANNEL}", action),
            menu: (name, x, y) => electron.ipcRenderer.invoke(DESKTOP_IPC.windowsMenu, name, x, y)
        }) : void 0,
`;

const PRELOAD_FALLBACK = `
// The fallback survives disabling/uninstalling the skin; never leave a captionless window.
function installIndustrialCaptionFallback() {
    if (process.platform !== "win32" || !process.isMainFrame) return;
    const install = () => {
        const host = document.createElement("div");
        host.dataset.industrialCaptionFallback = "";
        const shadow = host.attachShadow({mode:"open"});
        const style = document.createElement("style");
        style.textContent = ":host{position:fixed;right:0;top:0;height:40px;z-index:1101;display:flex;background:var(--dsw-specific-sidebar-fill,#1b1b1c);color:var(--dsw-alias-label-primary,#fafafa);-webkit-app-region:no-drag}:host([hidden]){display:none}button{width:46px;height:40px;border:0;background:transparent;color:inherit;font:18px sans-serif;cursor:pointer;-webkit-app-region:no-drag}button:hover{background:#80808033}button:last-child:hover{background:#c5352d;color:white}";
        shadow.append(style);
        const labels = document.documentElement.lang.startsWith("zh") ? ["最小化","最大化／还原","关闭"] : ["Minimize","Maximize / restore","Close"];
        ["minimize","maximize","close"].forEach((action,index) => {
            const button = document.createElement("button"); button.type="button";
            button.textContent=["−","□","×"][index]; button.title=labels[index]; button.setAttribute("aria-label",labels[index]);
            button.addEventListener("click", () => electron.ipcRenderer.invoke("${CHANNEL}",action).catch(error => console.error("Caption action failed",error)));
            shadow.append(button);
        });
        const sync = () => {host.hidden=document.documentElement.dataset.industrialShell === "planar-v2";};
        const observer = new MutationObserver(sync);
        observer.observe(document.documentElement,{attributes:true,attributeFilter:["data-industrial-shell"]});
        sync(); document.body.append(host);
        window.addEventListener("pagehide",()=>{observer.disconnect();host.remove();},{once:true});
    };
    if(document.readyState === "loading") document.addEventListener("DOMContentLoaded",install,{once:true}); else install();
}
`;

function replaceOnce(source, before, after) {
  if (source.split(before).length !== 2) throw new Error('Unsupported desktop source; expected one caption anchor. No archive written.');
  return source.replace(before, () => after);
}

function transform(main, preload) {
  main = replaceOnce(main,
    'titleBarOverlay: {\n\t\t\t\theight: 40,\n\t\t\t\tcolor: chromeFallbackFill(),\n\t\t\t\tsymbolColor: nativeTheme.shouldUseDarkColors ? "#f9fafb" : "#0f1115"\n\t\t\t}',
    'titleBarOverlay: false');
  main = replaceOnce(main, '\t\tipcMain.handle(DESKTOP_IPC.windowsMenu,', MAIN_IPC + '\t\tipcMain.handle(DESKTOP_IPC.windowsMenu,');
  main = replaceOnce(main, '\t\t\tif (validColor(color) && validColor(symbolColor)) mainWindow.setTitleBarOverlay({\n\t\t\t\tcolor,\n\t\t\t\tsymbolColor\n\t\t\t});',
    '\t\t\t// The HTML caption uses the same theme tokens; native overlay is disabled.');
  preload = replaceOnce(preload, 'function createProductApi() {\n\treturn {', PRELOAD_FALLBACK + '\nfunction createProductApi() {\n\treturn {' + PRELOAD_API);
  preload = replaceOnce(preload, '\tsyncWindowsAppearance();', '\tsyncWindowsAppearance();\n\tinstallIndustrialCaptionFallback();');
  return {'lib/main.js':main, 'lib/preload-app.cjs':preload};
}

function parse(buffer) {
  const tree = JSON.parse(buffer.subarray(16,16+buffer.readUInt32LE(12)).toString('utf8'));
  const payload = buffer.subarray(8+buffer.readUInt32LE(4));
  const entry = name => name.split('/').reduce((node,key)=>node.files[key],tree);
  const read = name => {const item=entry(name); if(item.unpacked||item.link)throw new Error('Caption source must be packed.');return payload.subarray(Number(item.offset),Number(item.offset)+item.size);};
  return {tree,payload,entry,read};
}

function rebuild(original, replacements) {
  const data=parse(original);let offset=data.payload.length;const appended=[];
  for(const [name,text] of Object.entries(replacements)){
    const content=Buffer.from(text);const item=data.entry(name);
    item.offset=String(offset);item.size=content.length;offset+=content.length;appended.push(content);
    if(item.integrity){const blockSize=item.integrity.blockSize||4194304;item.integrity={algorithm:'SHA256',hash:sha(content),blockSize,blocks:[]};for(let i=0;i<content.length;i+=blockSize)item.integrity.blocks.push(sha(content.subarray(i,i+blockSize)));}
  }
  const json=Buffer.from(JSON.stringify(data.tree)),padding=(4-json.length%4)%4;
  const header=Buffer.alloc(8+json.length+padding);header.writeUInt32LE(4+json.length+padding,0);header.writeUInt32LE(json.length,4);json.copy(header,8);
  const size=Buffer.alloc(8);size.writeUInt32LE(4,0);size.writeUInt32LE(header.length,4);
  return Buffer.concat([size,header,data.payload,...appended]);
}

function verify(original, updated, replacements) {
  const before=parse(original),after=parse(updated);let checked=0;
  function walk(tree,prefix=''){
    for(const [name,item] of Object.entries(tree.files)){
      const file=prefix+name;
      if(item.files)walk(item,file+'/');
      else if(!item.unpacked&&!item.link){
        const expected=replacements[file]===undefined?before.read(file):Buffer.from(replacements[file]);
        if(!expected.equals(after.read(file)))throw new Error('Archive verification failed: '+file);checked++;
      }
    }
  }
  walk(before.tree);return checked;
}

function assertStopped(){
  const exe=path.join(appRoot,'DeepSeek Harness.exe');
  const output=execFileSync('powershell.exe',['-NoProfile','-Command','Get-CimInstance Win32_Process | Where-Object { $_.ExecutablePath -eq $env:INDUSTRIAL_DESKTOP_EXE } | Select-Object -ExpandProperty ProcessId'],{encoding:'utf8',env:{...process.env,INDUSTRIAL_DESKTOP_EXE:exe},windowsHide:true}).trim();
  if(output)throw new Error('Close Harness before changing the desktop archive.');
}

function install(){
  assertStopped();const original=fs.readFileSync(archive),originalHash=sha(original);
  if(fs.existsSync(stateFile)){
    const record=JSON.parse(fs.readFileSync(stateFile,'utf8'));
    if(originalHash===record.patchedSha256){console.log(JSON.stringify({status:'already-installed',...record}));return;}
  }
  if(originalHash!==SUPPORTED_SHA)throw new Error('Desktop has changed. This adapter supports the verified 0.2.0-rc.2 archive only; no files changed.');
  const source=parse(original);const replacements=transform(source.read('lib/main.js').toString(),source.read('lib/preload-app.cjs').toString());
  const stage=path.join(root,'.validation/native-stage');fs.mkdirSync(stage,{recursive:true});
  for(const [name,text] of Object.entries(replacements)){const file=path.join(stage,path.basename(name));fs.writeFileSync(file,text);execFileSync(process.execPath,['--check',file],{windowsHide:true});}
  const updated=rebuild(original,replacements),verifiedEntries=verify(original,updated,replacements);
  const stamp=new Date().toISOString().replaceAll(/[:.]/g,'-'),backup=path.join(appRoot,'_backups','desktop-caption-'+stamp);
  fs.mkdirSync(backup,{recursive:true});const backupArchive=path.join(backup,'app.asar');fs.writeFileSync(backupArchive,original);
  if(sha(fs.readFileSync(archive))!==originalHash)throw new Error('Archive changed during backup. No files replaced.');
  const record={version:1,supportedDesktop:'0.2.0-rc.2',installedAt:new Date().toISOString(),archive,backupArchive,originalSha256:originalHash,patchedSha256:sha(updated),verifiedEntries,changedEntries:Object.keys(replacements)};
  const temp=archive+'.industrial.tmp';fs.writeFileSync(temp,updated);if(sha(fs.readFileSync(temp))!==record.patchedSha256)throw new Error('Temporary archive verification failed.');
  assertStopped();fs.renameSync(temp,archive);fs.mkdirSync(path.dirname(stateFile),{recursive:true});fs.writeFileSync(stateFile,JSON.stringify(record,null,2));fs.writeFileSync(path.join(backup,'restoration.json'),JSON.stringify(record,null,2));
  console.log(JSON.stringify({status:'installed',...record}));
}

function restore(){
  assertStopped();const record=JSON.parse(fs.readFileSync(stateFile,'utf8'));
  if(sha(fs.readFileSync(archive))!==record.patchedSha256)throw new Error('Current archive is no longer this adapter version. Refusing to overwrite an application update.');
  const original=fs.readFileSync(record.backupArchive);if(sha(original)!==record.originalSha256)throw new Error('Original archive backup failed verification.');
  const temp=archive+'.industrial-restore.tmp';fs.writeFileSync(temp,original);fs.renameSync(temp,archive);
  fs.writeFileSync(stateFile,JSON.stringify({...record,restoredAt:new Date().toISOString()},null,2));console.log(JSON.stringify({status:'restored',sha256:record.originalSha256}));
}
if(require.main===module){const action=process.argv[2];if(action==='install')install();else if(action==='restore')restore();else throw new Error('Use desktop-bridge.cjs install or restore');}
module.exports={transform,parse,rebuild,verify,MAIN_IPC,CHANNEL};
