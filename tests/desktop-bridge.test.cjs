const test=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm');
const {MAIN_IPC,CHANNEL}=require('../tools/desktop-bridge.cjs');
test('desktop controls reject other frames and arbitrary actions, retaining native close behavior',()=>{
  let handler,minimized=false,maximized=false,closed=0;
  const frame={},webContents={mainFrame:frame},window={webContents,isDestroyed:()=>false,isMinimized:()=>minimized,isMaximized:()=>maximized,minimize:()=>{minimized=true},maximize:()=>{maximized=true},unmaximize:()=>{maximized=false},restore:()=>{minimized=false},show(){},close:()=>closed++};
  vm.runInNewContext(MAIN_IPC,{mainWindow:window,assertDesktopSender:event=>{if(event.origin!=='app')throw new Error('rejected origin')},ipcMain:{handle:(channel,fn)=>{assert.equal(channel,CHANNEL);handler=fn}}});
  const valid={origin:'app',sender:webContents,senderFrame:frame};
  assert.throws(()=>handler({...valid,origin:'browser'},'minimize'),/origin/);
  assert.throws(()=>handler({...valid,senderFrame:{}},'close'),/sender/);
  assert.throws(()=>handler(valid,'exec'),/invalid action/);
  assert.equal(handler(valid,'minimize').minimized,true);
  assert.equal(handler(valid,'restore').minimized,false);
  assert.equal(handler(valid,'maximize').maximized,true);
  assert.equal(handler(valid,'maximize').maximized,false);
  handler(valid,'close');assert.equal(closed,1);
});
