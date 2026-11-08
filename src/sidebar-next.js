// NEXT sidebar: staggered workspace strips, hover flyout, identity colours.
// Native rows stay mounted and own every action; this layer only arranges
// them and proxies interaction, so ordering, menus and drag reorder stay native.
const IDENTITY_PREF=`${ID}:workspace-identity`;
const WORKSPACE_COLORS_PREF=`${ID}:workspace-colors`;
function normalizeWorkspaceColors(value){
  return Object.fromEntries(Object.entries(value&&typeof value==='object'&&!Array.isArray(value)?value:{}).flatMap(([id,color])=>{
    const hex=normalizeHex(color,null);return hex?[[id,hex]]:[];
  }));
}
// Approved v3 order: slot k keeps its persisted index, so existing workspaces
// are re-mapped onto this palette by the slot they were already given.
const IDENTITY_COLORS=Object.freeze(['#C6F500','#FF2D78','#FF6A1A','#2B45FF','#9B4DFF','#00D1E0','#FFE600','#00F5A0','#FF9F1C','#FF4FD8']);
function assignIdentity(state,ids){
  const next={next:Number.isSafeInteger(state?.next)&&state.next>=0?state.next:0,map:{...(state&&typeof state.map==='object'?state.map:{})}};
  if(state?.v)next.v=state.v;
  let changed=false;
  for(const id of ids){
    const current=next.map[id];
    if(Number.isInteger(current)&&current>=0&&current<IDENTITY_COLORS.length)continue;
    next.map[id]=next.next%IDENTITY_COLORS.length;next.next+=1;changed=true;
  }
  return {state:next,changed};
}
function loadIdentity(){try{return JSON.parse(localStorage.getItem(IDENTITY_PREF))||{};}catch{return {};}}
// v3 palette: one-time re-map of existing workspaces onto the approved order
// by their workspace number (001 lime, 002 pink, ...). After that the colour
// is persisted per workspace again and new workspaces take the next slot.
const IDENTITY_VERSION=3;
function migrateIdentity(state,ids,numbers){
  if(state?.v===IDENTITY_VERSION||!ids.length||!numbers||!ids.every(id=>numbers[id]))return {state,migrated:false};
  const ordered=[...ids].sort((a,b)=>numbers[a]-numbers[b]);
  const fresh=assignIdentity({next:0,map:{}},ordered).state;fresh.v=IDENTITY_VERSION;
  return {state:fresh,migrated:true};
}
function workspaceIdentity(ids,numbers,colors={}){
  const migration=migrateIdentity(loadIdentity(),ids,numbers);
  const result=assignIdentity(migration.state,ids),state=result.state,changed=result.changed||migration.migrated;
  if(changed)try{localStorage.setItem(IDENTITY_PREF,JSON.stringify(state));}catch{}
  return Object.fromEntries(ids.map(id=>[id,normalizeHex(colors[id],IDENTITY_COLORS[state.map[id]])]));
}
// Keep the approved sheet's ink; custom colours select a readable foreground.
const STRIP_INK='#0B0C0D';
function identityInk(color,custom=false){return custom?foreground(color):STRIP_INK;}
// Stable, append-style numbering. The skin keeps its own ordered list of
// workspace ids: the first run adopts the native order (so nothing visibly
// renumbers), new workspaces are appended (number = count + 1), deleted ones
// drop out and the rest close the gap in order. A reorder the user performs
// (native drag, or dragging strips) rewrites the order, so numbers always
// follow what is on screen.
const ORDER_PREF=`${ID}:workspace-order`;
function rankWorkspaces(stored,ids,adopt=false){
  const present=new Set(ids);
  let order=[...new Set((Array.isArray(stored)?stored:[]).filter(id=>typeof id==='string'))];
  if(ids.length){
    if(adopt)order=[...ids];
    else{order=order.filter(id=>present.has(id));for(const id of ids)if(!order.includes(id))order.push(id);}
  }
  const numbers={};let n=0;
  for(const id of order)if(present.has(id))numbers[id]=++n;
  return {order,numbers};
}
function moveInOrder(order,id,beforeId){
  const next=order.filter(entry=>entry!==id);
  const at=beforeId==null?-1:next.indexOf(beforeId);
  if(at<0)next.push(id);else next.splice(at,0,id);
  return next;
}
let workspaceAdoptUntil=0;
function markWorkspaceReorder(){workspaceAdoptUntil=Date.now()+5000;}
function loadWorkspaceOrder(){try{const value=JSON.parse(localStorage.getItem(ORDER_PREF));return Array.isArray(value)?value:null;}catch{return null;}}
function saveWorkspaceOrder(order){try{localStorage.setItem(ORDER_PREF,JSON.stringify(order));}catch{}}
function workspaceNumbers(items){
  const ids=(items||[]).map(item=>String(item.workspaceId));
  const stored=loadWorkspaceOrder();
  let adopt=false;
  // Only a pure permutation right after a native drag is adopted.
  if(stored&&workspaceAdoptUntil>Date.now()){
    const known=stored.filter(id=>ids.includes(id));
    if(known.length===ids.length&&known.join('|')!==ids.join('|')){adopt=true;workspaceAdoptUntil=0;}
  }
  const {order,numbers}=rankWorkspaces(stored,ids,adopt);
  if(ids.length&&JSON.stringify(order)!==JSON.stringify(stored))saveWorkspaceOrder(order);
  return numbers;
}
function moveWorkspace(id,beforeId){
  const order=moveInOrder(loadWorkspaceOrder()||[],String(id),beforeId==null?null:String(beforeId));
  saveWorkspaceOrder(order);return order;
}
// A drag inside the native tree never reaches the skin through React state, and the drop listeners
// that read it belong to the colour-strip layout. The rendered list is therefore the only witness
// of a reorder that the classic layout has: when a settled list carries exactly the ids the stored
// order already knows, in a different order, that is a reorder the user performed on screen and it
// is adopted so the numbers follow the list. A list that gained or lost an id is a create or a
// delete instead, and keeps the append-style numbering above, so the id sets must match first.
function nativeWorkspaceOrder(){
  return [...document.querySelectorAll('[data-slot="sidebar.workspaces"] [data-row-key^="workspace:"]')].map(row=>row.dataset.rowKey.slice(10));
}
function adoptNativeWorkspaceOrder(items){
  const ids=(items||[]).map(item=>String(item.workspaceId));
  if(ids.length<2)return false;
  const order=nativeWorkspaceOrder();
  if(order.length!==ids.length)return false;
  const rendered=new Set(order);
  if(rendered.size!==order.length||!ids.every(id=>rendered.has(id)))return false;
  const stored=loadWorkspaceOrder();
  if(!stored)return false;
  const known=stored.filter(id=>rendered.has(id));
  if(known.length!==ids.length||known.join('|')===order.join('|'))return false;
  saveWorkspaceOrder(order);
  return true;
}

