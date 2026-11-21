function SkinSymbol({className=''}){return h('svg',{className,viewBox:'0 0 96 96','aria-hidden':true,dangerouslySetInnerHTML:{__html:SYMBOL}});}
function HeroMark(){return h(SkinSymbol,{className:'acid-hero-mark'});}
function SettingsHeader({t}){return h('strong',{className:'acid-settings-title'},t('settings'));}

function NativeDialog({title,children,onClose,className=''}){
  const ref=React.useRef(null),alive=React.useRef(true);
  const close=()=>{const finish=()=>{if(alive.current)onClose();};if(ref.current&&activeAcceptedMotion)activeAcceptedMotion.closeSurface(ref.current,finish,'dialog');else finish();};
  React.useEffect(()=>{alive.current=true;const dialog=ref.current;dialog.showModal();return()=>{alive.current=false;if(dialog.open)dialog.close();};},[]);
  return h('dialog',{ref,className:'acid-dialog '+className,onCancel:event=>{event.preventDefault();close();},onClose:()=>{if(alive.current)onClose();},onClick:event=>{if(event.target===ref.current){const rect=ref.current.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)close();}},'aria-label':title},
    h('div',{className:'acid-dialog-heading'},h('h2',null,title),h('button',{type:'button','aria-label':'关闭',onClick:close},'×')),children);
}

function WorkspaceRailButtons({items,numbers,workspaceId,onPick,t,colors,onColor}){
  if(!items.length)return null;
  // Same rule as the classic rows: only a colour the user picked is painted, so the rail keeps its
  // native ink until the palette dialog is used. The right button asks for a colour instead.
  const picked=id=>{try{return normalizeHex(colors?.[id],null);}catch{return null;}};
  return h('nav',{className:'acid-workspace-rail','aria-label':t('workspace')},...items.map((item,i)=>{
    const number=formatWorkspaceIndex(numbers?.[String(item.workspaceId)]??i+1),name=item.title||item.name||item.path?.split(/[\\/]/).filter(Boolean).at(-1)||t('none'),color=picked(String(item.workspaceId));
    return h('button',{key:item.workspaceId,type:'button',className:'acid-rail-workspace','data-acid-workspace':item.workspaceId,
      ...(color?{'data-acid-ws-color':'',style:{'--acid-ws-id':color}}:null),
      title:`${number} ${name}${onColor?` · ${t('ws.color')}`:''}`,'aria-label':`${t('workspace')} ${number} ${name}`,'aria-pressed':workspaceId===item.workspaceId,
      onContextMenu:onColor?event=>{event.preventDefault();onColor(String(item.workspaceId));}:undefined,
      onClick:()=>onPick(item.workspaceId)},number);
  }));
}

function WorkspaceRail(props){
  const [target,setTarget]=React.useState(null);
  React.useLayoutEffect(()=>{
    let observedFrame=null,observedSidebar=null;
    const observer=new MutationObserver(()=>sync());
    const sync=()=>{
      const frame=[...document.querySelectorAll(moduleSelector('.mP3x-q_frame'))].find(node=>!node.closest('[data-acid-motion-owned]'));
      const sidebar=frame?.querySelector(moduleSelector('.mP3x-q_sidebarCol'));
      if(frame!==observedFrame||sidebar!==observedSidebar){
        observer.disconnect();observedFrame=frame;observedSidebar=sidebar;
        if(frame){observer.observe(frame,{attributes:true,attributeFilter:['data-sidebar-collapsed']});observer.observe(sidebar??frame,{childList:true,subtree:true});}
        else observer.observe(document.body,{childList:true,subtree:true});
      }
      // The collapsed native browser keeps this list area empty. Leave its
      // add/search controls, wide list and React-owned children in place.
      const next=frame?.hasAttribute('data-sidebar-collapsed')?sidebar?.querySelector(moduleSelector('[data-slot="sidebar.workspaces"] .GAkraW_listArea')):null;
      setTarget(previous=>previous===next?previous:next??null);
    };
    sync();return()=>observer.disconnect();
  },[]);
  return target?createPortal(h(WorkspaceRailButtons,props),target):null;
}

