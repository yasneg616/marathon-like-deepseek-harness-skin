// The host owns state and text. These effects own only disposable visual layers.
let activeAcceptedMotion;
// Resolved per use: at module scope the app tree does not exist yet, so a frozen value here
// would silently disable composer decoration for the whole session.
const composerSelector=()=>moduleSelector('[data-composer-card=true],.RlGAzG_card');
const KEY_BUTTONS='.acid-masthead button,.acid-ws-command,.acid-drawer-handle,.acid-thin-expand,.acid-dialog button';
const ACCEPTED_MOTION = Object.freeze({hover:300,press:380,page:600,workspace:560,menu:500,dialog:600,composer:360,trace:500,signal:1200});
function acceptedDuration(kind, motion) { return motion === 'off' ? 0 : Math.round(ACCEPTED_MOTION[kind] * (motion === 'quiet' ? .3 : 1)); }
function nativeRightTrack(columns) { return Number(/minmax\(0px,\s*([\d.]+)px\)\s*$/.exec(columns)?.[1]??0); }
function compactRailColumns(columns) {
  const right=nativeRightTrack(columns);
  return `56px minmax(0px, 1fr) minmax(0px, min(${right}px, max(0px, calc(100% - 456px))))`;
}
const NEXT_SIDEBAR_WIDTH=113;
function nextSidebarRight(columns) {
  return `minmax(0px, min(${nativeRightTrack(columns)}px, max(0px, calc(100% - ${NEXT_SIDEBAR_WIDTH+400}px))))`;
}
function nextSidebarColumns(columns) {
  return `${NEXT_SIDEBAR_WIDTH}px minmax(0px, 1fr) ${nextSidebarRight(columns)}`;
}
function surfaceUnion(before,after,top=0) {
  const left=Math.min(before.left,after.left),right=Math.max(before.left+before.width,after.left+after.width);
  const y=Math.max(top,Math.min(before.top,after.top)),bottom=Math.max(before.top+before.height,after.top+after.height);
  return {left,top:y,width:Math.max(0,right-left),height:Math.max(0,bottom-y)};
}
function nativePaneKey(pane,panel) {
  const kind=pane.hasAttribute('data-dockkit-pane')?'pane':'float';
  return `${panel?.getAttribute('data-sidebar-right-session')??''}:${kind}:${pane.getAttribute('data-dockkit-'+kind)}`;
}

