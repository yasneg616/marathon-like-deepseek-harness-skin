// Optional documentation recorder: Playwright + Edge on Windows, Chromium elsewhere.
// Uses only the isolated showcase and generated counters; no Harness data is read.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {performance}=require('node:perf_hooks'),{chromium}=require('playwright');
const {startShowcase}=require('./serve-showcase.cjs');
const root=path.resolve(__dirname,'..'),raw=path.join(root,'.recordings');
let browser,server;
(async()=>{
  const preview=await startShowcase();server=preview.server;
  browser=await chromium.launch({headless:true,...(process.platform==='win32'?{channel:'msedge'}:{})});
  const page=await browser.newPage({viewport:{width:1280,height:820},timezoneId:'Asia/Shanghai'}),errors=[],requests=[];
  page.on('pageerror',error=>errors.push(error.message));page.on('request',request=>requests.push(new URL(request.url()).pathname));
  async function open(scene='app',viewport={width:1280,height:820}){
    await page.setViewportSize(viewport);await page.goto(preview.url+'/?scene='+scene);
    await page.waitForFunction(()=>window.showcaseReady);await page.waitForTimeout(450);
  }
  const run=(method,...args)=>page.evaluate(({method,args})=>window.showcase[method](...args),{method,args});
  await open();assert.equal(await page.locator('#token-activity .acid-token-cell').count(),126);
  for(const [value,level] of [[650000,1],[3200000,2],[24000000,3],[72000000,4]]){
    await run('setActivityUsage',value);await page.waitForTimeout(250);
    assert.equal(await page.locator('#token-activity [data-token-today=true]').getAttribute('data-token-level'),String(level));
  }
  await run('openTokenSettings');await page.locator('dialog[open]').getByRole('spinbutton',{name:'界限 2'}).fill('1000000');
  assert.equal(await page.locator('[data-token-save]').isDisabled(),true);await run('closeDialog');await page.waitForTimeout(800);
  for(const viewport of [{width:800,height:600},{width:390,height:844}]){
    await open('app',viewport);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
    const block=await page.locator('#token-activity').boundingBox();assert.ok(block.x>=0&&block.x+block.width<=viewport.width+.5);
    if(viewport.width===390)assert.equal(await page.locator('.acid-token-rail-button').count(),1);
  }
  await open();await page.screenshot({path:path.join(root,'docs/media/overview.jpg'),quality:92});
  const report=[];
  async function record(name,duration,events,prepare,scene='app',viewport){
    await open(scene,viewport);if(prepare){await prepare();await page.waitForTimeout(800);}
    await page.mouse.move(5,5);const directory=path.join(raw,name);fs.mkdirSync(directory,{recursive:true});
    const frames=[],start=performance.now();let next=0;
    while(performance.now()-start<duration){
      while(next<events.length&&performance.now()-start>=events[next][0])await events[next++][1]();
      const time=Math.round(performance.now()-start),file=`frame-${String(frames.length).padStart(4,'0')}.jpg`;
      await page.screenshot({path:path.join(directory,file),quality:84});frames.push({file,time});
      const delay=90-(performance.now()-start-time);if(delay>0)await page.waitForTimeout(delay);
    }
    const metadata={name,durationMs:Math.round(performance.now()-start),frames,speed:1,source:'isolated documentation showcase, sample counters'};
    fs.writeFileSync(path.join(directory,'frames.json'),JSON.stringify(metadata,null,2));
    report.push({name,frames:frames.length,durationMs:metadata.durationMs});console.log(JSON.stringify(report.at(-1)));
  }
  await record('01-opening',2300,[[100,()=>run('intro')]]);
  await record('02-left-sidebar',3300,[[500,()=>page.locator('#sidebar-toggle').click()],[1900,()=>page.locator('#sidebar-toggle').click()]]);
  await record('03-right-sidebar',3300,[[500,()=>page.getByRole('button',{name:'打开右侧边栏'}).click()],[1900,()=>page.getByRole('button',{name:'关闭右侧边栏'}).click()]]);
  await record('04-workspace-digits',3700,[[500,()=>run('setWorkspace','motion')],[1600,()=>run('setWorkspace','prototype')],[2700,()=>run('setWorkspace','design')]]);
  await record('05-model-menu',3500,[[500,()=>page.locator('#model-trigger').click()],[2300,()=>page.getByRole('button',{name:'关闭模型菜单'}).click()]]);
  await record('06-palette-dialog',3500,[[500,()=>page.locator('#palette-shortcut').click()],[2300,()=>page.getByRole('button',{name:'关闭弹窗'}).click()]]);
  await record('07-palette-follow',4300,[[600,()=>run('setPalette','orange')],[1800,()=>run('setPalette','polar')],[3000,()=>run('setPalette','studio')]]);
  await record('08-day-night',3400,[[700,()=>page.getByRole('button',{name:'白天',exact:true}).click()],[2200,()=>page.getByRole('button',{name:'黑天',exact:true}).click()]]);
  await record('09-compact-workspaces',3600,[[600,()=>page.locator('[data-acid-workspace=motion]').click()],[1700,()=>page.locator('[data-acid-workspace=prototype]').click()],[2800,()=>page.locator('[data-acid-workspace=design]').click()]],()=>run('toggleLeft'));
  await record('10-page-transition',3500,[[600,()=>page.locator('#route-trigger').click()],[2100,()=>page.locator('#new-session').click()]]);
  await record('11-file-preview',3500,[[600,()=>page.getByRole('tab',{name:'palette.css',exact:true}).click()],[2100,()=>page.getByRole('tab',{name:'README.md',exact:true}).click()]],()=>run('toggleRight'));
  await record('18-token-activity',7800,[[1000,()=>run('setActivityUsage',3200000)],[2500,()=>run('setActivityUsage',24000000)],[4000,()=>run('setActivityUsage',72000000)],[5600,()=>run('setPalette','orange')],[6700,()=>run('setPalette','studio')]],undefined,'activity',{width:900,height:540});
  await record('19-token-thresholds',7300,[[600,()=>page.locator('.acid-token-config').click()],[1900,()=>page.getByRole('spinbutton',{name:'界限 2'}).fill('1000000')],[2700,async()=>{for(const [i,value] of [2000000,20000000,80000000].entries())await page.getByRole('spinbutton',{name:'界限 '+(i+1)}).fill(String(value));}],[3600,()=>page.locator('[data-token-save]').click()],[4900,()=>page.locator('.acid-token-config').click()],[5800,()=>page.getByRole('button',{name:'恢复 1M / 10M / 50M'}).click()]],()=>run('setActivityUsage',72000000));
  assert.deepEqual(errors,[]);assert.ok(requests.every(url=>!url.startsWith('/api/')));
  const result={clips:report.length,passed:true,browserErrors:errors,apiRequests:0,report};fs.writeFileSync(path.join(raw,'record-report.json'),JSON.stringify(result,null,2));console.log(JSON.stringify({clips:report.length,passed:true,browserErrors:errors,apiRequests:0}));
})().catch(error=>{console.error(error.stack);process.exitCode=1;}).finally(async()=>{await browser?.close();await new Promise(resolve=>server?server.close(resolve):resolve());});
