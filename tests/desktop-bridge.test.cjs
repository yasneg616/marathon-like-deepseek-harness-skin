const test=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm');
const {MAIN_IPC,CHANNEL,transform,parse,rebuild,verify,SUPPORTED_DESKTOPS}=require('../tools/desktop-bridge.cjs');
test('desktop controls reject other frames and arbitrary actions, retaining native close behavior',()=>{
  let handler,minimized=false,maximized=false,closed=0;
  const frame={},webContents={mainFrame:frame},window={webContents,isDestroyed:()=>false,isMinimized:()=>minimized,isMaximized:()=>maximized,minimize:()=>{minimized=true},maximize:()=>{maximized=true},unmaximize:()=>{maximized=false},restore:()=>{minimized=false},show(){},close:()=>closed++};
  vm.runInNewContext(MAIN_IPC,{mainWindow:window,assertDesktopSender:event=>{if(event.origin!=='app')throw new Error('rejected origin')},ipcMain:{handle:(channel,fn)=>{assert.equal(channel,CHANNEL);handler=fn}}});
  const valid={origin:'app',sender:webContents,senderFrame:frame};
  assert.throws(()=>handler({...valid,origin:'browser'},'minimize'),/origin/);
  assert.throws(()=>handler({...valid,senderFrame:{}},'close'),/sender/);
  assert.throws(()=>handler({...valid,sender:{}},'close'),/sender/);
  assert.throws(()=>handler(valid,'exec'),/invalid action/);
  assert.equal(handler(valid,'minimize').minimized,true);
  assert.equal(handler(valid,'restore').minimized,false);
  assert.equal(handler(valid,'maximize').maximized,true);
  assert.equal(handler(valid,'maximize').maximized,false);
  handler(valid,'close');assert.equal(closed,1);
});

test('caption transform preserves desktop guards and requires every known source anchor exactly once',()=>{
  const overlay='titleBarOverlay: {\n\t\t\t\theight: 40,\n\t\t\t\tcolor: chromeFallbackFill(),\n\t\t\t\tsymbolColor: nativeTheme.shouldUseDarkColors ? "#f9fafb" : "#0f1115"\n\t\t\t}';
  const appearance='\t\t\tif (validColor(color) && validColor(symbolColor)) mainWindow.setTitleBarOverlay({\n\t\t\t\tcolor,\n\t\t\t\tsymbolColor\n\t\t\t});';
  const main=overlay+'\n\t\tipcMain.handle(DESKTOP_IPC.windowsMenu,\n'+appearance+'\n// unrelated desktop security';
  const preload='function createProductApi() {\n\treturn {\n};}\n\tsyncWindowsAppearance();\n// unrelated isolated bridge';
  const changed=transform(main,preload);
  assert.ok(changed['lib/main.js'].includes('titleBarOverlay: false'));
  assert.ok(changed['lib/main.js'].includes(MAIN_IPC));
  assert.ok(changed['lib/main.js'].includes('// unrelated desktop security'));
  assert.ok(!changed['lib/main.js'].includes('setTitleBarOverlay('));
  assert.ok(changed['lib/preload-app.cjs'].includes('installIndustrialCaptionFallback();'));
  assert.ok(changed['lib/preload-app.cjs'].includes('process.isMainFrame'));
  assert.ok(changed['lib/preload-app.cjs'].includes('// unrelated isolated bridge'));
  assert.throws(()=>transform(main.replace(overlay,'unknown overlay'),preload),/expected one caption anchor/);
  assert.throws(()=>transform(main+'\n'+overlay,preload),/expected one caption anchor/);
  assert.throws(()=>transform(main,preload.replace('syncWindowsAppearance','unknownAppearance')),/expected one caption anchor/);
  assert.equal(SUPPORTED_DESKTOPS['47874618bf5b3011fcaac10cd4c85f69da333e70d4f99b921207c78d0999512a'],'0.2.1-rc.2');
  assert.equal(SUPPORTED_DESKTOPS['04b32e3a872826ba15cfb2081c6a929a8d4ecaa65e09a2543e5a6b30e2eff1f0'],'0.2.1-rc.3');
  assert.equal(SUPPORTED_DESKTOPS['e1b6f25fa937da98086c3e77af77aa14791105963c4d337a1c42179d232c6915'],'0.2.1-rc.5');
});

test('archive rebuild changes only named entries and preserves their integrity metadata',()=>{
  const crypto=require('node:crypto'),hash=value=>crypto.createHash('sha256').update(value).digest('hex');
  const original=Buffer.from('original'),untouched=Buffer.from('untouched');
  const tree={files:{'main.js':{size:original.length,offset:'0',integrity:{algorithm:'SHA256',hash:hash(original),blockSize:4,blocks:[]}},'keep.js':{size:untouched.length,offset:String(original.length)}}};
  const json=Buffer.from(JSON.stringify(tree)),padding=(4-json.length%4)%4,header=Buffer.alloc(8+json.length+padding),size=Buffer.alloc(8);
  header.writeUInt32LE(4+json.length+padding,0);header.writeUInt32LE(json.length,4);json.copy(header,8);size.writeUInt32LE(4,0);size.writeUInt32LE(header.length,4);
  const archive=Buffer.concat([size,header,original,untouched]),updated=rebuild(archive,{'main.js':'updated main'}),after=parse(updated);
  assert.equal(verify(archive,updated,{'main.js':'updated main'}),2);
  assert.equal(after.read('main.js').toString(),'updated main');
  assert.deepEqual(after.read('keep.js'),untouched);
  assert.equal(after.entry('main.js').integrity.hash,hash(Buffer.from('updated main')));
  assert.equal(after.entry('main.js').integrity.blocks.length,3);
  assert.throws(()=>verify(archive,updated,{}),/verification failed/);
});
