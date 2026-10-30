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

function WorkspaceRailButtons({items,numbers,workspaceId,onPick,t}){
  if(!items.length)return null;
  return h('nav',{className:'acid-workspace-rail','aria-label':t('workspace')},...items.map((item,i)=>{
    const number=formatWorkspaceIndex(numbers?.[String(item.workspaceId)]??i+1),name=item.title||item.name||item.path?.split(/[\\/]/).filter(Boolean).at(-1)||t('none');
    return h('button',{key:item.workspaceId,type:'button',className:'acid-rail-workspace','data-acid-workspace':item.workspaceId,
      title:`${number} ${name}`,'aria-label':`${t('workspace')} ${number} ${name}`,'aria-pressed':workspaceId===item.workspaceId,
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
function Masthead(props){
  const items=props.useWorkspaces(state=>state.items);
  const current=props.useSessions(state=>Object.values(state.byId).find(session=>(session.retainedBy?.mainView??0)>0)?.id);
  const panel=props.usePanelInfo(state=>state.activePanelId),numbers=workspaceNumbers(items),ordered=sortByNumber(items,numbers),workspace=workspaceContext(items,current,numbers);
  const appearance=props.useAppearance();
  const identityColor=workspace?workspaceIdentity(items.map(item=>String(item.workspaceId)),numbers,appearance.workspaceColors)[String(workspace.workspaceId)]:null;
  const context=React.useRef(null),previous=React.useRef(null);
  const [picker,setPicker]=React.useState(false),[nativeState,setNativeState]=React.useState(null);
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
    if(identityColor){root.style.setProperty('--acid-ws-context',identityColor);root.style.setProperty('--acid-ws-context-fore',foreground(identityColor));}
    else{root.style.removeProperty('--acid-ws-context');root.style.removeProperty('--acid-ws-context-fore');}
    const last=previous.current;
    if(workspace)updateWorkspaceHeader(context.current,workspace.index,workspace.title,props.getMotion());
    else{cancelWorkspaceHeader();context.current.querySelector('#workspace-index').textContent='—';delete context.current.querySelector('#workspace-index').dataset.ordinal;context.current.querySelector('#workspace-name').textContent=props.t('none');context.current.setAttribute('aria-label',props.t('workspace'));}
    if(last&&workspace&&last.workspaceId!==workspace.workspaceId)props.motion()?.revealStage('workspace',workspace.index>(last.index??0)?1:-1);
    else if(last&&last.panel!==panel)props.motion()?.revealStage('page');
    previous.current={...workspace,panel};syncWorkspaceOrdinals(items,workspaceNumbers(items));
  },[workspace?.index,workspace?.workspaceId,workspace?.title,panel,items,appearance,identityColor]);
  React.useEffect(()=>{const observer=new MutationObserver(()=>syncWorkspaceOrdinals(items,workspaceNumbers(items)));observer.observe(document.querySelector('[data-slot="sidebar.workspaces"]')||document.body,{childList:true,subtree:true});return()=>observer.disconnect();},[items]);
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
  const openMenu=(name,event)=>{if(!native?.menu)return;const rect=event.currentTarget.getBoundingClientRect();native.menu(name,rect.left,rect.bottom).catch(()=>{});};
  return h(React.Fragment,null,h('div',{className:'acid-mac-native-slot','aria-hidden':true}),h('header',{className:'acid-masthead','data-native-controls':native?'true':'false','aria-label':'DeepSeek Harness'},
    h('div',{className:'acid-wordmark'},h('button',{type:'button',className:'acid-brand-home','aria-label':'DeepSeek Harness',onClick:props.goHome},h(SkinSymbol,{className:'acid-brand-symbol'}),h('span',{className:'acid-wordmark-svg',dangerouslySetInnerHTML:{__html:MASTHEAD}}))),
    native?h('div',{className:'acid-menus'},h('button',{type:'button',onClick:event=>openMenu('application',event)},h('span',{'aria-hidden':true},'01'),document.documentElement.lang.startsWith('zh')?'应用':'Application'),h('button',{type:'button',onClick:event=>openMenu('edit',event)},h('span',{'aria-hidden':true},'02'),document.documentElement.lang.startsWith('zh')?'编辑':'Edit')):null,
    h('button',{ref:context,type:'button',className:'acid-context workspace-display','data-acid-identity':identityColor||undefined,style:identityColor?{'--acid-ws-context':identityColor,'--acid-ws-context-fore':foreground(identityColor)}:undefined,onClick:()=>setPicker(true),disabled:items.length===0,'aria-label':props.t('workspace')},
      h('span',{className:'workspace-counter'},h('strong',{className:'acid-context-number workspace-index',id:'workspace-index'},'—')),
      h('span',{className:'workspace-detail'},h('span',{className:'acid-meta'},'ACTIVE WORKSPACE'),h('span',{className:'workspace-name-slot'},h('span',{className:'acid-context-title',id:'workspace-name',title:workspace?.title},props.t('none')))),h('span',{className:'acid-workspace-arrow','aria-hidden':true},'↗')),
    winChrome?h('div',{className:'acid-window-controls','data-acid-chrome':'vertical','data-acid-mac':macCaption&&!native?'true':undefined},
      // On macOS the desktop bridge offers no minimize or zoom channel at all, so those two
      // buttons are present but disabled rather than silently dead. Closing is wired, because
      // the bridge does expose exactly that one operation.
      h('button',{type:'button','aria-label':'最小化',title:'最小化',onClick:()=>windowAction('minimize')},'−'),
      h('button',{type:'button','aria-label':nativeState?.maximized?'还原':'最大化',title:nativeState?.maximized?'还原':'最大化',onClick:()=>windowAction('maximize')},nativeState?.maximized?'▣':'□'),
      h('button',{type:'button','aria-label':'关闭',title:'关闭',onClick:()=>windowAction('close')},'×')):null),
    appearance.sidebarStyle==='classic'?h(WorkspaceRail,{items:ordered,numbers,workspaceId:workspace?.workspaceId,t:props.t,onPick:id=>{
      if(id===workspace?.workspaceId){props.goHome();return;}
      props.motion()?.captureStage();props.pickWorkspace(id);
    }}):null,
    appearance.sidebarStyle!=='classic'?h(SidebarNext,{items,numbers,workspaceId:workspace?.workspaceId,colors:appearance.workspaceColors,onColor:props.setWorkspaceColor,t:props.t,motion:props.motion,toggleSidebar:props.toggleSidebar,statusSource:props.statusSource,onPick:id=>{
      if(id===workspace?.workspaceId){props.goHome();return;}
      props.motion()?.captureStage();props.pickWorkspace(id);
    }}):null,
    picker?h(NativeDialog,{title:props.t('workspace'),className:'acid-workspace-dialog',onClose:()=>setPicker(false)},...ordered.map((item,i)=>h('button',{key:item.workspaceId,type:'button',className:'acid-workspace-option','data-acid-workspace':item.workspaceId,'aria-pressed':workspace?.workspaceId===item.workspaceId,onClick:()=>{setPicker(false);props.pickWorkspace(item.workspaceId);}},h('span',null,formatWorkspaceIndex(numbers[String(item.workspaceId)]??i+1)),h('strong',null,item.title||item.path?.split(/[\\/]/).filter(Boolean).at(-1)||props.t('none')),h('span',{'aria-hidden':true},workspace?.workspaceId===item.workspaceId?'↗':'+')))):null);
}
