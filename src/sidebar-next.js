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
// Colour sets decide which ten colours new (and un-customised) workspaces are dealt. Slots stay
// the same, so switching sets recolours every AUTO workspace in place; custom colours win.
const IDENTITY_SETS=Object.freeze({
  neon:IDENTITY_COLORS,
  industrial:Object.freeze(['#D9C21E','#C8432B','#E07A1F','#3D63B8','#8A63B5','#2F9E96','#C9BE9F','#6E9C3A','#E3955A','#B0476A']),
  polar:Object.freeze(['#72E8ED','#8058EB','#4FA3FF','#A8F0D8','#6170FF','#9AD1FF','#3FD0B0','#C4B2FF','#7FB2C9','#E2F4FF'])
});
let identityPalette=IDENTITY_COLORS;
function normalizeColorSet(value){return typeof value==='string'&&Object.hasOwn(IDENTITY_SETS,value)?value:'neon';}
function setIdentitySet(value){identityPalette=IDENTITY_SETS[normalizeColorSet(value)];}
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
  return Object.fromEntries(ids.map(id=>[id,normalizeHex(colors[id],identityPalette[state.map[id]])]));
}
// Workspace marks: a flat symbol under each strip's number. Four families (pixel totem,
// registration, data tag, hazard) are dealt out like the identity colours, so neighbours differ;
// the exact shape comes from the workspace id, so it never changes when strips are reordered.
// The session state plays on the mark itself (see sidebar-next.css, section 10).
const MARK_FAMILIES=Object.freeze(['totem','registration','data','hazard']);
function markSeed(id){let hash=2166136261;for(const ch of String(id))hash=Math.imul(hash^ch.charCodeAt(0),16777619);return hash>>>0;}
function markRandom(seed){return()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
function markFamily(slot){const n=Number.isInteger(slot)&&slot>=0?slot:0;return MARK_FAMILIES[(n+Math.floor(n/4))%MARK_FAMILIES.length];}
function workspaceMarks(ids,numbers){
  let map={};try{map=JSON.parse(localStorage.getItem(IDENTITY_PREF))?.map||{};}catch{}
  const ordered=[...ids].sort((a,b)=>(numbers?.[a]??1e9)-(numbers?.[b]??1e9));
  return Object.fromEntries(ids.map(id=>[id,{family:markFamily(Number.isInteger(map[id])?map[id]:ordered.indexOf(id)),seed:markSeed(id)}]));
}
const MARK_INK='currentColor';
const MARK_SHAPES={
  totem(r){
    let out='';
    for(let y=0;y<7;y++)for(let x=0;x<3;x++){
      if(!(x===2?r()>.35:r()>.5))continue;
      for(const column of x===2?[2]:[x,4-x])out+=`<rect class="mk-px" x="${4.5+column*5}" y="${2.5+y*5}" width="5" height="5" fill="${MARK_INK}" style="animation-delay:${(y*.11).toFixed(2)}s"/>`;
    }
    return out;
  },
  registration(r){
    const glyph=Math.floor(r()*8),filled=r()>.5,fill=filled?MARK_INK:'none',stroke=`stroke="${MARK_INK}" stroke-width="1.6"`;
    const corners=[[3,5,1,1],[31,5,-1,1],[3,35,1,-1],[31,35,-1,-1]].map(([x,y,dx,dy])=>`<path d="M${x} ${y+5*dy}V${y}H${x+5*dx}" ${stroke}/>`).join('');
    const shape=[
      `<circle cx="17" cy="20" r="7" fill="${fill}" ${stroke}/>`,
      `<rect x="10.5" y="13.5" width="13" height="13" fill="${fill}" ${stroke}/>`,
      `<path d="M17 12.5L24.5 26H9.5Z" fill="${fill}" ${stroke}/>`,
      `<path d="M17 11.5L25.5 20L17 28.5L8.5 20Z" fill="${fill}" ${stroke}/>`,
      `<circle cx="17" cy="20" r="7.5" fill="none" ${stroke}/><circle cx="17" cy="20" r="2.8" fill="${MARK_INK}"/>`,
      `<circle cx="17" cy="20" r="7" fill="none" ${stroke}/><path d="M17 13A7 7 0 0 1 17 27Z" fill="${MARK_INK}"/>`,
      `<path d="M17 11v18M8 20h18" stroke="${MARK_INK}" stroke-width="${filled?4:1.6}"/>`,
      `<rect x="9.5" y="12.5" width="15" height="15" fill="none" ${stroke}/><rect x="13.5" y="16.5" width="7" height="7" fill="${fill}" ${stroke}/>`
    ][glyph];
    const tick=`<path d="M${r()>.5?29:5} 20h${r()>.5?3:-3}" ${stroke}/>`;
    return `<g class="mk-corners">${corners}</g><g class="mk-glyph">${shape}</g>${tick}`;
  },
  data(r){
    let x=0;const pattern=[];
    while(x<28){const width=1+Math.floor(r()*3);if(r()>.3)pattern.push([x,width]);x+=width+1;}
    const bars=[0,28].map(offset=>pattern.map(([bx,width])=>`<rect x="${offset+bx}" y="0" width="${width}" height="12" fill="${MARK_INK}"/>`).join('')).join('');
    let dots='';
    for(let y=0;y<3;y++)for(let k=0;k<5;k++)if(r()>.45)dots+=`<rect class="mk-dot" x="${4+k*6}" y="${19+y*5}" width="3" height="3" fill="${MARK_INK}" style="animation-delay:${(r()*1.2).toFixed(2)}s"/>`;
    const code=Math.floor(r()*0xFFFF).toString(16).toUpperCase().padStart(4,'0');
    return `<svg x="3" y="3" width="28" height="12" overflow="hidden"><g class="mk-bars">${bars}</g></svg>${dots}<text x="17" y="39.5" text-anchor="middle" fill="${MARK_INK}" font-size="7" font-weight="700" letter-spacing=".3">${code.slice(0,2)}·${code.slice(2)}</text>`;
  },
  hazard(r){
    const direction=r()>.5?1:-1;let stripes='';
    for(let k=-3;k<9;k++){const x=k*6;stripes+=`<path d="M${direction>0?x:x+8} 0L${direction>0?x+8:x} 10" stroke="${MARK_INK}" stroke-width="2.6"/>`;}
    const icons=[
      `<path d="M8 20l6 6-6 6M15 20l6 6-6 6M22 20l6 6-6 6" fill="none" stroke="${MARK_INK}" stroke-width="2"/>`,
      `<path d="M10 33L24 19M14 19h10v10" fill="none" stroke="${MARK_INK}" stroke-width="2.2"/>`,
      `<path d="M17 18L27 35H7Z" fill="none" stroke="${MARK_INK}" stroke-width="1.8"/><path d="M17 24v5M17 31v1.6" stroke="${MARK_INK}" stroke-width="2"/>`,
      `<path d="M19 17L11 28h6l-2 8 8-11h-6Z" fill="${MARK_INK}"/>`,
      `<path d="M8 23h16l-4-4M26 31H10l4 4" fill="none" stroke="${MARK_INK}" stroke-width="2"/>`,
      `<circle cx="17" cy="27" r="7" fill="none" stroke="${MARK_INK}" stroke-width="1.8"/><path d="M17 17v6M17 31v6M7 27h6M21 27h6" stroke="${MARK_INK}" stroke-width="1.8"/>`
    ];
    return `<svg x="3" y="3" width="28" height="10" overflow="hidden"><g class="mk-stripes" data-dir="${direction}">${stripes}</g></svg><rect x="3" y="3" width="28" height="10" fill="none" stroke="${MARK_INK}" stroke-width="1.2"/><g class="mk-icon">${icons[Math.floor(r()*icons.length)]}</g>`;
  }
};
const MARK_STATES=new Set(['working','attention','done','aborted']);
// One markup string, so the React rail and the static showcase draw exactly the same mark.
function markHtml(family,seed,state){
  const kind=MARK_SHAPES[family]?family:MARK_FAMILIES[0],status=MARK_STATES.has(state)?state:'idle';
  const body=`<svg class="acid-ws-mark-svg" width="34" height="40" viewBox="0 0 34 40" fill="none" aria-hidden="true">${MARK_SHAPES[kind](markRandom(seed>>>0))}</svg>`;
  const extra=status==='working'?'<span class="acid-ws-mark-scan"></span>'
    :status==='done'?'<span class="acid-ws-mark-badge"><svg width="9" height="9" viewBox="0 0 9 9" aria-hidden="true"><path d="M1.5 4.6L3.6 6.6L7.5 2.2" fill="none" stroke="var(--mk-bg)" stroke-width="1.6"/></svg></span>'
    :status==='aborted'?'<svg class="acid-ws-mark-slash" width="34" height="40" viewBox="0 0 34 40" aria-hidden="true"><path d="M31 3L3 37" stroke="currentColor" stroke-width="2.2"/></svg>':'';
  return `<span class="acid-ws-mark" data-family="${kind}" data-state="${status}"><span class="acid-ws-mark-body">${body}</span>${extra}</span>`;
}
function WorkspaceMark({mark,state,className='acid-ws-mark-host'}){
  if(!mark)return null;
  return h('span',{className,'aria-hidden':true,dangerouslySetInnerHTML:{__html:markHtml(mark.family,mark.seed,state)}});
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
  const start=root.querySelector(moduleSelector('.wtg9ga_newSession'));
  const panels=[...root.querySelectorAll(moduleSelector('.wtg9ga_panelList .wtg9ga_panelRow:not(.wtg9ga_moreAnchor *)'))];
  return [start,...panels].filter(Boolean).slice(0,3);
}
function sessionRows(group){
  return [...group.querySelectorAll('[data-row-key^="session:"][role="treeitem"]')].map(row=>({
    key:row.dataset.rowKey,row,title:row.querySelector(moduleSelector('.wnFoaW_title'))?.textContent||'—',time:row.querySelector(moduleSelector('.wnFoaW_time'))?.textContent||'',selected:row.getAttribute('aria-selected')==='true'
  }));
}

// Collapse / expand: the strips fold into thin lines (and unfold back) as flat colour blocks while
// the column eases between 113px and 18px (--acid-side-w in CSS). No mask and no page snapshot:
// capture() records where every workspace sits before the switch, play() flies a flat block from
// there to where the same workspace sits after it, then hands over to the real strip or line.
const RAIL_MORPH_EASE='cubic-bezier(.7,0,.2,1)';
function createRailMorph(){
  let snap=null,strips=null,stop=null;
  const speed=()=>{
    const value=document.documentElement.getAttribute('data-industrial-motion');
    if(value==='off'||globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches)return 0;
    return value==='quiet'?.35:1;
  };
  const owned=node=>node.closest('[data-acid-motion-owned]');
  function collect(mode){
    if(mode==='thin')return [...document.querySelectorAll('.acid-thin-rail .acid-thin-line[data-ws]')].filter(node=>!owned(node))
      .map(node=>({id:node.dataset.ws,node,box:node.closest('.acid-thin-rail')}));
    return [...document.querySelectorAll('[data-acid-ws-strip]')].filter(node=>!owned(node))
      .map(node=>({id:node.querySelector('[data-row-key^="workspace:"]')?.dataset.rowKey.slice(10),node,box:node.parentElement})).filter(entry=>entry.id);
  }
  function visible(rect,box){return rect.width>0&&rect.height>0&&rect.bottom>box.top&&rect.top<box.bottom;}
  function capture(){
    const mode=document.documentElement.getAttribute('data-acid-sidebar');
    if((mode!=='next'&&mode!=='thin')||!speed())return;
    // Once the host has flipped to collapsed, its own collapsed layout has already squeezed the
    // strips; measuring them now would overwrite the real positions with the squeezed ones.
    const main=[...document.querySelectorAll(moduleSelector('.mP3x-q_frame'))].find(node=>!owned(node));
    if(mode==='next'&&main?.hasAttribute('data-sidebar-collapsed'))return;
    const items=new Map();
    for(const entry of collect(mode)){
      const rect=entry.node.getBoundingClientRect();
      if(visible(rect,(entry.box??entry.node).getBoundingClientRect()))items.set(entry.id,{rect,color:getComputedStyle(entry.node).backgroundColor});
    }
    // Native collapse can empty the strip list before our observer runs; keep the earlier capture.
    if(!items.size)return;
    snap={mode,time:performance.now(),items};
    // The last good strip layout stays as a fallback (e.g. a collapse whose key press never reached the page).
    if(mode==='next')strips=snap;
  }
  function play(mode){
    const fresh=snap&&snap.mode!==mode&&performance.now()-snap.time<=1500?snap:null;
    const from=fresh??(mode==='thin'?strips:null);snap=null;stop?.();
    const scale=speed();
    if(!scale||!from||from.mode===mode)return;
    const duration=Math.round(460*scale),root=document.documentElement;
    const layer=document.createElement('div');layer.className='acid-rail-morph';layer.dataset.acidMotionOwned='';layer.setAttribute('aria-hidden','true');
    const animations=[];let longest=duration;
    const hand=(node,total,landing)=>{const animation=node.animate?.([{opacity:0},{opacity:0,offset:landing},{opacity:1}],{duration:total,easing:'linear'});if(animation)animations.push(animation);};
    collect(mode).forEach((entry,i)=>{
      const rect=entry.node.getBoundingClientRect(),source=from.items.get(entry.id);
      const delay=Math.round(Math.min(i*16,128)*scale),total=duration+delay;longest=Math.max(longest,total);
      // The real strip or line stays hidden until its block lands, then takes over (labels appear).
      hand(entry.node,total,(delay+duration*.84)/total);
      if(!source||!visible(rect,(entry.box??entry.node).getBoundingClientRect()))return;
      const ghost=document.createElement('span');ghost.className='acid-rail-ghost';
      Object.assign(ghost.style,{left:rect.left+'px',top:rect.top+'px',width:rect.width+'px',height:rect.height+'px'});
      layer.append(ghost);
      const color=getComputedStyle(entry.node).backgroundColor;
      const start=`translate(${source.rect.left-rect.left}px,${source.rect.top-rect.top}px) scale(${source.rect.width/rect.width},${source.rect.height/rect.height})`;
      const animation=ghost.animate?.([
        {transform:start,backgroundColor:source.color,opacity:1,easing:RAIL_MORPH_EASE},
        {transform:'none',backgroundColor:color,opacity:1,offset:.84},
        {transform:'none',backgroundColor:color,opacity:0}
      ],{duration,delay,fill:'backwards'});
      if(animation)animations.push(animation);
    });
    // The expand key has no partner; it fades in with the lines.
    if(mode==='thin')for(const node of document.querySelectorAll('.acid-thin-rail .acid-thin-expand'))hand(node,duration,.6);
    document.body.append(layer);root.setAttribute('data-acid-rail-morph',mode);
    const timer=setTimeout(()=>stop?.(),longest+40);
    stop=()=>{clearTimeout(timer);for(const animation of animations)animation.cancel();layer.remove();if(root.getAttribute('data-acid-rail-morph')===mode)root.removeAttribute('data-acid-rail-morph');stop=null;};
  }
  return {capture,play,cancel(){snap=strips=null;stop?.();}};
}
const railMorph=createRailMorph();

const COMMAND_ICONS={
  new:'M8 3v10M3 8h10',
  plugins:'M3 5.5h2.6a1.6 1.6 0 1 1 3.2 0H11.5V8a1.6 1.6 0 1 1 0 3.2V13.5H8.8a1.6 1.6 0 1 0-3.2 0H3V10.8a1.6 1.6 0 1 0 0-3.2Z',
  automations:'M8 2.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 1 0 0-11ZM8 5v3.2l2.2 1.4',
  rail:'M4 2.5v11M13 8H7.5M10 5L7 8l3 3'
};
function CommandStack({tick,t,toggleSidebar}){
  const commands=nativeCommands();
  const icon=d=>h('svg',{width:16,height:16,viewBox:'0 0 16 16',fill:'none',stroke:'currentColor',strokeWidth:1.3,strokeLinecap:'square','aria-hidden':true},h('path',{d}));
  // Fourth key: fold the strips down to one colour line per workspace (the native Ctrl+B toggle).
  const collapse=toggleSidebar?h('button',{key:'rail',type:'button',className:'acid-ws-command','data-command':'rail','aria-label':t?.('ws.collapse'),title:t?.('ws.collapse'),onClick:()=>{railMorph.capture();toggleSidebar();}},icon(COMMAND_ICONS.rail)):null;
  return h('div',{className:'acid-ws-commands',role:'group','aria-label':'commands','data-tick':tick},...commands.map((button,i)=>{
    const kind=['new','plugins','automations'][i];
    const label=button.querySelector(moduleSelector('.wtg9ga_newSessionLabel,.wtg9ga_panelTitle'))?.textContent||button.getAttribute('aria-label')||kind;
    const active=button.getAttribute('aria-current')==='page'||button.classList.contains(moduleClass('wtg9ga_panelActive'));
    return h('button',{key:i,type:'button',className:'acid-ws-command','data-command':kind,'aria-pressed':i?active:undefined,'aria-label':label,title:label,
      onClick:()=>{button.click();}},icon(COMMAND_ICONS[kind]));
  }),collapse);
}

// Collapsed NEXT sidebar: the native collapsed rail is replaced by one thin line per workspace.
// Lines are grey until hovered or current; hovering previews that workspace's colour across the
// whole skin and shows a small name tag, clicking opens it. Native rows are not needed here.
function ThinRail({items,numbers,identity,marks={},workspaceId,activity,onPick,onPreview,toggleSidebar,t}){
  const [host,setHost]=React.useState(null),[tip,setTip]=React.useState(null),timer=React.useRef(0);
  React.useLayoutEffect(()=>{
    let frame=0;
    const find=()=>{frame=0;const main=[...document.querySelectorAll(moduleSelector('.mP3x-q_frame'))].find(node=>!node.closest('[data-acid-motion-owned]'));
      const next=main?.querySelector(moduleSelector('.mP3x-q_sidebarCol'))??null;setHost(previous=>previous===next?previous:next);};
    const observer=new MutationObserver(()=>{if(!frame)frame=requestAnimationFrame(find);});
    observer.observe(document.body,{childList:true,subtree:true});find();
    return()=>{observer.disconnect();if(frame)cancelAnimationFrame(frame);};
  },[]);
  React.useEffect(()=>()=>{clearTimeout(timer.current);onPreview?.(null);},[]);
  // Fold: the strips captured before the collapse fly into these lines.
  React.useLayoutEffect(()=>{if(host)railMorph.play('thin');},[host]);
  const ordered=[...items].sort((a,b)=>(numbers?.[String(a.workspaceId)]??1e9)-(numbers?.[String(b.workspaceId)]??1e9));
  const enter=(event,entry)=>{
    clearTimeout(timer.current);const rect=event.currentTarget.getBoundingClientRect();
    setTip({...entry,top:rect.top+rect.height/2,left:rect.right});
    timer.current=setTimeout(()=>onPreview?.(entry.color,entry.id),90);
  };
  const leave=()=>{clearTimeout(timer.current);setTip(null);timer.current=setTimeout(()=>onPreview?.(null),150);};
  if(!host)return null;
  return createPortal(h('nav',{className:'acid-thin-rail','aria-label':t('workspace')},
    h('button',{type:'button',className:'acid-thin-expand','aria-label':t('ws.expand'),title:t('ws.expand'),onClick:()=>{railMorph.capture();toggleSidebar?.();}},h('span',{'aria-hidden':true},'»')),
    ...ordered.map((item,i)=>{
      const id=String(item.workspaceId),number=formatWorkspaceIndex(numbers?.[id]??i+1),name=fallbackName(item),color=identity[id]||IDENTITY_COLORS[i%IDENTITY_COLORS.length],state=activity[id],current=id===String(workspaceId);
      const entry={id,number,name,color,state,mark:marks[id]};
      return h('button',{key:id,type:'button',className:'acid-thin-line','data-ws':id,'data-active':current?'':undefined,'data-status':state,'aria-current':current?'true':undefined,
        style:{'--acid-ws-id':color},'aria-label':`${number} ${name}${state?` · ${t(`ws.${state}`)}`:''}`,
        onPointerEnter:event=>enter(event,entry),onPointerLeave:leave,onFocus:event=>enter(event,entry),onBlur:leave,
        onClick:()=>{leave();onPick(id);}});
    }),
    tip?h('div',{className:'acid-thin-tip',role:'tooltip',style:{top:tip.top+'px',left:tip.left+8+'px','--acid-ws-id':tip.color}},h(WorkspaceMark,{mark:tip.mark,state:tip.state,className:'acid-thin-tip-mark'}),h('span',{className:'acid-thin-tip-text'},h('b',null,tip.number),h('span',null,tip.name),tip.state?h('span',{className:'acid-thin-tip-state'},t(`ws.${tip.state}`)):null)):null),host);
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

function SidebarNext({items,numbers,workspaceId,colors={},colorSet='neon',onColor,onPick,onPreview,t,motion,toggleSidebar,statusSource=idleStatusSource}){
  const [list,setList]=React.useState(null),[tick,setTick]=React.useState(0),[fly,setFly]=React.useState(null),[collapsed,setCollapsed]=React.useState(false);
  const timers=React.useRef({}),flyRef=React.useRef(null),expanded=React.useRef(new Set());
  flyRef.current=fly;
  const ids=items.map(item=>String(item.workspaceId));
  const identity=React.useMemo(()=>workspaceIdentity(ids,numbers,colors),[ids.join('|'),JSON.stringify(numbers||{}),colors,colorSet]);
  const marks=React.useMemo(()=>workspaceMarks(ids,numbers),[identity]);
  const byId=React.useMemo(()=>new Map(items.map((item,i)=>[String(item.workspaceId),{item,index:i}])),[items]);
  const statuses=React.useSyncExternalStore(statusSource.subscribe,statusSource.getSnapshot,statusSource.getSnapshot);
  const activity=React.useMemo(()=>workspaceActivity(items,statuses),[items,statuses]);
  const live=React.useRef({});live.current={identity,byId,onPick,workspaceId,numbers};
  // Locate the native workspace tree in the main frame.
  React.useLayoutEffect(()=>{
    let frame=0,signature='';
    const sync=()=>{
      frame=0;const next=nextSidebarList();setList(previous=>previous===next?previous:next);
      const main=[...document.querySelectorAll(moduleSelector('.mP3x-q_frame'))].find(node=>!node.closest('[data-acid-motion-owned]'));
      setCollapsed(!!main?.hasAttribute('data-sidebar-collapsed'));
      const groups=next?next.querySelectorAll(moduleSelector(':scope > .GAkraW_groupSection')).length:0;
      const value=groups+'|'+(next?.childElementCount??0)+'|'+nativeCommands().map(button=>button.className+(button.textContent||'')).join('/');
      if(value!==signature){signature=value;setTick(x=>x+1);}
    };
    // Collapse/expand is applied in the same task as the native flip (flushSync), so no frame
    // paints the native collapsed rail or an empty column between the two layouts.
    let folded=null;
    const flipped=()=>{const main=[...document.querySelectorAll(moduleSelector('.mP3x-q_frame'))].find(node=>!node.closest('[data-acid-motion-owned]'));const value=!!main?.hasAttribute('data-sidebar-collapsed');const changed=folded!==null&&value!==folded;folded=value;return changed;};
    const observer=new MutationObserver(()=>{
      if(flipped()){if(frame){cancelAnimationFrame(frame);frame=0;}railMorph.capture();flushSync(sync);return;}
      if(!frame)frame=requestAnimationFrame(sync);
    });
    observer.observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['class','data-sidebar-collapsed','data-row-key']});
    // Ctrl+B or any pointer press may collapse the sidebar: record the strips while they still exist.
    const before=event=>{if(event.type==='pointerdown'||((event.ctrlKey||event.metaKey)&&event.key?.toLowerCase()==='b'))railMorph.capture();};
    window.addEventListener('pointerdown',before,true);window.addEventListener('keydown',before,true);
    flipped();sync();return()=>{observer.disconnect();window.removeEventListener('pointerdown',before,true);window.removeEventListener('keydown',before,true);railMorph.cancel();if(frame)cancelAnimationFrame(frame);document.documentElement.removeAttribute('data-acid-sidebar');};
  },[]);
  // Two widths: the 113px strips, or (native collapse / Ctrl+B) one thin colour line per workspace.
  // A flyout belongs to the strips, so collapsing closes it.
  React.useEffect(()=>{if(collapsed)timers.current.api?.close?.();},[collapsed]);
  // Hovering a strip opens its flyout; while it is open the whole skin previews that colour.
  const previewColor=fly?identity[fly.id]??null:null;
  React.useEffect(()=>{if(!collapsed)onPreview?.(previewColor,fly?.id);},[previewColor,fly?.id,collapsed]);
  React.useEffect(()=>()=>onPreview?.(null),[]);
  const groups=list?[...list.children].filter(node=>node.classList?.contains(moduleClass('GAkraW_groupSection'))&&node.querySelector(':scope [data-row-key^="workspace:"]')):[];
  const active=groups.length>0;
  const unfold=React.useRef(false);
  React.useLayoutEffect(()=>{if(collapsed)unfold.current=true;},[collapsed]);
  // Arrange strips and paint identity colours on every render of the tree.
  React.useLayoutEffect(()=>{
    const root=document.documentElement;
    // Collapsed: the thin line rail owns the sidebar column (ThinRail); the strips stay unpainted.
    if(collapsed){if(root.getAttribute('data-acid-sidebar')!=='thin')root.setAttribute('data-acid-sidebar','thin');return;}
    if(!list||!active){root.removeAttribute('data-acid-sidebar');return;}
    if(root.getAttribute('data-acid-sidebar')!=='next')root.setAttribute('data-acid-sidebar','next');
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
    // Unfold: the lines captured before the expand fly out into these strips.
    if(unfold.current){unfold.current=false;railMorph.play('next');}
    else railMorph.capture();
  });
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
    const scroll=()=>{close();railMorph.capture();};list.addEventListener('scroll',scroll,{passive:true});window.addEventListener('resize',scroll);
    return()=>{list.removeEventListener('pointerover',over);list.removeEventListener('pointerout',out);list.removeEventListener('focusin',focus);
      list.removeEventListener('click',pick,true);list.removeEventListener('keydown',pick,true);list.removeEventListener('drop',dropped,true);list.removeEventListener('dragend',dropped,true);list.removeEventListener('scroll',scroll);window.removeEventListener('resize',scroll);close();};
  },[list,active]);
  if(collapsed)return h(ThinRail,{items,numbers,identity,marks,workspaceId,activity,onPick,onPreview,toggleSidebar,t});
  if(!list||!active)return null;
  const api=timers.current.api||{enter(){},leave(){},close(){}};
  // One mark per strip, portalled after the native row (CSS keeps every other child hidden).
  const stripMarks=groups.map(group=>{const id=group.querySelector('[data-row-key^="workspace:"]')?.dataset.rowKey.slice(10);return id&&marks[id]?createPortal(h(WorkspaceMark,{mark:marks[id],state:activity[id]}),group,'mark:'+id):null;});
  return h(React.Fragment,null,createPortal(h(CommandStack,{tick,t,toggleSidebar}),list),
    fly&&byId.has(fly.id)?h(WorkspaceFlyout,{key:fly.id,state:fly,color:identity[fly.id],custom:!!colors[fly.id],onColor:color=>onColor(fly.id,color),t,motion,statuses,onEnter:()=>api.enter(),onLeave:()=>api.leave(),onClose:refocus=>{api.close();if(refocus)fly.group.querySelector('[data-row-key^="workspace:"]')?.focus();}}):null,
    ...stripMarks);
}