// Placement on a half-strip grid (one row = half a strip): 001 starts the
// left column, the command block fills the first half-row on the right, so
// 002 sits exactly half a strip lower and the columns interlock.
function stripPlacement(index){
  return {column:index%2+1,row:index+1,span:2,lead:index===0};
}

// Strip activity from the native per-session status store: a pending approval/answer outranks a
// running turn, which outranks an unread completion. Sessions are matched by id; no content is read.
const WORKSPACE_ACTIVITY=Object.freeze(['attention','working','done']);
function sessionActivityRank(status){
  if(status?.pendingInteraction!==undefined)return 0;
  if(status?.running===true)return 1;
  if(status?.completionUnread===true)return 2;
  return WORKSPACE_ACTIVITY.length;
}
function workspaceActivity(items,statuses){
  const out={};
  for(const item of items||[]){
    let rank=WORKSPACE_ACTIVITY.length;
    for(const id of item?.sessionIds||[]){
      rank=Math.min(rank,sessionActivityRank(statuses?.get?.(id)));
      if(rank===0)break;
    }
    if(rank<WORKSPACE_ACTIVITY.length)out[String(item.workspaceId)]=WORKSPACE_ACTIVITY[rank];
  }
  return out;
}
// The status service arrives through a deferred inject; until then strips simply show no activity.
const EMPTY_STATUS=new Map();
function createStatusRelay(){
  const listeners=new Set();let source=null,release=null;
  const emit=()=>{for(const listener of listeners)listener();};
  return {
    getSnapshot:()=>source?.getSnapshot?.()??EMPTY_STATUS,
    subscribe(listener){listeners.add(listener);return()=>listeners.delete(listener);},
    attach(next){release?.();release=null;source=next?.getSnapshot&&next?.subscribe?next:null;if(source)release=source.subscribe(emit);emit();}
  };
}
const idleStatusSource={getSnapshot:()=>EMPTY_STATUS,subscribe:()=>()=>{}};

