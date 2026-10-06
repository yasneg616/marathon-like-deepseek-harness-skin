function SkinSymbol({className=''}){return h('svg',{className,viewBox:'0 0 96 96','aria-hidden':true,dangerouslySetInnerHTML:{__html:SYMBOL}});}
function HeroMark(){return h(SkinSymbol,{className:'acid-hero-mark'});}
function Footer({wide}){return wide?h('div',{className:'acid-sidebar-cut','aria-hidden':true},...[0,1,2,3,4].map(i=>h('span',{key:i}))):null;}
function SettingsHeader({t}){return h('strong',{className:'acid-settings-title'},t('settings'));}

function NativeDialog({title,children,onClose,className=''}){
  const ref=React.useRef(null),alive=React.useRef(true);
  const close=()=>{const finish=()=>{if(alive.current)onClose();};if(ref.current&&activeAcceptedMotion)activeAcceptedMotion.closeSurface(ref.current,finish,'dialog');else finish();};
  React.useEffect(()=>{alive.current=true;const dialog=ref.current;dialog.showModal();return()=>{alive.current=false;if(dialog.open)dialog.close();};},[]);
  return h('dialog',{ref,className:'acid-dialog '+className,onCancel:event=>{event.preventDefault();close();},onClose:()=>{if(alive.current)onClose();},onClick:event=>{if(event.target===ref.current){const rect=ref.current.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)close();}},'aria-label':title},
    h('div',{className:'acid-dialog-heading'},h('h2',null,title),h('button',{type:'button','aria-label':'关闭',onClick:close},'×')),children);
}

function WorkspaceRailButtons({items,workspaceId,onPick,t}){
  if(!items.length)return null;
  return h('nav',{className:'acid-workspace-rail','aria-label':t('workspace')},...items.map((item,i)=>{
    const number=formatWorkspaceIndex(i+1),name=item.title||item.name||item.path?.split(/[\\/]/).filter(Boolean).at(-1)||t('none');
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
      const frame=[...document.querySelectorAll('.BynINW_frame')].find(node=>!node.closest('[data-acid-motion-owned]'));
      const sidebar=frame?.querySelector('.BynINW_sidebarCol');
      if(frame!==observedFrame||sidebar!==observedSidebar){
        observer.disconnect();observedFrame=frame;observedSidebar=sidebar;
        if(frame){observer.observe(frame,{attributes:true,attributeFilter:['data-sidebar-collapsed']});observer.observe(sidebar??frame,{childList:true,subtree:true});}
        else observer.observe(document.body,{childList:true,subtree:true});
      }
      // The collapsed native browser keeps this list area empty. Leave its
      // add/search controls, wide list and React-owned children in place.
      const next=frame?.hasAttribute('data-sidebar-collapsed')?sidebar?.querySelector('[data-slot="sidebar.workspaces"] ._9lTDKa_listArea'):null;
      setTarget(previous=>previous===next?previous:next??null);
    };
    sync();return()=>observer.disconnect();
  },[]);
  return target?createPortal(h(WorkspaceRailButtons,props),target):null;
}