function sortByNumber(items,numbers){return [...items].sort((a,b)=>(numbers[String(a.workspaceId)]??1e9)-(numbers[String(b.workspaceId)]??1e9));}
// HUD masthead helpers. The token store is optional (tests and the showcase run without one).
const EMPTY_TOKEN_STORE=Object.freeze({subscribe:()=>()=>{},getSnapshot:()=>null});
const HUD_OP_RANK=Object.freeze({attention:0,working:1,done:2});
const HUD_OP_LABEL=Object.freeze({attention:'NEEDS YOU',working:'RUNNING',done:'DONE'});
const HUD_REGISTRATION='<svg class="acid-context-reg" viewBox="0 0 80 92" aria-hidden="true"><path d="M0 4.5h9M4.5 0v9M71 4.5h9M75.5 0v9M0 87.5h9M4.5 83v9M71 87.5h9M75.5 83v9" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>';
const HUD_ICONS=Object.freeze({
  palette:'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="2" y="2" width="7" height="7" style="fill:var(--hud-slab)"/><rect x="11.5" y="2.5" width="6" height="6" stroke="currentColor" stroke-width="1.4"/><rect x="2.5" y="11.5" width="6" height="6" stroke="currentColor" stroke-width="1.4"/><rect x="11.5" y="11.5" width="6" height="6" stroke="currentColor" stroke-width="1.4"/></svg>',
  workspace:'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M3 2v16M8 5v13M13 2v16M18 5v13" stroke="currentColor" stroke-width="2.2"/></svg>'
});
const hudCount=value=>String(value).padStart(2,'0');
function panelLabel(panel){return panel?String(panel).split(/[./:]/).filter(Boolean).at(-1)?.replace(/[-_]+/g,' ').toUpperCase().slice(0,18)||'PANEL':'HOME';}
function workspaceLabel(item,fallback='—'){return item?.title||item?.name||item?.path?.split(/[\\/]/).filter(Boolean).at(-1)||fallback;}
function todayTokenTotal(view){
  if(!Array.isArray(view?.data?.days))return null;
  const today=tokenActivityCalendar().find(day=>day.today),record=view.data.days.find(day=>day.date===today?.date);
  return (record?.input??0)+(record?.output??0);
}
function todayTokens(view){const total=todayTokenTotal(view);return total==null?'—':compactTokens(total);}
// SYS handle: level 0–3 against the three daily thresholds; hazard only past the top one, or when the
// usage feed was lost after it had worked (stale). A host without the feed never alarms.
function sysStatus(view){
  const total=todayTokenTotal(view),thresholds=Array.isArray(view?.thresholds)?view.thresholds:[];
  const level=total==null?0:thresholds.filter(limit=>total>=limit).length;
  if(view?.status==='stale')return {level,alert:true,alertText:'SYNC'};
  if(thresholds.length&&level>=thresholds.length)return {level,alert:true,alertText:`${compactTokens(thresholds.at(-1))}+`};
  return {level,alert:false,alertText:''};
}
function hudOps(ids,activity,shownId,numbers){
  return ids.filter(id=>id!==shownId&&activity[id]).sort((a,b)=>HUD_OP_RANK[activity[a]]-HUD_OP_RANK[activity[b]]||(numbers?.[a]??1e9)-(numbers?.[b]??1e9));
}
// 01 COLOR SYSTEM: workspace colours lead (colour sets + every workspace), then the reading canvas,
// then interaction and the standby colour (the old acid accent, used only when no workspace is open).
function csHead(n,en,label){return h('div',{className:'acid-cs-head'},h('span',null,n),h('b',null,en),h('span',null,label));}
function csSegmented(options,value,onPick,label){
  return h('div',{className:'acid-cs-seg',role:'group','aria-label':label},...options.map(([key,text])=>h('button',{key,type:'button','aria-pressed':value===key,onClick:()=>onPick(key)},text)));
}
function ColorSystem({t,appearance,updateAppearance,items,numbers,identity,marks,activity,setWorkspaceColor}){
  const [open,setOpen]=React.useState(null);
  const mode=appearance.mode,palette=appearance.palettes[mode],scheme=makeScheme(mode,palette);
  const setPalette=next=>updateAppearance({palettes:{...appearance.palettes,[mode]:{...palette,...next}}});
  const set=normalizeColorSet(appearance.colorSet),setColors=IDENTITY_SETS[set];
  return h('div',{className:'acid-color-system'},
    h('section',{className:'acid-cs-col acid-cs-workspaces','aria-label':t('cs.workspaces')},
      csHead('A','WORKSPACE COLORS',t('cs.workspaces')),
      h('p',{className:'acid-cs-note'},t('cs.sets')),
      h('div',{className:'acid-cs-sets',role:'group','aria-label':t('cs.sets')},...Object.entries(IDENTITY_SETS).map(([key,colors])=>
        h('button',{key,type:'button',className:'acid-cs-set','data-set':key,'aria-pressed':set===key,onClick:()=>updateAppearance({colorSet:key})},
          h('span',{className:'acid-cs-set-name'},h('b',null,key.toUpperCase()),h('span',null,t(`cs.${key}`))),
          h('span',{className:'acid-cs-set-strip','aria-hidden':true},...colors.map((color,i)=>h('i',{key:i,style:{background:color}})))))),
      h('div',{className:'acid-cs-list'},...items.map(item=>{
        const id=String(item.workspaceId),color=identity[id]||setColors[0],custom=!!appearance.workspaceColors?.[id],number=formatWorkspaceIndex(numbers?.[id]??1),expanded=open===id;
        return h('div',{key:id,className:'acid-cs-ws','data-open':expanded?'':undefined,style:{'--acid-ws-id':color,'--acid-ws-id-fore':identityInk(color,custom)}},
          h('button',{type:'button',className:'acid-cs-row','aria-expanded':expanded,onClick:()=>setOpen(expanded?null:id)},
            h(WorkspaceMark,{mark:marks?.[id],state:activity?.[id],className:'acid-cs-mark'}),
            h('b',{className:'acid-cs-num'},number),
            h('span',{className:'acid-cs-name'},h('span',null,workspaceLabel(item)),item.path?h('small',null,item.path):null),
            h('span',{className:'acid-cs-tag','data-custom':custom?'':undefined},custom?'CUSTOM':'AUTO'),
            h('span',{className:'acid-cs-swatch','aria-hidden':true}),
            h('code',null,color)),
          expanded?h('div',{className:'acid-cs-edit'},
            h('div',{className:'acid-cs-picks',role:'group','aria-label':t('ws.color')},...setColors.map((choice,i)=>h('button',{key:i,type:'button','aria-label':choice,'aria-pressed':choice===color,style:{background:choice},onClick:()=>setWorkspaceColor(id,choice)}))),
            h(ColorField,{field:'ws.color',prefix:`acid-cs-${id}`,value:color,t,onColor:choice=>setWorkspaceColor(id,choice)}),
            h('button',{type:'button',className:'acid-cs-reset',disabled:!custom,onClick:()=>setWorkspaceColor(id,null)},t('cs.resetAuto'))):null);
      }))),
    h('div',{className:'acid-cs-col'},
      h('section',{className:'acid-cs-block','aria-label':t('cs.canvas')},
        csHead('B','READING CANVAS',t('cs.canvas')),
        csSegmented([['paper',t('paper')],['night',t('night')],['adaptive',t('adaptive')]],appearance.canvas,value=>updateAppearance({canvas:value}),t('canvas')),
        h(ColorField,{field:'surface',prefix:'acid-cs',value:palette.surface,t,onColor:color=>setPalette({surface:color})}),
        h(ColorField,{field:'text',prefix:'acid-cs',value:palette.text,t,onColor:color=>setPalette({text:color})}),
        h('p',{className:'acid-cs-contrast',role:'status','aria-live':'polite'},h('b',null,`${scheme.contrast.toFixed(1)} : 1`),h('span',null,t('contrast')+(scheme.adjusted?` · ${t('adjusted')} ${scheme.text}`:'')))),
      h('section',{className:'acid-cs-block','aria-label':t('cs.signal')},
        csHead('C','SIGNAL & STANDBY',t('cs.signal')),
        h(ColorField,{field:'signal',prefix:'acid-cs',value:palette.signal,t,onColor:color=>setPalette({signal:color})}),
        h('p',{className:'acid-cs-note'},t('signal.description')),
        h(ColorField,{field:'accent',prefix:'acid-cs',value:palette.accent,t,onColor:color=>setPalette({accent:color})}),
        h('p',{className:'acid-cs-note'},t('standby.description')),
        h('div',{className:'acid-cs-follow'},h('span',null,t('wsAccent'),h('small',null,t('cs.followNote'))),
          csSegmented([['on',t('wsAccent.on')],['off',t('wsAccent.off')]],appearance.workspaceAccent,value=>updateAppearance({workspaceAccent:value}),t('wsAccent')))),
      h('div',{className:'acid-cs-foot'},h('span',null,t('cs.live')),h('button',{type:'button',onClick:()=>setPalette(DEFAULT_PALETTES[mode])},t('reset')))));
}
function Masthead(props){
  const items=props.useWorkspaces(state=>state.items);
  const current=props.useSessions(state=>Object.values(state.byId).find(session=>(session.retainedBy?.mainView??0)>0)?.id);
  const panel=props.usePanelInfo(state=>state.activePanelId),numbers=workspaceNumbers(items),ordered=sortByNumber(items,numbers),workspace=workspaceContext(items,current,numbers);
  const appearance=props.useAppearance();
  // Identity is resolved once for the whole list: the masthead paints the active workspace with it,
  // the rail and the classic rows paint the ones the palette dialog stored a colour for.
  const identity=workspaceIdentity(items.map(item=>String(item.workspaceId)),numbers,appearance.workspaceColors);
  const identityColor=workspace?identity[String(workspace.workspaceId)]:null;
  const classic=appearance.sidebarStyle==='classic';
  const context=React.useRef(null),previous=React.useRef(null);
  const [picker,setPicker]=React.useState(false),[colorTarget,setColorTarget]=React.useState(null),[nativeState,setNativeState]=React.useState(null);
  const [paletteOpen,setPaletteOpen]=React.useState(false);
  const [,setOrderRevision]=React.useState(0);
  // The current workspace decides the skin's colour. Hovering another strip or line only lights
  // that strip or line in its own colour; the skin and the masthead stay on the current workspace.
  const accent=identityColor??null;
  const statusSource=props.statusSource??idleStatusSource;
  const statuses=React.useSyncExternalStore(statusSource.subscribe,statusSource.getSnapshot,statusSource.getSnapshot);
  const activity=workspaceActivity(items,statuses);
  const ids=items.map(item=>String(item.workspaceId));
  const marks=React.useMemo(()=>workspaceMarks(ids,numbers),[ids.join('|'),JSON.stringify(numbers)]);
  const tokenStore=props.tokenStore??EMPTY_TOKEN_STORE;
  const tokenView=React.useSyncExternalStore(tokenStore.subscribe,tokenStore.getSnapshot,tokenStore.getSnapshot);
  const shownId=workspace?String(workspace.workspaceId):null;
  const shownItem=shownId?items.find(item=>String(item.workspaceId)===shownId):null;
  let running=0,waiting=0;
  for(const status of statuses.values?.()??[]){if(status?.running===true)running++;if(status?.pendingInteraction!==undefined)waiting++;}
  const ops=hudOps(ordered.map(item=>String(item.workspaceId)),activity,shownId,numbers);
  React.useLayoutEffect(()=>{const root=document.documentElement;root.setAttribute('data-acid-masthead','hud');return()=>root.removeAttribute('data-acid-masthead');},[]);
  React.useLayoutEffect(()=>{props.setWorkspaceAccent?.(accent);},[accent]);
  React.useEffect(()=>()=>props.setWorkspaceAccent?.(null),[]);
  const copy=React.useRef(props.t);copy.current=props.t;
  const native=window.dshDesktop?.windowControls;
  // Windows reports its caption buttons through the desktop bridge; the macOS build exposes no
  // such channel, because there the traffic lights are drawn by the system in the top-left
  // corner. Drawing the caption column anyway keeps the skin's own top-right controls visible on
  // macOS, where the native ones are underneath the masthead and unreachable.
  const macCaption=/Mac/i.test(navigator.userAgentData?.platform||navigator.platform||'');
  const winChrome=!!native||macCaption;
  React.useEffect(()=>{if(!native)return;let alive=true;const refresh=()=>native.invoke('state').then(state=>{if(alive)setNativeState(state);}).catch(()=>{});refresh();window.addEventListener('resize',refresh);return()=>{alive=false;window.removeEventListener('resize',refresh);};},[native]);
  // Closing goes through the one window operation the desktop bridge does expose, which is gated
  // on the shortcut revision. Reading that revision must not disturb the shortcut store:
  // `shortcuts.get(definitions)` REPLACES the saved definitions, so passing an empty list here
  // would silently wipe the user's shortcuts. The subscription reports the current snapshot
  // without writing anything, so the revision is taken from there.
  // On macOS the caption column is real: every action goes through the host half, which can reach
  // the window's accessibility interface. `nativeState` mirrors whatever the host reports so the
  // glyphs stay truthful after the window is moved by other means.
  const macControls=macCaption&&!native;
  // `ctx` is not in scope here: this component is registered from `apply`, so the RPC seam arrives
  // as a prop. Reaching for a module-level `ctx` would throw on first render.
  const hostRpc=props.hostRpc;
  const hostWindow=action=>hostRpc?.('industrial-acid/window-control',{action});
  // Closing has a renderer-side route that minimise and zoom do not: the desktop bridge exposes
  // `keyboard.closeWindow`, gated on the current shortcut revision. It is preferred because it
  // needs no host-side module, so it keeps working on a host started before this code existed.
  // The revision arrives by subscription; reading it with `shortcuts.get([])` would overwrite the
  // user's saved shortcuts, because that call persists whatever it is given.
  const [closeRevision,setCloseRevision]=React.useState(undefined);
  React.useEffect(()=>{
    const shortcuts=window.dshDesktop?.shortcuts;
    if(!shortcuts?.subscribe)return;
    return shortcuts.subscribe(snapshot=>setCloseRevision(snapshot?.revision));
  },[]);
  const bridgeClose=()=>{
    const close=window.dshDesktop?.keyboard?.closeWindow;
    if(!close||closeRevision===undefined)return false;
    close(closeRevision).catch(()=>{});
    return true;
  };
  React.useEffect(()=>{
    if(!macControls||!hostRpc)return;
    let alive=true;
    const sync=async()=>{
      try{const result=await hostWindow('state');if(alive&&result?.ok)setNativeState(result.value);}catch{}
    };
    sync();
    window.addEventListener('resize',sync);
    const timer=setInterval(sync,4000);
    return()=>{alive=false;window.removeEventListener('resize',sync);clearInterval(timer);};
  },[macControls]);
  React.useLayoutEffect(()=>{
    const root=document.documentElement;
    const last=previous.current;
    if(workspace)updateWorkspaceHeader(context.current,workspace.index,workspace.title,props.getMotion());
    else{cancelWorkspaceHeader();context.current.querySelector('#workspace-index').textContent='—';delete context.current.querySelector('#workspace-index').dataset.ordinal;context.current.querySelector('#workspace-name').textContent=props.t('none');context.current.setAttribute('aria-label',props.t('workspace'));}
    if(last&&workspace&&last.workspaceId!==workspace.workspaceId){
      const number=formatWorkspaceIndex(workspace.index);
      props.motion()?.revealStage('workspace',workspace.index>(last.index??0)?1:-1,{number,label:`WS ${number} · ${workspace.title}`,mark:context.current?.querySelector('.acid-context-mark .acid-ws-mark-host')?.innerHTML});
    }
    else if(last&&last.panel!==panel)props.motion()?.revealStage('page','down-up',{label:`→ ${panelLabel(panel)}`});
    previous.current={...workspace,panel};syncWorkspaceOrdinals(items,workspaceNumbers(items),appearance.workspaceColors);
  },[workspace?.index,workspace?.workspaceId,workspace?.title,panel,items,appearance,identityColor]);
  // One colour for the slab and the whole skin: the current workspace's.
  React.useLayoutEffect(()=>{
    const root=document.documentElement;
    if(accent){root.style.setProperty('--acid-ws-context',accent);root.style.setProperty('--acid-ws-context-fore',foreground(accent));}
    else{root.style.removeProperty('--acid-ws-context');root.style.removeProperty('--acid-ws-context-fore');}
  },[accent]);
  // The classic list is the only layout whose reorder never announces itself: a drag leaves the
  // persisted order alone, so the numbers drift away from what is on screen. The rendered list is
  // read instead, and a settled permutation that differs from the stored one is adopted; the bump
  // re-renders the rail and the picker with the new numbers. Chips and ordinals paint on the next
  // frame, before the browser paints it; adopting a dragged order stays on the short settle.
  // The classic list is also where the colour belongs: the collapsed rail is invisible whenever the
  // sidebar is open, so every workspace row carries its own chip, and right-clicking the row opens
  // the same dialog. Both write through setColorTarget, the state the picker swatch already uses.
  React.useEffect(()=>{
    let timer=0;
    const chips=()=>{
      const colors=appearance.workspaceColors||{};
      for(const chip of document.querySelectorAll('[data-acid-ws-chip]')){
        const color=normalizeHex(colors[chip.getAttribute('data-acid-ws-chip')],null);
        if(color){chip.style.setProperty('--acid-ws-id',color);chip.setAttribute('data-acid-ws-picked','');}
        else{chip.style.removeProperty('--acid-ws-id');chip.removeAttribute('data-acid-ws-picked');}
      }
    };
    const paint=()=>{syncWorkspaceOrdinals(items,workspaceNumbers(items),appearance.workspaceColors);chips();};
    const settle=()=>{timer=0;if(classic&&adoptNativeWorkspaceOrder(items))setOrderRevision(value=>value+1);paint();};
    const decorate=()=>{
      if(!classic)return;
      for(const row of document.querySelectorAll('[data-slot="sidebar.workspaces"] [data-row-key^="workspace:"]')){
        if(row.querySelector('[data-acid-ws-chip]'))continue;
        const id=row.dataset.rowKey.slice(10),chip=document.createElement('button');
        chip.type='button';chip.className='acid-ws-chip';chip.title=copy.current('ws.color');
        chip.setAttribute('data-acid-ws-chip',id);chip.setAttribute('aria-label',copy.current('ws.color'));
        chip.setAttribute('aria-haspopup','dialog');
        chip.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();setColorTarget(id);});
        // Ride inside the row's own action cluster: that cluster already hides itself until the row is
        // hovered and spaces its buttons, so the chip inherits both instead of inventing a rhythm of
        // its own next to two buttons it knows nothing about.
        const actions=row.querySelector('[class*="rowActions"]');
        if(actions)actions.insertBefore(chip,actions.firstElementChild);
        else row.append(chip);
      }
    };
    // One paint per frame. The native rows only need to match the list at the next paint, and the
    // debounced settle below is what adopts a reorder.
    let frame=0;
    const changed=()=>{clearTimeout(timer);timer=setTimeout(settle,240);if(frame)return;frame=requestAnimationFrame(()=>{frame=0;paint();decorate();});};
    const list=document.querySelector('[data-slot="sidebar.workspaces"]');
    const observer=new MutationObserver(changed);
    observer.observe(list||document.body,{childList:true,subtree:true});
    const context=event=>{
      if(!classic||!(event.target instanceof Element))return;
      const row=event.target.closest('[data-slot="sidebar.workspaces"] [data-row-key^="workspace:"]');
      if(!row)return;
      event.preventDefault();event.stopPropagation();
      setColorTarget(row.dataset.rowKey.slice(10));
    };
    document.addEventListener('contextmenu',context,true);
    changed();
    return()=>{observer.disconnect();clearTimeout(timer);if(frame)cancelAnimationFrame(frame);document.removeEventListener('contextmenu',context,true);for(const chip of document.querySelectorAll('[data-acid-ws-chip]'))chip.remove();};
  },[items,appearance.workspaceColors,classic]);
  React.useEffect(()=>()=>cancelWorkspaceHeader(),[]);
  // Closing is answered by the bridge, which reports nothing back; the other two return the
  // settled state and update the glyph. A closed window legitimately becomes unreadable, so an
  // unavailable state after a successful action is not a failure.
  const windowAction=async action=>{
    if(native)return native.invoke(action).then(state=>setNativeState(state)).catch(()=>{});
    if(action==='close'&&bridgeClose())return;
    if(!hostRpc)return;
    try{
      const result=await hostWindow(action);
      if(result?.ok)setNativeState(result.value);
    }catch{}
  };
  return h(React.Fragment,null,h('div',{className:'acid-mac-native-slot','aria-hidden':true}),h('header',{className:'acid-masthead','data-acid-hud':'','data-native-controls':native?'true':'false','data-acid-masthead-actions':'','data-acid-caption':winChrome?'':undefined,'aria-label':'DeepSeek Harness'},
    h('div',{className:'acid-wordmark'},h('button',{type:'button',className:'acid-brand-home','aria-label':'DeepSeek Harness',onClick:props.goHome,onContextMenu:native?.menu?event=>{event.preventDefault();native.menu('application',event.clientX,event.clientY).catch(()=>{});}:undefined},h(SkinSymbol,{className:'acid-brand-symbol'}),h('span',{className:'acid-wordmark-svg',dangerouslySetInnerHTML:{__html:MASTHEAD}}))),
    h('div',{className:'acid-menus'},
      h('button',{type:'button','aria-haspopup':'dialog',onClick:()=>setPaletteOpen(true)},h('span',{className:'acid-hud-serial','aria-hidden':true},'01'),h('span',{className:'acid-hud-icon',dangerouslySetInnerHTML:{__html:HUD_ICONS.palette}}),h('span',{className:'acid-hud-key'},props.t('cs.key'))),
      h('button',{type:'button',title:props.t('sidebarStyle'),'aria-pressed':classic,onClick:()=>props.setSidebarStyle(classic?'next':'classic')},h('span',{className:'acid-hud-serial','aria-hidden':true},'02'),h('span',{className:'acid-hud-icon',dangerouslySetInnerHTML:{__html:HUD_ICONS.workspace}}),h('span',{className:'acid-hud-key'},props.t('workspace')))),
    h('button',{ref:context,type:'button',className:'acid-context workspace-display','data-acid-identity':accent||undefined,style:accent?{'--acid-ws-context':accent,'--acid-ws-context-fore':foreground(accent)}:undefined,onClick:()=>setPicker(true),disabled:items.length===0,'aria-label':props.t('workspace')},
      h('span',{className:'workspace-counter'},h('strong',{className:'acid-context-number workspace-index',id:'workspace-index'},'—')),
      h('span',{className:'workspace-detail'},h('span',{className:'acid-meta'},'ACTIVE WORKSPACE'),h('span',{className:'workspace-name-slot'},h('span',{className:'acid-context-title',id:'workspace-name',title:workspace?.title},props.t('none'))),shownItem?.path?h('span',{className:'acid-context-path',title:shownItem.path},shownItem.path):null),
      shownId&&marks[shownId]?h('span',{className:'acid-context-mark','aria-hidden':true},h(WorkspaceMark,{mark:marks[shownId],state:activity[shownId]}),h('span',{dangerouslySetInnerHTML:{__html:HUD_REGISTRATION}})):null,
      h('span',{className:'acid-workspace-arrow','aria-hidden':true},'↗')),
    h('div',{className:'acid-hud'},
      h('div',{className:'acid-hud-fields'},
        ...[['SESSIONS',hudCount(shownItem?.sessionIds?.length??0)],['RUNNING',hudCount(running)],['WAITING',hudCount(waiting)],['TOKENS · TODAY',todayTokens(tokenView)]].map(([label,value])=>h('span',{key:label,className:'acid-hud-field'},h('span',null,label),h('b',null,value)))),
      h('div',{className:'acid-hud-ops'},h('span',{className:'acid-hud-label'},'OPS'),
        ops.length?ops.slice(0,4).map(id=>{
          const state=activity[id],number=formatWorkspaceIndex(numbers[id]??1),name=workspaceLabel(items.find(item=>String(item.workspaceId)===id));
          return h('button',{key:id,type:'button',className:'acid-hud-op','data-state':state,style:{'--acid-ws-id':identity[id]},title:`${number} ${name} · ${props.t(`ws.${state}`)}`,'aria-label':`${number} ${name} · ${props.t(`ws.${state}`)}`,onClick:()=>{
            if(id===workspace?.workspaceId){props.goHome();return;}
            props.motion()?.captureStage();props.pickWorkspace(id);
          }},h(WorkspaceMark,{mark:marks[id],state,className:'acid-hud-op-mark'}),h('span',{className:'acid-hud-op-text'},h('b',null,number),h('span',null,HUD_OP_LABEL[state])));
        }):h('span',{className:'acid-hud-quiet'},'ALL QUIET'),
        ops.length>4?h('span',{className:'acid-hud-more'},`+${ops.length-4}`):null)),
    winChrome?h('div',{className:'acid-window-controls','data-acid-chrome':'vertical','data-acid-mac':macCaption&&!native?'true':undefined},
      // On macOS the desktop bridge offers no minimize or zoom channel at all, so those two
      // buttons are present but disabled rather than silently dead. Closing is wired, because
      // the bridge does expose exactly that one operation.
      h('button',{type:'button','aria-label':'最小化',title:'最小化',onClick:()=>windowAction('minimize')},'−'),
      h('button',{type:'button','aria-label':nativeState?.maximized?'还原':'最大化',title:nativeState?.maximized?'还原':'最大化',onClick:()=>windowAction('maximize')},nativeState?.maximized?'▣':'□'),
      h('button',{type:'button','aria-label':'关闭',title:'关闭',onClick:()=>windowAction('close')},'×')):null),
    appearance.sidebarStyle==='classic'?h(WorkspaceRail,{items:ordered,numbers,workspaceId:workspace?.workspaceId,t:props.t,colors:appearance.workspaceColors,onColor:setColorTarget,onPick:id=>{
      if(id===workspace?.workspaceId){props.goHome();return;}
      props.motion()?.captureStage();props.pickWorkspace(id);
    }}):null,
    appearance.sidebarStyle!=='classic'?h(SidebarNext,{items,numbers,workspaceId:workspace?.workspaceId,colors:appearance.workspaceColors,colorSet:appearance.colorSet,onColor:props.setWorkspaceColor,t:props.t,motion:props.motion,toggleSidebar:props.toggleSidebar,statusSource:props.statusSource,onPick:id=>{
      if(id===workspace?.workspaceId){props.goHome();return;}
      props.motion()?.captureStage();props.pickWorkspace(id);
    }}):null,
    paletteOpen?h(NativeDialog,{title:props.t('cs.title'),className:'acid-cs-dialog',onClose:()=>setPaletteOpen(false)},props.updateAppearance?h(ColorSystem,{t:props.t,appearance,updateAppearance:props.updateAppearance,items:ordered,numbers,identity,marks,activity,setWorkspaceColor:props.setWorkspaceColor}):h(props.paletteSettings,{t:props.t,prefix:'acid-masthead-palette'})):null,
    picker?h(NativeDialog,{title:props.t('workspace'),className:'acid-workspace-dialog',onClose:()=>setPicker(false)},...ordered.map((item,i)=>{
      // Every row keeps its native pick target and gains the one thing the classic layout never
      // had: a swatch that opens the colour field for that workspace. The swatch is a sibling, not
      // a child, because a button inside a button is invalid and swallows the outer click.
      const id=String(item.workspaceId),number=formatWorkspaceIndex(numbers[id]??i+1),name=item.title||item.name||item.path?.split(/[\\/]/).filter(Boolean).at(-1)||props.t('none');
      return h('div',{key:item.workspaceId,className:'acid-workspace-entry',style:{'--acid-ws-id':identity[id]}},
        h('button',{type:'button',className:'acid-workspace-option','data-acid-workspace':item.workspaceId,'aria-pressed':workspace?.workspaceId===id,onClick:()=>{setPicker(false);props.pickWorkspace(item.workspaceId);}},h('span',null,number),h('strong',null,name),h('span',{'aria-hidden':true},workspace?.workspaceId===id?'↗':'+')),
        h('button',{type:'button',className:'acid-workspace-swatch','data-workspace-color':id,'data-acid-ws-picked':appearance.workspaceColors?.[id]?'':'',style:{'--acid-ws-id':identity[id]},title:`${copy.current('ws.color')} · ${number} ${name}`,'aria-label':`${copy.current('ws.color')} · ${number} ${name}`,'aria-haspopup':'dialog','aria-expanded':colorTarget===id,onClick:()=>setColorTarget(current=>current===id?null:id)}));
    })):null,
    colorTarget!=null?h(NativeDialog,{title:`${copy.current('ws.color')} · ${items.filter(entry=>String(entry.workspaceId)===colorTarget).map(entry=>entry.title||entry.name||entry.path?.split(/[\\/]/).filter(Boolean).at(-1))[0]||''}`,className:'acid-workspace-dialog',onClose:()=>setColorTarget(null)},
      h('div',{className:'acid-workspace-color',style:{'--acid-ws-id':identity[colorTarget]}},
        h(ColorField,{field:'ws.color',prefix:`acid-ws-${colorTarget}`,value:identity[colorTarget]||IDENTITY_COLORS[0],t:props.t,onColor:color=>props.setWorkspaceColor(colorTarget,color)}),
        h('button',{type:'button',className:'acid-workspace-color-reset',disabled:!appearance.workspaceColors?.[colorTarget],onClick:()=>props.setWorkspaceColor(colorTarget,null)},props.t('ws.color.reset')))):null);
}