function fallbackName(item){return item?.title||item?.name||item?.path?.split(/[\\/]/).filter(Boolean).at(-1)||'—';}
function nextSidebarList(){
  const frame=[...document.querySelectorAll(moduleSelector('.mP3x-q_frame'))].find(node=>!node.closest('[data-acid-motion-owned]'));
  return frame?.querySelector(moduleSelector('[data-slot="sidebar.workspaces"] .GAkraW_list'))??null;
}
function nativeCommands(){
  const root=document.querySelector(moduleSelector('.mP3x-q_frame .wtg9ga_root'));
  if(!root)return [];
  const panels=[...root.querySelectorAll(moduleSelector('.wtg9ga_panelList .wtg9ga_panelRow'))];
  return [root.querySelector(moduleSelector('.wtg9ga_newSession')),...panels].filter(Boolean).slice(0,3);
}
function sessionRows(group){
  return [...group.querySelectorAll('[data-row-key^="session:"][role="treeitem"]')].map(row=>({
    key:row.dataset.rowKey,row,title:row.querySelector(moduleSelector('.wnFoaW_title'))?.textContent||'—',time:row.querySelector(moduleSelector('.wnFoaW_time'))?.textContent||'',selected:row.getAttribute('aria-selected')==='true'
  }));
}

const COMMAND_ICONS={
  new:'M8 3v10M3 8h10',
  plugins:'M3 5.5h2.6a1.6 1.6 0 1 1 3.2 0H11.5V8a1.6 1.6 0 1 1 0 3.2V13.5H8.8a1.6 1.6 0 1 0-3.2 0H3V10.8a1.6 1.6 0 1 0 0-3.2Z',
  automations:'M8 2.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 1 0 0-11ZM8 5v3.2l2.2 1.4'
};
function CommandStack({tick}){
  const commands=nativeCommands();
  return h('div',{className:'acid-ws-commands',role:'group','aria-label':'commands','data-tick':tick},...commands.map((button,i)=>{
    const kind=['new','plugins','automations'][i];
    const label=button.querySelector(moduleSelector('.wtg9ga_newSessionLabel,.wtg9ga_panelTitle'))?.textContent||button.getAttribute('aria-label')||kind;
    const active=button.classList.contains(moduleClass('wtg9ga_panelActive'));
    return h('button',{key:i,type:'button',className:'acid-ws-command','data-command':kind,'aria-pressed':i?active:undefined,'aria-label':label,title:label,
      onClick:()=>{button.click();}},h('svg',{width:16,height:16,viewBox:'0 0 16 16',fill:'none',stroke:'currentColor',strokeWidth:1.3,strokeLinecap:'square','aria-hidden':true},h('path',{d:COMMAND_ICONS[kind]})));
  }));
}
// Workspace-list tools (search, view options, add workspace) do not fit the
// 113px rail; they are proxied from the MORE drawer. Natives stay mounted.
function DrawerTools(){
  const [,force]=React.useState(0);
  React.useEffect(()=>{const id=setTimeout(()=>force(x=>x+1),400);return()=>clearTimeout(id);},[]);
  const buttons=[...document.querySelectorAll(moduleSelector('.mP3x-q_frame [data-slot="sidebar.workspaces"] .GAkraW_sectionHeader button'))];
  if(!buttons.length)return null;
  return h('div',{className:'acid-drawer-tools',role:'group'},...buttons.map((button,i)=>{
    const label=button.getAttribute('aria-label')||'';
    return h('button',{key:i,type:'button',className:'acid-drawer-tool','aria-label':label,title:label,onClick:()=>button.click()},
      h('span',{className:'acid-drawer-tool-icon','aria-hidden':true,dangerouslySetInnerHTML:{__html:button.querySelector('svg')?.outerHTML||''}}),h('span',null,label));
  }));
}

