// Optional documentation capture for v3: isolated showcase samples, real production CSS and motion.
// Needs Playwright (or playwright-core; set PLAYWRIGHT_MODULE to its path) and Edge on Windows.
// Output: .recordings/<clip>/frames.json + JPEG frames, then `python tools/encode-showcase.py <clip>`.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {performance}=require('node:perf_hooks'),{chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const {startShowcase}=require('./serve-showcase.cjs');
const root=path.resolve(__dirname,'..'),raw=path.join(root,'.recordings');
let browser,server;
(async()=>{
  const preview=await startShowcase();server=preview.server;
  browser=await chromium.launch({headless:true,...(process.platform==='win32'?{channel:'msedge'}:{})});
  const page=await browser.newPage({viewport:{width:1280,height:820}}),errors=[];
  page.on('pageerror',error=>{errors.push(error.message);console.error('Preview error: '+error.message);});
  async function open(){await page.goto(preview.url+'/docs/showcase/next.html');await page.waitForFunction(()=>window.showcaseReady);await page.waitForTimeout(650);}
  const run=(method,...args)=>page.evaluate(({method,args})=>window.showcase[method](...args),{method,args});
  // The showcase has no React host, so the masthead's workspace reveal is driven directly.
  const reveal=(kind,info)=>page.evaluate(({kind,info})=>{
    window.__v3??=window.showcaseCore.createAcceptedMotionController(()=>document.documentElement.dataset.industrialMotion||'full');
    if(info&&info.withMark)info.mark=document.querySelector('[data-hud-mark] .acid-ws-mark-host')?.innerHTML;
    window.__v3.revealStage(kind,kind==='workspace'?1:'down-up',info||{});
  },{kind,info});
  const hover=async(selector,index)=>{const box=await page.locator(selector).nth(index).boundingBox();await page.mouse.move(box.x+box.width/2,box.y+box.height/2);};
  await open();
  assert.equal(await page.locator('.acid-masthead[data-acid-hud]').count(),1);
  assert.equal(await page.locator('.acid-ws-mark-host').count()>=6,true);
  await page.screenshot({path:path.join(root,'docs/media/v3-overview.png')});
  await page.screenshot({path:path.join(root,'docs/media/v3-masthead.png'),clip:{x:0,y:0,width:1280,height:98}});
  const report=[];
  async function record(name,duration,events,{prepare,clip}={}){
    await open();if(prepare){await prepare();await page.waitForTimeout(500);}
    await page.mouse.move(1200,780);const directory=path.join(raw,name);fs.rmSync(directory,{recursive:true,force:true});fs.mkdirSync(directory,{recursive:true});
    const frames=[],start=performance.now();let next=0;
    while(performance.now()-start<duration){
      while(next<events.length&&performance.now()-start>=events[next][0])await events[next++][1]();
      const time=Math.round(performance.now()-start),file=`frame-${String(frames.length).padStart(4,'0')}.jpg`;
      await page.screenshot({path:path.join(directory,file),quality:86,...(clip?{clip}:{})});frames.push({file,time});
      const delay=70-(performance.now()-start-time);if(delay>0)await page.waitForTimeout(delay);
    }
    const metadata={name,durationMs:Math.round(performance.now()-start),frames,speed:1,source:'isolated documentation showcase, sample workspaces'};
    fs.writeFileSync(path.join(directory,'frames.json'),JSON.stringify(metadata,null,2));
    report.push({name,frames:frames.length,durationMs:metadata.durationMs});console.log(JSON.stringify(report.at(-1)));
  }
  const rail={x:0,y:96,width:440,height:724};
  await record('30-thin-rail',4600,[
    [500,()=>run('setCollapsed',true)],
    [1500,()=>hover('.acid-thin-line',3)],[2300,()=>hover('.acid-thin-line',1)],[3000,()=>page.mouse.move(1200,780)],
    [3300,()=>run('setCollapsed',false)]],{clip:rail});
  await record('31-mark-states',3200,[],{clip:{x:0,y:96,width:240,height:600}});
  await record('32-hover-strip',3600,[[500,()=>hover('[data-acid-ws-strip]',0)],[1600,()=>hover('[data-acid-ws-strip]',4)],[2700,()=>page.mouse.move(1200,780)]]);
  await record('33-workspace-mask',3400,[
    [500,async()=>{await run('setWorkspace',3);await reveal('workspace',{number:'004',label:'WS 004 · TYPE ARCHIVE',withMark:true});}],
    [1900,async()=>{await run('setWorkspace',2);await reveal('workspace',{number:'003',label:'WS 003 · PROTOTYPE',withMark:true});}]]);
  await record('34-page-mask',2600,[[500,()=>reveal('page',{label:'→ SETTINGS'})],[1500,()=>reveal('page',{label:'→ HOME'})]]);
  await record('35-sys-drawer',3400,[[500,()=>run('toggleDrawer')],[2100,()=>run('toggleDrawer')]],{clip:{x:0,y:96,width:560,height:724}});
  assert.deepEqual(errors,[]);
  fs.writeFileSync(path.join(raw,'record-v3-report.json'),JSON.stringify({clips:report.length,errors,report},null,2));
  console.log(JSON.stringify({clips:report.length,passed:true}));
})().catch(error=>{console.error(error);process.exitCode=1;}).finally(async()=>{await browser?.close();server?.close();});
