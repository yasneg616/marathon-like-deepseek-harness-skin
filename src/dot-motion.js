// Dot-matrix motion (Marathon chrome). Quiet until something happens; every effect is tied to a
// real event, never to a timer:
//   FIELD  a 14 px dot matrix hidden under the conversation's "+" grid, offset 6 px so every fourth
//          dot sits on a cross. Sending pushes a ring out of the composer; text arriving in the
//          conversation leaves a trail at the writing point; a session finishing sweeps a scan band.
//   RATE   a 24×5 dot meter beside today's tokens in the HUD, fed by how fast text arrives.
// Motion 'full' runs both, 'quiet' keeps the meter only, 'off' (or reduced motion) runs nothing.
// Frames are requested only while some dot is still lit.
const DOT_PITCH=14,DOT_OFFSET=6,DOT_SIZE=2,GRID_CROSS=56,GRID_FIRST=20;
const RATE_COLS=24,RATE_ROWS=5,RATE_PITCH=3,RATE_TICK=90;
// Characters per second mapped onto the meter's five rows (log scale: a trickle still shows).
function dotRateLevel(charsPerSecond){return Math.max(0,Math.min(1,Math.log10(1+Math.max(0,charsPerSecond))/Math.log10(1+600)));}
function dotStageRoot(){return document.querySelector('[data-phase]:has([data-composer-card])');}
function runningSessions(snapshot){let n=0;for(const status of snapshot?.values?.()??[])if(status?.running===true)n++;return n;}