// The native drag state is only needed for a committed drop. Its rows are hidden,
// so use their midpoint to communicate the side chosen on the visible proxy.
function dropNativeSession(source,target,side){
  const dataTransfer=new DataTransfer();
  const dispatch=(row,type,clientY=0)=>row.dispatchEvent(new DragEvent(type,{bubbles:true,cancelable:true,dataTransfer,clientY}));
  flushSync(()=>dispatch(source,'dragstart'));
  try{
    const rect=target.getBoundingClientRect();
    const midpoint=rect.top+rect.height/2;
    dispatch(target,'drop',side==='before'?Math.floor(midpoint)-1:Math.ceil(midpoint));
  }finally{
    dispatch(source,'dragend');
  }
}

function WorkspaceFlyout({state,color,custom,onColor,t,onEnter,onLeave,onClose,motion,statuses=EMPTY_STATUS}){
  const ref=React.useRef(null);
  const [rows,setRows]=React.useState(()=>sessionRows(state.group));
  const dragged=React.useRef(null);
  const [marker,setMarker]=React.useState(null);
  React.useEffect(()=>{
    const refresh=()=>setRows(sessionRows(state.group));refresh();
    const observer=new MutationObserver(refresh);
    observer.observe(state.group,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['aria-selected','aria-expanded','draggable']});
    return()=>observer.disconnect();
  },[state.group]);
  // Reuse the skin's own four-colour wipe, sideways like the sidebar itself.
  React.useLayoutEffect(()=>{if(ref.current)activeAcceptedMotion?.mask(ref.current,{kind:'hover',direction:'left-right'});},[]);
  const place=state.anchor;
  const top=Math.max(8,place.top),bottom=Math.max(8,window.innerHeight-place.bottom);
  const up=top+380>window.innerHeight&&bottom<top;
  const offset=up?bottom:top;
  const style={left:place.left+'px',[up?'bottom':'top']:offset+'px',maxHeight:`min(480px, calc(100vh - ${offset+8}px))`,'--acid-ws-id':color};
  const create=state.group.querySelector(moduleSelector('.wnFoaW_projectRow .wnFoaW_rowActions button[aria-keyshortcuts]'));
  const overflow=state.group.querySelector(':scope > button[data-row-key^="overflow:"]');
  const overflowLabel=overflow?.textContent.trim();
  const expanded=overflow?.getAttribute('aria-expanded')==='true';
  const hidden=!expanded&&overflowLabel?.match(/\d+/)?.[0];
  const open=(entry)=>{motion()?.captureStage();entry.row.click();onClose();};
  const stopDrag=()=>{dragged.current=null;setMarker(null);};
  const dropSide=(event,entry)=>{
    const source=dragged.current,target=entry.row;
    if(!source?.isConnected||!source.draggable||!target.isConnected||source===target)return;
    const group=moduleSelector('.GAkraW_groupSection');
    if(source.closest(group)!==target.closest(group))return;
    const pin=moduleSelector('.wnFoaW_pinIndicator');
    if(Boolean(source.querySelector(pin))!==Boolean(target.querySelector(pin)))return;
    // The native provisional new-session row always stays first.
    if(!entry.time)return 'after';
    const rect=event.currentTarget.getBoundingClientRect();
    return event.clientY<rect.top+rect.height/2?'before':'after';
  };
  return createPortal(h('aside',{ref,className:'acid-ws-flyout','data-acid-motion-owned':'flyout','data-placement':up?'up':'down',style,role:'dialog','aria-label':`${state.number} ${state.name}`,onPointerEnter:onEnter,onPointerLeave:onLeave,onFocus:onEnter,onBlur:event=>{if(!event.currentTarget.contains(event.relatedTarget))onLeave();},onKeyDown:event=>{if(event.key==='Escape'){event.stopPropagation();onClose(true);}}},
    h('header',{className:'acid-ws-fly-head'},
      h('span',{className:'acid-ws-fly-number'},state.number),
      h('span',{className:'acid-ws-fly-title'},h('strong',null,state.name),state.path?h('em',{title:state.path},state.path):null)),
    h('div',{className:'acid-ws-fly-meta'},h('span',null,`CONVERSATIONS ${String(rows.length).padStart(2,'0')}${hidden?` +${hidden}`:''}`),
      create?h('button',{type:'button',className:'acid-ws-fly-new','aria-label':create.getAttribute('aria-label'),title:create.getAttribute('aria-label'),onClick:()=>{motion()?.captureStage();create.click();onClose();}},h('b',{'aria-hidden':true},'+'),'NEW CHAT HERE'):null),
    rows.length?h('div',{className:'acid-ws-fly-list',role:'list'},...rows.map(entry=>{
      const status=WORKSPACE_ACTIVITY[sessionActivityRank(statuses.get(entry.key.slice('session:'.length)))];
      const label=status?t(`ws.${status}`):undefined;
      return h('button',{key:entry.key,type:'button',role:'listitem',className:'acid-ws-fly-row','aria-current':entry.selected?'true':undefined,'aria-description':label,
        draggable:entry.row.draggable,'data-drop-side':marker?.row===entry.row?marker.side:undefined,
        onClick:()=>open(entry),onContextMenu:event=>{event.preventDefault();entry.row.dispatchEvent(new MouseEvent('contextmenu',{bubbles:true,cancelable:true,clientX:event.clientX,clientY:event.clientY,button:2}));},
        onDragStart:event=>{
          if(!entry.row.draggable){event.preventDefault();return;}
          dragged.current=entry.row;
          event.dataTransfer.effectAllowed='move';
          event.dataTransfer.setData('application/x-acid-session',entry.key);
        },
        onDragOver:event=>{
          const side=dropSide(event,entry);
          if(!side)return;
          event.preventDefault();
          event.dataTransfer.dropEffect='move';
          setMarker(current=>current?.row===entry.row&&current.side===side?current:{row:entry.row,side});
        },
        onDragLeave:event=>{
          if(!event.currentTarget.contains(event.relatedTarget))setMarker(current=>current?.row===entry.row?null:current);
        },
        onDrop:event=>{
          const side=dropSide(event,entry);
          if(!side)return;
          event.preventDefault();event.stopPropagation();
          const source=dragged.current;
          stopDrag();
          dropNativeSession(source,entry.row,side);
        },
        onDragEnd:stopDrag},
        h('span',{className:'acid-ws-fly-dot','data-status':status,title:label,'aria-hidden':true}),
        h('span',{className:'acid-ws-fly-name'},entry.title),entry.time?h('span',{className:'acid-ws-fly-time'},entry.time):null);
    })):
      h('p',{className:'acid-ws-fly-empty'},'NO CONVERSATIONS // —'),
    overflowLabel?h('button',{type:'button',className:'acid-ws-fly-overflow','aria-expanded':expanded,onClick:()=>overflow.click()},overflowLabel):null,
    h('div',{className:'acid-ws-color'},
      h('button',{type:'button',className:'acid-ws-color-bar','aria-label':t('ws.color')}),
      h('div',{className:'acid-ws-color-editor'},
        h(ColorField,{field:'ws.color',value:color,t,prefix:`acid-ws-${state.id}`,onColor}),
        h('button',{type:'button',className:'acid-ws-color-reset',disabled:!custom,onClick:()=>onColor(null)},t('ws.color.reset'))))),document.body);
}