function Masthead(props){
  const items=props.useWorkspaces(state=>state.items);
  const current=props.useSessions(state=>Object.values(state.byId).find(session=>(session.retainedBy?.mainView??0)>0)?.id);
  const panel=props.usePanelInfo(state=>state.activePanelId),workspace=workspaceContext(items,current);
  const context=React.useRef(null),previous=React.useRef(null);
  const [picker,setPicker]=React.useState(false),[nativeState,setNativeState]=React.useState(null);
  const appearance=props.useAppearance(),native=window.dshDesktop?.windowControls;
  React.useEffect(()=>{if(!native)return;let alive=true;const refresh=()=>native.invoke('state').then(state=>{if(alive)setNativeState(state);}).catch(()=>{});refresh();window.addEventListener('resize',refresh);return()=>{alive=false;window.removeEventListener('resize',refresh);};},[native]);
  React.useLayoutEffect(()=>{
    const last=previous.current;
    if(workspace)updateWorkspaceHeader(context.current,workspace.index,workspace.title,props.getMotion());
    else{cancelWorkspaceHeader();context.current.querySelector('#workspace-index').textContent='—';delete context.current.querySelector('#workspace-index').dataset.ordinal;context.current.querySelector('#workspace-name').textContent=props.t('none');context.current.setAttribute('aria-label',props.t('workspace'));}
    if(last&&workspace&&last.workspaceId!==workspace.workspaceId)props.motion()?.revealStage('workspace',workspace.index>(last.index??0)?1:-1);
    else if(last&&last.panel!==panel)props.motion()?.revealStage('page');
    previous.current={...workspace,panel};syncWorkspaceOrdinals(items);
  },[workspace?.index,workspace?.workspaceId,workspace?.title,panel,items,appearance]);
  React.useEffect(()=>{const observer=new MutationObserver(()=>syncWorkspaceOrdinals(items));observer.observe(document.querySelector('[data-slot="sidebar.workspaces"]')||document.body,{childList:true,subtree:true});return()=>observer.disconnect();},[items]);
  React.useEffect(()=>()=>cancelWorkspaceHeader(),[]);
  const windowAction=action=>native.invoke(action).then(state=>setNativeState(state)).catch(()=>{});
  const openMenu=(name,event)=>{const rect=event.currentTarget.getBoundingClientRect();native.menu(name,rect.left,rect.bottom).catch(()=>{});};
  return h(React.Fragment,null,h('header',{className:'acid-masthead','data-native-controls':native?'true':'false','aria-label':'DeepSeek Harness'},
    h('div',{className:'acid-wordmark'},h('button',{type:'button',className:'acid-sidebar-toggle','aria-label':'展开／收起左侧栏',onClick:props.toggleSidebar},h('svg',{viewBox:'0 0 20 20','aria-hidden':true},h('path',{d:'M3 3h14v14H3ZM8 3v14'}))),
      h('button',{type:'button',className:'acid-brand-home','aria-label':'DeepSeek Harness',onClick:props.goHome},h(SkinSymbol,{className:'acid-brand-symbol'}),h('span',{className:'acid-wordmark-svg',dangerouslySetInnerHTML:{__html:MASTHEAD}}))),
    native?h('div',{className:'acid-menus'},h('button',{type:'button',onClick:event=>openMenu('application',event)},h('span',{'aria-hidden':true},'01'),document.documentElement.lang.startsWith('zh')?'应用':'Application'),h('button',{type:'button',onClick:event=>openMenu('edit',event)},h('span',{'aria-hidden':true},'02'),document.documentElement.lang.startsWith('zh')?'编辑':'Edit')):null,
    h('button',{ref:context,type:'button',className:'acid-context workspace-display',onClick:()=>setPicker(true),disabled:items.length===0,'aria-label':props.t('workspace')},
      h('span',{className:'workspace-counter'},h('strong',{className:'acid-context-number workspace-index',id:'workspace-index'},'—')),
      h('span',{className:'workspace-detail'},h('span',{className:'acid-meta'},'ACTIVE WORKSPACE'),h('span',{className:'workspace-name-slot'},h('span',{className:'acid-context-title',id:'workspace-name',title:workspace?.title},props.t('none')))),h('span',{className:'acid-workspace-arrow','aria-hidden':true},'↗')),
    native?h('div',{className:'acid-window-controls'},h('button',{type:'button','aria-label':'最小化',title:'最小化',onClick:()=>windowAction('minimize')},'−'),h('button',{type:'button','aria-label':nativeState?.maximized?'还原':'最大化',title:nativeState?.maximized?'还原':'最大化',onClick:()=>windowAction('maximize')},nativeState?.maximized?'▣':'□'),h('button',{type:'button','aria-label':'关闭',title:'关闭',onClick:()=>windowAction('close')},'×')):null),
    h(WorkspaceRail,{items,workspaceId:workspace?.workspaceId,t:props.t,onPick:id=>{
      if(id===workspace?.workspaceId){props.goHome();return;}
      props.motion()?.captureStage();props.pickWorkspace(id);
    }}),
    picker?h(NativeDialog,{title:props.t('workspace'),className:'acid-workspace-dialog',onClose:()=>setPicker(false)},...items.map((item,i)=>h('button',{key:item.workspaceId,type:'button',className:'acid-workspace-option','data-acid-workspace':item.workspaceId,'aria-pressed':workspace?.workspaceId===item.workspaceId,onClick:()=>{setPicker(false);props.pickWorkspace(item.workspaceId);}},h('span',null,formatWorkspaceIndex(i+1)),h('strong',null,item.title||item.path?.split(/[\\/]/).filter(Boolean).at(-1)||props.t('none')),h('span',{'aria-hidden':true},workspace?.workspaceId===item.workspaceId?'↗':'+')))):null);
}