function createDotMotion({getMotion,statusSource}){
  // Without a canvas, observers or frames (a test sandbox, an old host) the skin still loads; the
  // dots simply stay off.
  const probe=typeof document!=='undefined'?document.createElement?.('canvas'):null;
  if(!probe?.getContext||typeof MutationObserver!=='function'||typeof ResizeObserver!=='function'||typeof requestAnimationFrame!=='function')
    return {attachRate(){},dispose(){}};
  const allowed=kind=>{const m=getMotion();return m!=='off'&&(m==='full'||kind!=='field');};
  const wsRgb=()=>{
    const value=getComputedStyle(document.documentElement).getPropertyValue('--acid-ws-context').trim()||getComputedStyle(document.documentElement).getPropertyValue('--acid-lime').trim()||'#C5FA31';
    const n=parseInt(value.replace('#','').slice(0,6),16);return Number.isNaN(n)?[197,250,49]:[n>>16&255,n>>8&255,n&255];
  };
  /* FIELD */
  const field=document.createElement('canvas');field.className='acid-dots-field';field.setAttribute('aria-hidden','true');field.dataset.acidMotionOwned='';
  const fctx=field.getContext('2d');
  let root=null,cols=0,rows=0,fw=0,fh=0,energy=new Float32Array(0);
  const waves=[];let head=null,incoming=0,lastText=null;
  const at=i=>i*DOT_PITCH+DOT_OFFSET;
  const resize=()=>{
    if(!root)return;const r=root.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,2);
    fw=r.width;fh=r.height;field.width=Math.round(fw*dpr);field.height=Math.round(fh*dpr);fctx?.setTransform(dpr,0,0,dpr,0,0);
    cols=Math.ceil(fw/DOT_PITCH);rows=Math.ceil(fh/DOT_PITCH);energy=new Float32Array(cols*rows);
  };
  const sizeObserver=new ResizeObserver(resize);
  // The writing point and the arrival rate come from the conversation's own DOM: text nodes added
  // or grown outside the composer.
  const textObserver=new MutationObserver(records=>{
    for(const record of records){
      const target=record.target;
      if(target.nodeType===1&&target.closest?.('[data-composer-card],[data-acid-motion-owned]'))continue;
      if(target.parentElement?.closest?.('[data-composer-card],[data-acid-motion-owned]'))continue;
      if(record.type==='characterData'){const grown=(target.data?.length??0)-(record.oldValue?.length??0);if(grown>0){incoming+=grown;lastText=target;}}
      else for(const node of record.addedNodes){const length=node.textContent?.length??0;if(length){incoming+=length;lastText=node.nodeType===3?node:node.lastChild&&node.lastChild.nodeType===3?node.lastChild:node;}}
    }
    if(incoming)kick();
  });
  function attach(){
    const next=dotStageRoot();
    if(next===root)return root;
    textObserver.disconnect();sizeObserver.disconnect();
    if(root)delete root.dataset.acidDots;
    root=next;
    if(!root){field.remove();return null;}
    root.dataset.acidDots='';root.prepend(field);sizeObserver.observe(root);resize();
    textObserver.observe(root,{subtree:true,childList:true,characterData:true,characterDataOldValue:true});
    return root;
  }
  const rootTimer=setInterval(()=>{if(getMotion()!=='off')attach();},1000);
  const local=rect=>{const b=root.getBoundingClientRect();return {x:rect.left-b.left,y:rect.top-b.top,w:rect.width,h:rect.height};};
  function ring(){
    if(!allowed('field')||!attach())return;
    const card=root.querySelector('[data-composer-card]');if(!card)return;
    const p=local(card.getBoundingClientRect());waves.push({kind:'ring',x:p.x+p.w/2,y:p.y,t0:performance.now()});kick();
  }
  function scan(){if(!allowed('field')||!attach())return;waves.push({kind:'scan',t0:performance.now()});kick();}
  function writingPoint(){
    if(!lastText?.isConnected||!root?.contains(lastText))return null;
    try{
      let rect;
      if(lastText.nodeType===3){const range=document.createRange();const len=lastText.data.length;range.setStart(lastText,Math.max(0,len-1));range.setEnd(lastText,len);rect=range.getBoundingClientRect();}
      else rect=lastText.getBoundingClientRect();
      return rect&&(rect.width||rect.height)?local(rect):null;
    }catch{return null;}
  }
  function feed(now){
    for(let i=waves.length-1;i>=0;i--){
      const w=waves[i],t=(now-w.t0)/1000;
      if(w.kind==='ring'){
        const r=t*900,band=46;if(r>Math.hypot(fw,fh)){waves.splice(i,1);continue;}
        for(let y=0;y<rows;y++)for(let x=0;x<cols;x++){const d=Math.hypot(at(x)-w.x,at(y)-w.y)-r;if(d>-band&&d<band*.35){const k=y*cols+x;energy[k]=Math.max(energy[k],(1-Math.abs(d)/band)*(1-t*.45));}}
      }else{
        const yPos=t*1100-40;if(yPos>fh+40){waves.splice(i,1);continue;}
        for(let y=0;y<rows;y++){const d=Math.abs(at(y)-yPos);if(d<34)for(let x=0;x<cols;x++){const k=y*cols+x;energy[k]=Math.max(energy[k],(1-d/34)*(x%4===0?1:.7));}}
      }
    }
    if(head){
      const cx=Math.round((head.x+head.w-DOT_OFFSET)/DOT_PITCH),cy=Math.round((head.y+head.h/2-DOT_OFFSET)/DOT_PITCH);
      for(let n=0;n<4;n++){const x=cx-Math.floor(Math.random()*6),y=cy+Math.floor(Math.random()*3)-1;if(x>=0&&y>=0&&x<cols&&y<rows)energy[y*cols+x]=Math.max(energy[y*cols+x],.55+Math.random()*.45);}
      head=null;
    }
  }
  function drawField(){
    if(!fctx)return false;
    fctx.clearRect(0,0,fw,fh);const [r,g,b]=wsRgb();let lit=false;
    for(let k=0;k<energy.length;k++){
      const v=energy[k];if(v<.02){energy[k]=0;continue;}lit=true;
      const x=at(k%cols),y=at(Math.floor(k/cols)),node=(x-GRID_FIRST)%GRID_CROSS===0&&(y-GRID_FIRST)%GRID_CROSS===0;
      fctx.fillStyle=`rgba(${r},${g},${b},${Math.min(1,v)*(node?1:.75)})`;
      if(node){fctx.fillRect(x-5,y,11,1);fctx.fillRect(x,y-5,1,11);}else fctx.fillRect(x,y,DOT_SIZE,DOT_SIZE);
      energy[k]=v*.88;
    }
    return lit;
  }
  /* RATE */
  let meter=null,mctx=null,history=new Array(RATE_COLS).fill(0),lastTick=0,arrived=0,running=runningSessions(statusSource.getSnapshot());
  function drawRate(now){
    if(!mctx)return false;
    if(now-lastTick>=RATE_TICK){
      const seconds=lastTick?(now-lastTick)/1000:RATE_TICK/1000;lastTick=now;
      const level=running>0||arrived?dotRateLevel(arrived/seconds):0;arrived=0;
      history.push(level);history.shift();
    }
    const [r,g,b]=wsRgb();mctx.clearRect(0,0,RATE_COLS*RATE_PITCH,RATE_ROWS*RATE_PITCH);
    for(let x=0;x<RATE_COLS;x++){
      const h=Math.round(history[x]*RATE_ROWS);
      for(let y=0;y<RATE_ROWS;y++){
        const lit=RATE_ROWS-1-y<h,base=y===RATE_ROWS-1;
        mctx.fillStyle=lit?`rgb(${r},${g},${b})`:base?'rgba(236,236,232,.35)':'rgba(255,255,255,.07)';
        mctx.fillRect(x*RATE_PITCH,y*RATE_PITCH,2,2);
      }
    }
    return running>0||history.some(v=>v>0);
  }
  /* loop */
  // The field is only walked while it has something to show; a long-running session keeps the
  // loop alive for the meter without touching the 5 000-odd field dots every frame.
  let frame=0,disposed=false,fieldLit=false;
  function tick(now){
    frame=0;if(disposed)return;
    if(incoming){arrived+=incoming;if(allowed('field'))head=writingPoint();incoming=0;}
    let more=false;
    if(allowed('field')&&root){if(fieldLit||waves.length||head){feed(now);fieldLit=drawField();}more=fieldLit||waves.length>0;}
    else if(root&&fctx&&fieldLit){fctx.clearRect(0,0,fw,fh);waves.length=0;energy.fill(0);fieldLit=false;}
    if(allowed('rate'))more=drawRate(now)||more;
    if(more)frame=requestAnimationFrame(tick);
  }
  function kick(){if(!frame&&!disposed&&getMotion()!=='off')frame=requestAnimationFrame(tick);}
  // Sending: Enter in the composer (not Shift+Enter, not while composing text) or its send key.
  const onKey=event=>{if(event.key==='Enter'&&!event.shiftKey&&!event.isComposing&&event.target?.closest?.('[data-composer-card]')&&(event.target.textContent||event.target.value||'').trim())ring();};
  const onClick=event=>{const button=event.target?.closest?.('[data-composer-card] button');if(button&&button.matches(moduleSelector('.GRgSLq_primary,.RlGAzG_primary')))ring();};
  document.addEventListener('keydown',onKey,true);document.addEventListener('click',onClick,true);
  // A session finishing sweeps the scan band; any running session keeps the meter alive.
  const unsubscribe=statusSource.subscribe(()=>{const next=runningSessions(statusSource.getSnapshot());if(next<running)scan();running=next;kick();});
  attach();
  return {
    attachRate(canvas){
      meter=canvas||null;mctx=meter?.getContext?.('2d')??null;
      if(mctx){meter.width=RATE_COLS*RATE_PITCH*2;meter.height=RATE_ROWS*RATE_PITCH*2;mctx.setTransform(2,0,0,2,0,0);drawRate(performance.now());kick();}
    },
    dispose(){
      disposed=true;cancelAnimationFrame(frame);clearInterval(rootTimer);unsubscribe();
      document.removeEventListener('keydown',onKey,true);document.removeEventListener('click',onClick,true);
      textObserver.disconnect();sizeObserver.disconnect();field.remove();if(root)delete root.dataset.acidDots;root=null;
    }
  };
}