function SidebarNext({items,numbers,workspaceId,colors={},onColor,onPick,t,motion,toggleSidebar,statusSource=idleStatusSource}){
  const [list,setList]=React.useState(null),[tick,setTick]=React.useState(0),[fly,setFly]=React.useState(null);
  const timers=React.useRef({}),flyRef=React.useRef(null),expanded=React.useRef(new Set());
  flyRef.current=fly;
  const ids=items.map(item=>String(item.workspaceId));
  const identity=React.useMemo(()=>workspaceIdentity(ids,numbers,colors),[ids.join('|'),JSON.stringify(numbers||{}),colors]);
  const byId=React.useMemo(()=>new Map(items.map((item,i)=>[String(item.workspaceId),{item,index:i}])),[items]);
  const statuses=React.useSyncExternalStore(statusSource.subscribe,statusSource.getSnapshot,statusSource.getSnapshot);
  const activity=React.useMemo(()=>workspaceActivity(items,statuses),[items,statuses]);
  const live=React.useRef({});live.current={identity,byId,onPick,workspaceId,numbers};
  // Locate the native workspace tree in the main frame.
  React.useLayoutEffect(()=>{
    let frame=0,signature='';
    const sync=()=>{
      frame=0;const next=nextSidebarList();setList(previous=>previous===next?previous:next);
      const groups=next?next.querySelectorAll(moduleSelector(':scope > .GAkraW_groupSection')).length:0;
      const value=groups+'|'+(next?.childElementCount??0)+'|'+nativeCommands().map(button=>button.className+(button.textContent||'')).join('/');
      if(value!==signature){signature=value;setTick(x=>x+1);}
    };
    const observer=new MutationObserver(()=>{if(!frame)frame=requestAnimationFrame(sync);});
    observer.observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['class','data-sidebar-collapsed','data-row-key']});
    sync();return()=>{observer.disconnect();if(frame)cancelAnimationFrame(frame);};
  },[]);
  // One sidebar mode only: the wide/rail switch is retired.
  React.useEffect(()=>{
    const block=event=>{if((event.ctrlKey||event.metaKey)&&!event.altKey&&event.key?.toLowerCase()==='b'){event.preventDefault();event.stopImmediatePropagation();}};
    window.addEventListener('keydown',block,true);
    const frame=document.querySelector(moduleSelector('.mP3x-q_frame'));
    let queued=0;
    const expand=()=>{if(frame?.hasAttribute('data-sidebar-collapsed')&&!queued)queued=requestAnimationFrame(()=>{queued=0;if(frame.hasAttribute('data-sidebar-collapsed'))toggleSidebar?.();});};
    const observer=new MutationObserver(expand);
    if(frame)observer.observe(frame,{attributes:true,attributeFilter:['data-sidebar-collapsed']});
    expand();
    return()=>{window.removeEventListener('keydown',block,true);observer.disconnect();if(queued)cancelAnimationFrame(queued);};
  },[]);
  const groups=list?[...list.children].filter(node=>node.classList?.contains(moduleClass('GAkraW_groupSection'))&&node.querySelector(':scope [data-row-key^="workspace:"]')):[];
  const active=groups.length>0;
  React.useLayoutEffect(()=>{
    const root=document.documentElement;
    if(active)root.setAttribute('data-acid-sidebar','next');else root.removeAttribute('data-acid-sidebar');
    return()=>root.removeAttribute('data-acid-sidebar');
  },[active]);
  // Arrange strips and paint identity colours on every render of the tree.
  React.useLayoutEffect(()=>{
    if(!list||!active)return;
    list.setAttribute('data-acid-ws-grid','');
    groups.forEach((group,k)=>{
      const row=group.querySelector('[data-row-key^="workspace:"]'),id=row.dataset.rowKey.slice(10),i=(numbers?.[id]??k+1)-1;
      const place=stripPlacement(i),color=identity[id]||IDENTITY_COLORS[i%IDENTITY_COLORS.length];
      const count=byId.get(id)?.item.sessionIds?.length??sessionRows(group).length;
      group.style.gridColumn=String(place.column);group.style.gridRow=`${place.row} / span ${place.span}`;
      group.style.setProperty('--acid-ws-id',color);group.style.setProperty('--acid-ws-id-fore',identityInk(color,!!colors[id]));
      group.style.setProperty('--acid-ws-fill',Math.min(1,count/12).toFixed(3));
      group.dataset.acidWsStrip=place.lead?'lead':'strip';group.dataset.acidWsCount=row.dataset.acidCount=String(count).padStart(2,'0');
      if(id===String(workspaceId))group.dataset.acidWsActive='';else delete group.dataset.acidWsActive;
      const state=activity[id];if(state)group.dataset.acidWsStatus=state;else delete group.dataset.acidWsStatus;
      // Native rows are not focusable; give each strip a tab stop so focus opens its card.
      if(row.getAttribute('tabindex')!=='0'){row.setAttribute('tabindex','0');row.dataset.acidTab='';}
      row.setAttribute('aria-label',`${formatWorkspaceIndex(i+1)} ${row.querySelector(moduleSelector('.wnFoaW_title'))?.textContent||fallbackName(byId.get(id)?.item)}${state?` · ${t(`ws.${state}`)}`:''}`);
      const item=byId.get(id)?.item,title=row.querySelector(moduleSelector('.wnFoaW_title')),fallback=item?.title||item?.name||item?.path?.split(/[\\/]/).filter(Boolean).at(-1)||'—';
      if(title&&title.dataset.acidFallback!==fallback)title.dataset.acidFallback=fallback;

    });
  },[list,active,identity,byId,numbers,activity,workspaceId,colors,t]);
  React.useEffect(()=>()=>{
    if(!list)return;list.removeAttribute('data-acid-ws-grid');
    for(const group of list.querySelectorAll('[data-acid-ws-strip]')){
      for(const name of ['grid-column','grid-row','--acid-ws-id','--acid-ws-id-fore','--acid-ws-fill'])group.style.removeProperty(name);
      delete group.dataset.acidWsStrip;delete group.dataset.acidWsCount;delete group.dataset.acidWsActive;delete group.dataset.acidWsStatus;const row=group.querySelector('[data-row-key^="workspace:"]');if(row){if(row.dataset.acidTab!==undefined){row.removeAttribute('tabindex');delete row.dataset.acidTab;}row.removeAttribute('aria-label');delete row.dataset.acidCount;const title=row.querySelector(moduleSelector('.wnFoaW_title'));if(title)delete title.dataset.acidFallback;}
    }
  },[list]);
  // Interaction: strips open their workspace; hover/focus opens the flyout.
  React.useEffect(()=>{
    if(!list||!active)return;
    const clear=name=>{clearTimeout(timers.current[name]);timers.current[name]=undefined;};
    const cancelOpen=()=>{clear('open');timers.current.pending=undefined;};
    const restore=group=>{if(group&&expanded.current.has(group)){expanded.current.delete(group);const row=group.querySelector('[data-row-key^="workspace:"]');if(row?.getAttribute('aria-expanded')==='true')row.click();}};
    const close=()=>{cancelOpen();clear('close');const current=flyRef.current;if(current){restore(current.group);current.group.removeAttribute('data-acid-ws-open');}setFly(null);};
    const open=group=>{
      cancelOpen();clear('close');
      const row=group.querySelector('[data-row-key^="workspace:"]');if(!row||row.classList.contains(moduleClass('wnFoaW_menuOpen')))return;
      const id=row.dataset.rowKey.slice(10),{identity,byId}=live.current;
      if(flyRef.current?.group===group)return;
      if(flyRef.current){restore(flyRef.current.group);flyRef.current.group.removeAttribute('data-acid-ws-open');}
      if(row.getAttribute('aria-expanded')==='false'){expanded.current.add(group);row.click();}
      const rect=group.getBoundingClientRect();
      const entry=byId.get(id);const index=live.current.numbers?.[id]??(entry?entry.index+1:groups.indexOf(group)+1);
      group.setAttribute('data-acid-ws-open','');
      setFly({group,id,color:identity[id]||IDENTITY_COLORS[0],number:row.getAttribute('data-acid-ordinal')||formatWorkspaceIndex(index),
        name:row.querySelector(moduleSelector('.wnFoaW_title'))?.textContent||entry?.item.title||entry?.item.name||'—',path:entry?.item.path||'',anchor:{top:rect.top,bottom:rect.bottom,left:rect.right}});
    };
    // Give the pointer time to cross neighbouring strips on its way to the flyout.
    const schedule=(group,delay=flyRef.current?350:90)=>{
      clear('close');if(flyRef.current?.group===group){cancelOpen();return;}
      if(delay&&timers.current.pending===group)return;
      clear('open');timers.current.pending=group;
      timers.current.open=setTimeout(()=>open(group),delay);
    };
    const leave=()=>{cancelOpen();clear('close');timers.current.close=setTimeout(()=>{if(!document.activeElement?.closest('.acid-ws-flyout'))close();},200);};
    const groupOf=node=>node?.closest?.('[data-acid-ws-strip]');
    const over=event=>{if(event.target.closest?.(moduleSelector('.wnFoaW_rowActions'))){leave();return;}const group=groupOf(event.target);if(group&&list.contains(group))schedule(group);};
    const out=event=>{const from=groupOf(event.target),to=groupOf(event.relatedTarget);if(from&&from!==to&&!event.relatedTarget?.closest?.('.acid-ws-flyout'))leave();};
    const focus=event=>{if(event.target.closest?.(moduleSelector('.wnFoaW_rowActions'))){close();return;}const group=groupOf(event.target);if(group)schedule(group,0);};
    const pick=event=>{
      if(!event.isTrusted)return;
      const row=event.target.closest?.('[data-row-key^="workspace:"]');
      if(!row||!list.contains(row)||event.target.closest(moduleSelector('.wnFoaW_rowActions')))return;
      if(event.type==='keydown'&&event.key==='ArrowRight'){event.preventDefault();event.stopPropagation();open(row.closest('[data-acid-ws-strip]'));setTimeout(()=>document.querySelector('.acid-ws-flyout .acid-ws-fly-row,.acid-ws-flyout button')?.focus(),30);return;}
      if(event.type==='keydown'&&!['Enter',' '].includes(event.key))return;
      event.preventDefault();event.stopPropagation();close();
      live.current.onPick(row.dataset.rowKey.slice(10));
    };
    list.addEventListener('pointerover',over);list.addEventListener('pointerout',out);list.addEventListener('focusin',focus);
    list.addEventListener('click',pick,true);list.addEventListener('keydown',pick,true);
    const dropped=event=>{if(!event.target.closest?.('[data-row-key^="session:"]'))markWorkspaceReorder();};
    list.addEventListener('drop',dropped,true);list.addEventListener('dragend',dropped,true);
    timers.current.api={enter:()=>{cancelOpen();clear('close');},leave,close};
    const scroll=()=>close();list.addEventListener('scroll',scroll,{passive:true});window.addEventListener('resize',scroll);
    return()=>{list.removeEventListener('pointerover',over);list.removeEventListener('pointerout',out);list.removeEventListener('focusin',focus);
      list.removeEventListener('click',pick,true);list.removeEventListener('keydown',pick,true);list.removeEventListener('drop',dropped,true);list.removeEventListener('dragend',dropped,true);list.removeEventListener('scroll',scroll);window.removeEventListener('resize',scroll);close();};
  },[list,active]);
  if(!list||!active)return null;
  const api=timers.current.api||{enter(){},leave(){},close(){}};
  return h(React.Fragment,null,createPortal(h(CommandStack,{tick}),list),
    fly&&byId.has(fly.id)?h(WorkspaceFlyout,{key:fly.id,state:fly,color:identity[fly.id],custom:!!colors[fly.id],onColor:color=>onColor(fly.id,color),t,motion,statuses,onEnter:()=>api.enter(),onLeave:()=>api.leave(),onClose:refocus=>{api.close();if(refocus)fly.group.querySelector('[data-row-key^="workspace:"]')?.focus();}}):null);
}