// Mask v3 (print slab). Columns per event: workspace 4, page and side panels 3, dialog 2, menus 1.
const MASK_COLUMNS=Object.freeze({workspace:4,page:3,columns:3,dialog:2,trace:1,menu:1,hover:1});
const MASK_TIMING=Object.freeze({4:{enter:150,hold:90,exit:180},3:{enter:120,hold:45,exit:135},2:{enter:75,hold:30,exit:105},1:{enter:60,hold:15,exit:90}});
const MASK_STAGGER=30,MASK_EASE='cubic-bezier(.7,0,.2,1)';
// [enters from, leaves towards]: the slab falls in and keeps going, so the new surface shows from the leading edge.
const MASK_SHUTTER=Object.freeze({'down-up':['inset(0 0 100% 0)','inset(100% 0 0 0)'],'left-right':['inset(0 100% 0 0)','inset(0 0 0 100%)'],'right-left':['inset(0 0 0 100%)','inset(0 100% 0 0)']});
const MASK_BARCODE='<svg class="acid-mask-barcode" viewBox="0 0 28 14" aria-hidden="true"><path d="M1 0v14M4 0v14M6 0v14M10 0v14M11 0v14M15 0v14M18 0v14M19 0v14M23 0v14M26 0v14" stroke="currentColor" stroke-width="1.4"/></svg>';
function maskText(value){return String(value??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[ch]).slice(0,40);}
// info: {number, label, mark} — the workspace number for the colour column, the HUD line, and the
// workspace mark markup. Missing parts simply leave that column plain.
function maskFaces(cols,info={}){
  const colour={kind:'colour',html:cols===4&&info.number?`<b class="acid-mask-number">${maskText(info.number)}</b>`:''};
  const dither={kind:'dither',html:''};
  const hud={kind:'hud',html:`<span class="acid-mask-hud"><span class="acid-mask-plus"></span>${MASK_BARCODE}<span class="acid-mask-label">${maskText(info.label||'SIGNAL')}</span></span>`};
  const mark={kind:'mark',html:`${info.mark||''}<span class="acid-mask-plus"></span>`};
  return [colour,dither,hud,mark].slice(0,cols);
}
function createAcceptedMotionController(getMotion) {
  const runs = new Set(), surfaces = new WeakMap(), buttonRuns = new WeakMap();
  const buttons = new Set(), composers = new Set(), statuses = new Map(), panels = new Map();
  const shellSurfaces=new Map(),dockBodies=new Map(),railFrames=new Map();
  const controller = new AbortController(), ease = 'cubic-bezier(.2,.78,.25,1)';
  const panelSelector = moduleSelector('.acid-model-popover,.acid-dialog[open],.AnXs9G_panel,[data-trigger-menu],.haSm5q_details,[role="dialog"]:not(.acid-dialog)');
  let disposed = false, pendingStage, routeRun, workspaceRun, navigationFrame, observedFrame;
  const geometryObserver=new MutationObserver(()=>scanShellSurfaces());
  const localRouteSelector=moduleSelector('.Dc7zOa_tab,[data-row-key^="session:"][role="treeitem"]');

  function run(owner, duration, done = () => {}) {
    const current = { owner, animations:[], nodes:[], timers:[], ended:false, done,
      finish(commit=true) {
        if(current.ended)return;current.ended=true;
        for(const timer of current.timers)clearTimeout(timer);
        for(const animation of current.animations)animation.cancel();
        for(const node of current.nodes)node.remove();
        runs.delete(current);if(commit)done();
      },
      animate(node, frames, time, delay=0, easing=ease) {
        if(!node?.animate)return;
        const animation=node.animate(frames,{duration:Math.max(1,time),delay,easing,fill:'both'});
        animation.finished.catch(()=>{});current.animations.push(animation);return animation;
      },
      at(delay, callback) { current.timers.push(setTimeout(()=>{if(!current.ended)callback();},delay)); },
      temp(className, parent=owner) {
        const node=document.createElement('span');node.className=className;node.dataset.acidMotionOwned='';node.setAttribute('aria-hidden','true');
        parent.append(node);current.nodes.push(node);return node;
      }
    };
    runs.add(current);current.at(duration,()=>current.finish());return current;
  }
  function excluded(node) { return node?.closest?.('[data-acid-motion-owned],.acid-fx'); }
  // Mask v3, the print slab: the shutter stays, but every column is printed from the one workspace
  // colour (solid + number, 1-bit dither, ink HUD with registration, barcode and destination, the
  // workspace mark). Bigger events get more columns. Columns fall in a 30ms wave and keep falling
  // away, so content shows from the leading edge instead of waiting for a retreat.
  function mask(node, {mode='open',kind='menu',direction='down-up',done=()=>{},info={}}={}) {
    const previous=surfaces.get(node);previous?.finish(false);
    const motion=getMotion();
    if(!node||motion==='off'||disposed){done();return;}
    const quiet=motion==='quiet',cols=quiet?1:(MASK_COLUMNS[kind]??1),pace=MASK_TIMING[cols],scale=quiet?.6:1;
    const enter=Math.round(pace.enter*scale),hold=Math.round(pace.hold*scale),exit=Math.round(pace.exit*scale),stagger=quiet?0:MASK_STAGGER;
    const coveredAt=enter+(cols-1)*stagger,revealAt=coveredAt+hold,duration=revealAt+exit+(cols-1)*stagger;
    const original={clip:node.style.clipPath,positioned:node.classList.contains('acid-mask-positioned')};
    if(getComputedStyle(node).position==='static')node.classList.add('acid-mask-positioned');
    const current=run(node,duration,()=>{
      node.style.clipPath=original.clip;if(!original.positioned)node.classList.remove('acid-mask-positioned');
      node.dataset.acidMaskPhase='complete';delete node.dataset.acidClosing;surfaces.delete(node);done();
    });
    current.restore=()=>{node.style.clipPath=original.clip;if(!original.positioned)node.classList.remove('acid-mask-positioned');delete node.dataset.acidClosing;};
    const end=current.finish;current.finish=(commit=true)=>{if(current.ended)return;if(!commit)current.restore();end(commit);};
    current.mustCommit=mode==='close';current.coveredAt=coveredAt;
    if(mode==='close'&&panels.has(node))panels.get(node).suppressClose=true;
    surfaces.set(node,current);node.dataset.acidMaskDirection=direction;node.dataset.acidMaskPhase='cover';
    if(mode==='close')node.dataset.acidClosing='true';
    const sheet=current.temp('acid-approved-mask');sheet.dataset.cols=String(cols);sheet.dataset.kind=kind;
    const [from,to]=MASK_SHUTTER[direction]??MASK_SHUTTER['down-up'];
    const columns=maskFaces(cols,info).map(face=>{const column=current.temp('acid-mask-col',sheet);column.dataset.face=face.kind;column.innerHTML=face.html;return column;});
    // Horizontal shutters run from the edge they enter at, so the wave starts on that side.
    const order=direction==='right-left'?[...columns].reverse():columns;
    order.forEach((column,i)=>current.animate(column,[{clipPath:from},{clipPath:'inset(0)'}],enter,i*stagger,MASK_EASE));
    if(mode==='open')current.animate(node,[{clipPath:from},{clipPath:'inset(0)'}],coveredAt,0,MASK_EASE);
    current.at(coveredAt,()=>{node.dataset.acidMaskPhase='covered';});
    current.at(revealAt,()=>{
      node.dataset.acidMaskPhase='reveal';
      // one-frame tear on the ink column as the slab leaves
      const hud=columns.find(column=>column.dataset.face==='hud')?.querySelector?.('.acid-mask-hud');
      if(hud)current.animate(hud,[{transform:'none'},{transform:'translateX(5px)',offset:.34},{transform:'translateX(-3px)',offset:.67},{transform:'none'}],60,0,'steps(1,end)');
      order.forEach((column,i)=>current.animate(column,[{clipPath:'inset(0)'},{clipPath:to}],exit,i*stagger,MASK_EASE));
      if(mode==='close')current.animate(node,[{clipPath:'inset(0)'},{clipPath:to}],exit+(cols-1)*stagger,0,MASK_EASE);
    });
    return current;
  }
  function snapshot(node) {
    if(!node?.cloneNode)return;
    const rect=node.getBoundingClientRect();if(!rect.width||!rect.height)return;
    const clone=node.cloneNode(true);clone.setAttribute('aria-hidden','true');clone.inert=true;
    const originals=[node,...node.querySelectorAll('*')],copies=[clone,...clone.querySelectorAll('*')];
    const scrolls=originals.flatMap((element,i)=>element.scrollTop||element.scrollLeft?[{node:copies[i],top:element.scrollTop,left:element.scrollLeft}]:[]);
    // A snapshot must not start another browser/terminal session in an iframe.
    for(const iframe of clone.querySelectorAll('iframe')){iframe.removeAttribute('src');iframe.removeAttribute('srcdoc');}
    const originalCanvases=node.querySelectorAll('canvas'),copyCanvases=clone.querySelectorAll('canvas');
    originalCanvases.forEach((canvas,i)=>{try{copyCanvases[i]?.getContext('2d')?.drawImage(canvas,0,0);}catch{/* Keep the other snapshot layers if a canvas cannot be read. */}});
    for(const element of [clone,...clone.querySelectorAll('[id],[data-slot],.acid-fx,[data-acid-motion-owned]')]) {
      element.removeAttribute('id');element.removeAttribute('data-slot');
      if(element!==clone&&element.matches('.acid-fx,[data-acid-motion-owned]'))element.remove();
    }
    return {clone,rect,display:getComputedStyle(node).display,time:performance.now(),scrolls};
  }
  function proxy(captured,kind,mode='close',bounds=captured?.rect,direction='down-up',info={}) {
    if(!captured||getMotion()==='off'||disposed)return;
    const holder=document.createElement('div');holder.className='acid-transition-proxy';holder.dataset.acidMotionOwned='';
    holder.setAttribute('aria-hidden','true');holder.inert=true;
    Object.assign(holder.style,{left:bounds.left+'px',top:bounds.top+'px',width:bounds.width+'px',height:bounds.height+'px'});
    const clone=captured.clone;clone.removeAttribute('open');
    Object.assign(clone.style,{position:'absolute',inset:'auto',left:captured.rect.left-bounds.left+'px',top:captured.rect.top-bounds.top+'px',width:captured.rect.width+'px',height:captured.rect.height+'px',margin:'0',maxHeight:'none',display:captured.display,clipPath:'none',visibility:'visible'});
    holder.append(clone);document.body.append(holder);
    for(const scroll of captured.scrolls??[]){scroll.node.scrollTop=scroll.top;scroll.node.scrollLeft=scroll.left;}
    const current=mask(holder,{mode,kind,direction,info,done:()=>holder.remove()});
    if(current)current.nodes.push(holder);else holder.remove();return current;
  }
  function swapSurface(record,node,label,direction='down-up') {
    record.run?.finish(false);
    const captured=record.captured;
    if(captured&&performance.now()-captured.time<2000){
      const next=node?.getBoundingClientRect()??captured.rect;
      const top=document.querySelector('.acid-masthead')?.getBoundingClientRect().bottom??0;
      record.run=proxy(captured,'page','swap',surfaceUnion(captured.rect,next,top),direction);
      record.run?.at(record.run.coveredAt,()=>captured.clone.remove());
    }else if(node)record.run=mask(node,{mode:'swap',kind:'page',direction});
    if(record.run)record.run.owner.dataset.transition=label;
    record.captured=undefined;
  }
  function syncCompactRail(frame) {
    // NEXT: the narrow strip sidebar keeps the native right panel track.
    const properties={'--acid-next-columns':nextSidebarColumns(frame.style.gridTemplateColumns),'--acid-next-right':nextSidebarRight(frame.style.gridTemplateColumns)};
    if(document.documentElement?.hasAttribute('data-windows-titlebar')){properties['--acid-rail-columns']=compactRailColumns(frame.style.gridTemplateColumns);properties['--acid-rail-right-width']=nativeRightTrack(frame.style.gridTemplateColumns)+'px';}
    if(!railFrames.has(frame))railFrames.set(frame,Object.keys(properties).map(name=>({name,value:frame.style.getPropertyValue(name),priority:frame.style.getPropertyPriority(name)})));
    for(const[name,value]of Object.entries(properties))if(frame.style.getPropertyValue(name)!==value)frame.style.setProperty(name,value);
  }
  function scanShellSurfaces() {
    const frame=document.querySelector(moduleSelector('.mP3x-q_frame'));if(!frame)return;
    if(observedFrame!==frame){geometryObserver.disconnect();geometryObserver.observe(frame,{attributes:true,attributeFilter:['style']});observedFrame=frame;}
    syncCompactRail(frame);
    let geometryDirection;
    const sidebar=frame.querySelector(moduleSelector('.mP3x-q_sidebarCol'));
    if(sidebar){
      const state=frame.hasAttribute('data-sidebar-collapsed')?'rail':'wide',previous=shellSurfaces.get(sidebar);
      // NEXT strips / thin lines animate their own fold (railMorph); they never take the mask.
      const folding=/^(next|thin)$/.test(document.documentElement.getAttribute('data-acid-sidebar')??'');
      if(previous&&previous.state!==state){previous.state=state;
        if(folding){previous.run?.finish(false);previous.captured=undefined;if(pendingStage?.shell)pendingStage=undefined;}
        else{swapSurface(previous,sidebar,'sidebar-'+state,'left-right');geometryDirection='left-right';}}
      else if(!previous)shellSurfaces.set(sidebar,{state});
    }
    const changedPanels=new Set(),visiblePanels=new Set();
    for(const panel of document.querySelectorAll('[data-sidebar-right-panel]')){
      if(excluded(panel))continue;
      const open=panel.hasAttribute('data-sidebar-right-open')&&!panel.closest('[hidden]');
      const state=open?panel.dataset.sidebarRightPanel:'closed',previous=shellSurfaces.get(panel);
      if(open)visiblePanels.add(panel);
      if(!previous){shellSurfaces.set(panel,{state});if(open){mask(panel,{kind:'page',direction:'right-left'});changedPanels.add(panel);}}
      else if(previous.state!==state){
        previous.state=state;swapSurface(previous,open?panel:null,'rightbar-'+state,'right-left');changedPanels.add(panel);geometryDirection='right-left';
      }
    }
    for(const pane of document.querySelectorAll('[data-dockkit-pane],[data-dockkit-float]')){
      if(excluded(pane))continue;const panel=pane.closest('[data-sidebar-right-panel]');
      if(panel&&!visiblePanels.has(panel)||pane.closest('[hidden],[aria-hidden="true"]'))continue;
      const body=[...pane.querySelectorAll(moduleSelector('.OUqwTW_tabBody'))].find(node=>!node.closest('[hidden],[aria-hidden="true"]')&&node.getBoundingClientRect().height>0);
      if(!body)continue;
      // DockKit remounts the pane element when its active content changes.
      // The native pane id remains stable; retain its pre-click snapshot.
      const key=nativePaneKey(pane,panel),tab=body.dataset.sidebarRightTab,previous=dockBodies.get(key),direction=panel?'right-left':'down-up';
      if(previous){previous.pane=pane;previous.body=body;}
      if(previous&&previous.tab!==tab){previous.tab=tab;previous.body=body;if(!changedPanels.has(panel))swapSurface(previous,body,'preview-tab',direction);}
      else if(!previous){dockBodies.set(key,{pane,tab,body});if(!changedPanels.has(panel))mask(body,{kind:'page',direction});}
    }
    for(const[node,record]of shellSurfaces)if(!node.isConnected){record.run?.finish(false);shellSurfaces.delete(node);}
    for(const[key,record]of dockBodies)if(!record.pane.isConnected){record.run?.finish(false);dockBodies.delete(key);}
    if(geometryDirection&&pendingStage&&!frame.hasAttribute('data-dragging'))revealStage('columns',geometryDirection);
  }
  function captureShellSurfaces() {
    // Off never draws the clone. Proxy already returns immediately; skipping the copy avoids the stall.
    if(getMotion()==='off')return;
    for(const[node,record]of shellSurfaces)if(record.state!=='closed')record.captured=snapshot(node);
    for(const record of dockBodies.values())record.captured=snapshot(record.body);
  }
  function shellGeometryTarget(target) {
    return target.closest?.('.acid-sidebar-toggle,[data-sidebar-right-expand],[data-sidebar-right-toggle],[data-sidebar-right-mode],button[aria-label^="在侧边栏"]');
  }
  function captureStage(shell=false) {
    // A stage snapshot only feeds the old-page proxy. Motion off drops it, including one captured earlier.
    if(getMotion()==='off'){pendingStage=undefined;return;}
    pendingStage=snapshot(document.querySelector(shell?moduleSelector('.mP3x-q_frame'):moduleSelector('.mP3x-q_centerCol')));
    if(pendingStage)pendingStage.shell=shell;
  }
  function revealStage(kind='page',direction='down-up',info={}) {
    routeRun?.finish(false);
    const maskKind=kind==='workspace'?'workspace':'page';
    const stage=document.querySelector(moduleSelector('.mP3x-q_centerCol'));if(!stage||getMotion()==='off'||disposed)return;
    if(pendingStage&&performance.now()-pendingStage.time<2000) {
      const captured=pendingStage;pendingStage=null;
      // The old surface remains visible until the cover is complete; the host
      // switches underneath it immediately, without intercepting its action.
      const top=document.querySelector('.acid-masthead')?.getBoundingClientRect().bottom??0;
      const bounds=captured.shell?surfaceUnion(captured.rect,stage.getBoundingClientRect(),top):captured.rect;
      routeRun=proxy(captured,maskKind,'swap',bounds,direction,info);
      routeRun?.at(routeRun.coveredAt,()=>captured.clone.remove());
    } else routeRun=mask(stage,{mode:'swap',kind:maskKind,direction,info});
    if(routeRun)routeRun.owner.dataset.transition=kind;
  }
  function decorateButton(button) {
    if(excluded(button)||button.closest('[role="menuitem"],[data-menu-material]'))return false;
    if(button.querySelector(':scope > .acid-fx'))return true;
    if(getComputedStyle(button).position==='static')button.classList.add('acid-layer-positioned');
    button.classList.add('acid-layered');buttons.add(button);
    const layer=document.createElement('span');layer.className='acid-fx';layer.setAttribute('aria-hidden','true');
    layer.innerHTML='<i class="acid-hover-corner tl"></i><i class="acid-hover-corner tr"></i><i class="acid-hover-corner bl"></i><i class="acid-hover-corner br"></i><i class="acid-hover-line"></i><i class="acid-press-fill"></i><i class="acid-press-outline"></i>';
    button.prepend(layer);
    return true;
  }
  // Hover belongs to the keys that matter (masthead, rail commands, drawer, dialogs, composer); the
  // corners snap in two steps and CSS holds them while hovered. A press is one short flash.
  function keyButton(button){return !!button.closest?.(`${KEY_BUTTONS},${composerSelector()}`);}
  function feedback(button, kind='press') {
    if(button.disabled||getMotion()==='off'||disposed||!decorateButton(button))return;
    if(kind==='hover'&&!keyButton(button))return;
    buttonRuns.get(button)?.finish(false);
    const duration=Math.round((kind==='hover'?120:160)*(getMotion()==='quiet'?.6:1));
    const current=run(button,duration);buttonRuns.set(button,current);
    button.dataset.acidFeedback=kind;
    if(kind==='hover') {
      button.dataset.acidKey='';
      button.querySelectorAll(':scope > .acid-fx .acid-hover-corner').forEach(corner=>current.animate(corner,[{opacity:0,transform:'scale(1.4)'},{opacity:1,transform:'none'}],duration,0,'steps(2,end)'));
    } else current.animate(button.querySelector('.acid-press-fill'),[{opacity:.85},{opacity:.85,offset:.4},{opacity:0}],duration,0,'linear');
  }
  function decorateComposer(node) {
    if(excluded(node)||composers.has(node))return;composers.add(node);node.classList.add('acid-accepted-composer');
    const layer=document.createElement('span');layer.className='acid-composer-fx';layer.dataset.acidMotionOwned='';layer.setAttribute('aria-hidden','true');
    layer.innerHTML='<i class="acid-hover-corner tl"></i><i class="acid-hover-corner tr"></i><i class="acid-hover-corner bl"></i><i class="acid-hover-corner br"></i><i class="acid-composer-line top"></i><i class="acid-composer-line bottom"></i><i class="acid-composer-lamp"></i>';
    node.append(layer);
  }
  function focusComposer(node) {
    decorateComposer(node);node.classList.add('acid-composer-focused');
    surfaces.get(node)?.finish(false);if(getMotion()==='off')return;
    const duration=acceptedDuration('composer',getMotion()),current=run(node,duration);surfaces.set(node,current);
    node.querySelectorAll(':scope > .acid-composer-fx .acid-hover-corner').forEach((corner,i)=>current.animate(corner,[
      {opacity:0,transform:`translate(${i%2?6:-6}px,${i>1?6:-6}px)`},{opacity:1,transform:'none'}],duration));
    node.querySelectorAll(':scope > .acid-composer-fx .acid-composer-line').forEach(line=>current.animate(line,[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],duration));
    current.animate(node.querySelector('.acid-composer-lamp'),[{opacity:.15,transform:'scale(.65)'},{opacity:1,transform:'scale(1)'}],duration*.65,duration*.2);
  }
  function signal(node) {
    if(excluded(node)||!node.textContent.trim())return;
    const text=[...node.childNodes].filter(child=>!child.classList?.contains('acid-signal-queue')).map(child=>child.textContent).join('');
    const previous=statuses.get(node);if(previous?.text===text)return;previous?.run?.finish(false);
    const duration=acceptedDuration('signal',getMotion());if(!duration){statuses.set(node,{text});return;}
    const current=run(node,duration),queue=current.temp('acid-signal-queue');queue.innerHTML='<i></i><i></i><i></i><i></i>';
    [...queue.children].forEach((dot,i)=>current.animate(dot,[{opacity:.15},{opacity:1,offset:.4},{opacity:.3,offset:.75},{opacity:1}],getMotion()==='quiet'?90:300,i*(getMotion()==='quiet'?50:170),'linear'));
    statuses.set(node,{text,run:current});
  }
  function panelKind(node) { return node.matches(moduleSelector('.haSm5q_details'))?'trace':node.matches(moduleSelector('.acid-dialog,.AnXs9G_panel,dialog'))?'dialog':'menu'; }
  function prepare(root) {
    if(excluded(root))return;
    if(root instanceof Element&&root.matches('button'))decorateButton(root);
    for(const button of root.querySelectorAll?.('button')||[])decorateButton(button);
    if(root instanceof Element&&root.matches(composerSelector()))decorateComposer(root);
    for(const composer of root.querySelectorAll?.(composerSelector())||[])decorateComposer(composer);
  }
  function scanPanels() {
    scanShellSurfaces();
    const present=new Set();
    for(const node of document.querySelectorAll(panelSelector)) {
      if(excluded(node))continue;const rect=node.getBoundingClientRect();
      if(!rect.width||!rect.height||getComputedStyle(node).visibility==='hidden')continue;present.add(node);
      if(!panels.has(node)){panels.set(node,{kind:panelKind(node),captured:snapshot(node)});mask(node,{kind:panelKind(node)});}
    }
    for(const[node,record]of panels)if(!present.has(node)) {
      panels.delete(node);const current=surfaces.get(node),closing=current&&node.dataset.acidClosing;
      current?.finish(false);
      if(!closing&&!record.suppressClose&&record.captured&&performance.now()-record.captured.time<2000)proxy(record.captured,record.kind);
    }
    for(const node of document.querySelectorAll('[role="status"],[role="alert"]'))signal(node);
    for(const node of statuses.keys())if(!node.isConnected)statuses.delete(node);
    for(const node of buttons)if(!node.isConnected)buttons.delete(node);
    for(const node of composers)if(!node.isConnected)composers.delete(node);
  }
  function capturePanels(event) {
    if(getMotion()==='off')return;
    if(event.type==='pointerdown'||event.key==='Escape'||event.key==='Enter'||event.key===' ')captureShellSurfaces();
    for(const[node,record]of panels) {
      if(event.type==='keydown'&&event.key!=='Escape')continue;
      if(event.type==='pointerdown'&&!event.target.closest?.('button')&&node.contains(event.target))continue;
      record.captured=snapshot(node);
    }
  }
  function cancel() {
    if(navigationFrame!==undefined){cancelAnimationFrame(navigationFrame);navigationFrame=undefined;}
    cancelWorkspaceHeader();for(const current of [...runs])current.finish(!disposed&&current.mustCommit);
    routeRun=undefined;pendingStage=undefined;
    for(const record of [...shellSurfaces.values(),...dockBodies.values()])record.captured=undefined;
  }
  function cancelWorkspace() { workspaceRun?.finish();workspaceRun=undefined; }
  function calibrateWorkspace(button,ordinal,name) {
    cancelWorkspace();const index=button.querySelector('#workspace-index'),label=button.querySelector('#workspace-name');
    const previous=index.textContent,value=formatWorkspaceIndex(ordinal);paintDigits(index,value);index.dataset.ordinal=String(ordinal);label.textContent=name;
    button.setAttribute('aria-label',`切换工作区：${value} ${name}`);index.dataset.calibration='scan-digits-only';
    const duration=acceptedDuration('workspace',getMotion());if(!duration)return;
    const current=run(index,duration);workspaceRun=current;
    const scanner=current.temp('acid-workspace-scan',index);
    current.animate(scanner,[{left:'-5%',opacity:0},{opacity:1,offset:.1},{left:'102%',opacity:1,offset:.9},{left:'102%',opacity:0}],duration*.31,0,'linear');
    index.querySelectorAll('.workspace-digit').forEach((cell,i)=>{
      const glyph=cell.querySelector('.workspace-glyph'),old=current.temp('acid-digit-old',cell);old.textContent=previous[i]||'0';
      const calibration=current.temp('acid-digit-calibration',cell);calibration.textContent=String((Number(value[i])+7)%10);
      const delay=duration*(.28+i*.035);
      current.animate(calibration,[{opacity:0},{opacity:1,offset:.02},{opacity:1,offset:.72},{opacity:0}],duration*.28,delay);
      current.at(delay+duration*.15,()=>{calibration.textContent=String((Number(value[i])+3)%10);});
      current.animate(old,[{transform:'none'},{transform:'translateY(-110%)'}],duration*.48,delay);
      current.animate(glyph,[{transform:'translateY(110%)'},{transform:'none'}],duration*.53,delay);
    });return current;
  }
  prepare(document);scanPanels();
  // Scan in the mutation callback. The callback already sees the DOM after the records, and a
  // panel is found by a document query, not by how deep or how far along it sits in the added tree.
  const observer=new MutationObserver(records=>{
    for(const record of records)for(const node of record.addedNodes||[])if(node.nodeType===1)prepare(node);
    scanPanels();
  });
  observer.observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['open','hidden','aria-expanded','aria-selected','aria-hidden','class','data-state','data-sidebar-collapsed','data-sidebar-right-open','data-sidebar-right-panel']});
  document.addEventListener('pointerover',event=>{const button=event.target.closest('button');if(button&&!excluded(button)&&!button.contains(event.relatedTarget))feedback(button,'hover');},{signal:controller.signal});
  document.addEventListener('pointerdown',event=>{
    capturePanels(event);const button=event.target.closest('button');
    if(button&&!excluded(button)&&event.button===0)feedback(button);
    if(button?.matches(moduleSelector('.wtg9ga_panelRow,.wtg9ga_newSession,.acid-brand-home,.acid-workspace-option,.Dc7zOa_tab,[data-row-key]'))||button?.closest(moduleSelector('[data-slot="sidebar.workspaces"],.wtg9ga_settingsArea')))captureStage();
    const route=event.target.closest(localRouteSelector);
    if(route&&route.getAttribute('aria-selected')!=='true'&&event.button===0)captureStage();
    if(shellGeometryTarget(event.target)&&event.button===0)captureStage(true);
  },{capture:true,signal:controller.signal});
  document.addEventListener('keydown',event=>{
    capturePanels(event);if(['Enter',' '].includes(event.key)&&(event.target.closest?.('button')||event.target.closest?.(localRouteSelector)))captureStage(!!shellGeometryTarget(event.target));
    if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='b'){captureShellSurfaces();captureStage(true);}
    if((event.ctrlKey||event.metaKey)&&event.target.closest?.('[data-sidebar-right-panel]')){captureShellSurfaces();captureStage(true);}
  },{capture:true,signal:controller.signal});
  document.addEventListener('click',event=>{
    const button=event.target.closest('button');if(button&&!excluded(button)&&event.detail===0)feedback(button);
    if(pendingStage&&event.target.closest(localRouteSelector)){
      if(navigationFrame!==undefined)cancelAnimationFrame(navigationFrame);
      // Native React navigation commits first. Workspace/panel transitions may
      // already have consumed this snapshot; only cover a remaining local route.
      navigationFrame=requestAnimationFrame(()=>{navigationFrame=undefined;if(pendingStage)revealStage('page');});
    }
  },{signal:controller.signal});
  document.addEventListener('focusin',event=>{const card=event.target.closest(composerSelector());if(card&&event.target.matches('[data-composer-input=true],textarea,[contenteditable=true],[contenteditable=""]'))focusComposer(card);},{signal:controller.signal});
  document.addEventListener('focusout',event=>{const card=event.target.closest(composerSelector());if(card&&!card.contains(event.relatedTarget))card.classList.remove('acid-composer-focused');},{signal:controller.signal});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)cancel();},{signal:controller.signal});
  const api={revealStage,captureStage,cancel,cancelWorkspace,calibrateWorkspace,mask,
    closeSurface(node,done,kind='menu'){if(node?.dataset.acidClosing)return;return mask(node,{mode:'close',kind,done});},
    reopenSurface(node){surfaces.get(node)?.finish(false);return mask(node,{kind:panelKind(node)});},
    dispose(){disposed=true;controller.abort();observer.disconnect();geometryObserver.disconnect();cancel();
      for(const button of buttons){button.querySelector(':scope > .acid-fx')?.remove();button.classList.remove('acid-layered','acid-layer-positioned');delete button.dataset.acidFeedback;}
      for(const composer of composers){composer.querySelector(':scope > .acid-composer-fx')?.remove();composer.classList.remove('acid-accepted-composer','acid-composer-focused');}
      for(const[frame,properties]of railFrames)for(const previous of properties){if(previous.value)frame.style.setProperty(previous.name,previous.value,previous.priority);else frame.style.removeProperty(previous.name);}
      railFrames.clear();shellSurfaces.clear();dockBodies.clear();
      buttons.clear();composers.clear();panels.clear();statuses.clear();if(activeAcceptedMotion===api)activeAcceptedMotion=undefined;
    }};
  activeAcceptedMotion=api;return api;
}
