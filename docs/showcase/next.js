/* Fictional documentation host. Production CSS, placement, identity colors,
   digit renderer and mask controller are loaded from the built plugin. */
(() => {
  const core=window.showcaseCore,html=document.documentElement,$=s=>document.querySelector(s);
  const names=['Design Studio','Motion Lab','Prototype','Type Archive','Signal Notes','Release Kit'];
  const conversations=['界面结构草图','颜色与排版实验','本地预览记录'];
  const palettes={acid:core.PALETTE_PRESETS.acid,orange:core.PALETTE_PRESETS.orange,polar:core.PALETTE_PRESETS.polar};
  let mode='night',palette='acid',style='next',active=2,flyout,dialog,menu,drawerTransition,preview=null,thin;
  const controller=core.createAcceptedMotionController(()=>html.dataset.industrialMotion);
  $('[data-wordmark]').innerHTML=core.MASTHEAD;
  document.querySelectorAll('[data-symbol]').forEach(n=>n.innerHTML=core.SYMBOL);
  document.querySelectorAll('[data-hud-icon]').forEach(n=>n.innerHTML=core.HUD_ICONS[n.dataset.hudIcon]);
  function setPalette(next=palette,nextMode=mode){
    palette=next;mode=nextMode;
    // Mirrors client.js: the current workspace (or the hovered one) takes over the acid accent.
    const accent=preview??core.IDENTITY_COLORS[active];
    const scheme=core.makeScheme(mode,{...palettes[palette][mode],accent});
    for(const [key,value] of Object.entries({...scheme.tokens,...scheme.variables}))html.style.setProperty(key,value);
    html.dataset.industrialMode=mode;html.style.colorScheme=mode==='night'?'dark':'light';
    document.querySelectorAll('[data-mode]').forEach(n=>n.setAttribute('aria-pressed',String(n.dataset.mode===mode)));
  }
  function setWorkspace(index){
    active=index;const color=core.IDENTITY_COLORS[index];
    html.style.setProperty('--acid-ws-context',color);html.style.setProperty('--acid-ws-context-fore',core.foreground(color));
    $('.acid-context').dataset.acidIdentity=color;
    core.paintDigits($('#workspace-index'),String(index+1).padStart(3,'0'));
    $('#workspace-name').textContent=names[index];$('[data-workspace-name]').textContent=names[index];
    $('.demo-session-heading>span').textContent='WORKSPACE / '+String(index+1).padStart(3,'0');
    document.querySelectorAll('.GAkraW_groupSection').forEach((group,i)=>group.toggleAttribute('data-acid-ws-active',i===active));
    setPalette();renderThin();renderHud();
  }
  let previewIndex=null;
  const paths=['D:\\demo\\design-studio','D:\\demo\\motion-lab','D:\\demo\\prototype','D:\\demo\\type-archive','D:\\demo\\signal-notes','D:\\demo\\release-kit'];
  // Mirrors Masthead: one colour slab for the current (or previewed) workspace, HUD counts and the ops wall.
  function renderHud(){
    const shown=previewIndex??active,color=core.IDENTITY_COLORS[shown];
    html.dataset.acidMasthead='hud';
    html.style.setProperty('--acid-ws-context',color);html.style.setProperty('--acid-ws-context-fore',core.foreground(color));
    $('.acid-context').dataset.acidIdentity=color;
    core.paintDigits($('#workspace-index'),String(shown+1).padStart(3,'0'));$('#workspace-name').textContent=names[shown];
    $('[data-hud-meta]').textContent=previewIndex!=null?'PREVIEW / WS':'ACTIVE WORKSPACE';$('[data-hud-path]').textContent=paths[shown];
    $('[data-hud-mark]').innerHTML=`<span class="acid-ws-mark-host">${core.markHtml(core.markFamily(shown),core.markSeed('demo-'+shown),DEMO_STATUS[shown])}</span><span>${core.HUD_REGISTRATION}</span>`;
    const statuses=Object.values(DEMO_STATUS);
    $('[data-hud-fields]').innerHTML=[['SESSIONS','0'+(shown%3+1)],['RUNNING','0'+statuses.filter(s=>s==='working').length],['WAITING','0'+statuses.filter(s=>s==='attention').length],['TOKENS · TODAY','2.4M']].map(([label,value])=>`<span class="acid-hud-field"><span>${label}</span><b>${value}</b></span>`).join('');
    const ids=names.map((_,i)=>String(i)),activity=Object.fromEntries(Object.entries(DEMO_STATUS).map(([i,s])=>[String(i),s]));
    const ops=core.hudOps(ids,activity,String(shown),Object.fromEntries(ids.map(i=>[i,Number(i)+1])));
    $('[data-hud-ops]').innerHTML='<span class="acid-hud-label">OPS</span>'+(ops.length?ops.slice(0,4).map(i=>{const state=activity[i];return `<button type="button" class="acid-hud-op" data-state="${state}" style="--acid-ws-id:${core.IDENTITY_COLORS[i]}" data-op="${i}"><span class="acid-hud-op-mark">${core.markHtml(core.markFamily(Number(i)),core.markSeed('demo-'+i),state)}</span><span class="acid-hud-op-text"><b>${String(Number(i)+1).padStart(3,'0')}</b><span>${core.HUD_OP_LABEL[state]}</span></span></button>`;}).join(''):'<span class="acid-hud-quiet">ALL QUIET</span>');
    document.querySelectorAll('[data-op]').forEach(button=>button.addEventListener('click',()=>setWorkspace(Number(button.dataset.op))));
  }
  // v3: the current workspace alone colours the skin; hovering only lights that strip or line.
  function setPreview(){}
  function setCollapsed(on){
    closeFlyout();const frame=$('.mP3x-q_frame');core.railMorph.capture();
    if(on){html.dataset.acidSidebar='thin';frame.setAttribute('data-sidebar-collapsed','');}
    else{html.dataset.acidSidebar=style==='next'?'next':'';if(style!=='next')html.removeAttribute('data-acid-sidebar');frame.removeAttribute('data-sidebar-collapsed');}
    renderThin();core.railMorph.play(on?'thin':'next');
  }
  // Demo session states: 002 running, 004 waiting for you, 005 finished unread.
  const DEMO_STATUS={1:'working',3:'attention',4:'done'};
  function renderThin(){
    thin?.remove();thin=undefined;setTip(null);
    if(html.dataset.acidSidebar!=='thin')return;
    thin=element('nav',{className:'acid-thin-rail','aria-label':'工作区'},element('button',{className:'acid-thin-expand','aria-label':'展开工作区',title:'展开工作区',onClick:()=>{setPreview(null);setCollapsed(false);}},'»'));
    names.forEach((name,i)=>{
      const number=String(i+1).padStart(3,'0');
      const line=element('button',{className:'acid-thin-line','data-ws':'demo-'+i,'data-active':i===active?'':undefined,'data-status':DEMO_STATUS[i],style:{'--acid-ws-id':core.IDENTITY_COLORS[i]},'aria-label':number+' '+name,
        onPointerenter:event=>{setTip(event.currentTarget,i);setPreview(i);},onPointerleave:()=>{setTip(null);setPreview(null);},onClick:()=>{setPreview(null);setWorkspace(i);}});
      thin.append(line);
    });
    $('.mP3x-q_sidebarCol').append(thin);
  }
  let tip;
  function setTip(line,index){
    tip?.remove();tip=undefined;if(!line)return;const rect=line.getBoundingClientRect();
    const mark=document.createElement('span');mark.className='acid-thin-tip-mark';mark.innerHTML=core.markHtml(core.markFamily(index),core.markSeed('demo-'+index),DEMO_STATUS[index]);
    tip=element('div',{className:'acid-thin-tip',role:'tooltip',style:{top:rect.top+rect.height/2+'px',left:rect.right+8+'px','--acid-ws-id':core.IDENTITY_COLORS[index]}},mark,element('span',{className:'acid-thin-tip-text'},element('b',{},String(index+1).padStart(3,'0')),element('span',{},names[index]),DEMO_STATUS[index]?element('span',{className:'acid-thin-tip-state'},{working:'工作中',attention:'等待确认',done:'完成未读'}[DEMO_STATUS[index]]):null));
    document.body.append(tip);
  }
  function renderList(){
    const list=$('#workspace-list');list.replaceChildren();
    if(style==='next'){
      list.setAttribute('data-acid-ws-grid','');
      const commands=element('div',{className:'acid-ws-commands',role:'group','aria-label':'commands'});
      Object.entries(core.COMMAND_ICONS).forEach(([kind,d],i)=>{
        const button=element('button',{className:'acid-ws-command','data-command':kind,'aria-label':['新会话','插件','自动化任务','收起为色线'][i]});
        if(kind==='rail')button.addEventListener('click',()=>setCollapsed(true));
        button.innerHTML=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3"><path d="${d}"/></svg>`;commands.append(button);
      });list.append(commands);
    }else list.removeAttribute('data-acid-ws-grid');
    names.forEach((name,i)=>{
      const group=element('section',{className:'GAkraW_groupSection','data-demo-index':i});
      const row=element('div',{className:'wnFoaW_projectRow',role:'treeitem',tabindex:0,'data-row-key':'workspace:demo-'+i,'data-acid-ordinal':String(i+1).padStart(3,'0'),'aria-label':name},element('span',{className:'wnFoaW_folder'},'▱'),element('span',{className:'wnFoaW_projectText'},element('span',{className:'wnFoaW_title'},name)));
      group.append(element('div',{},row));
      conversations.slice(0,i%3+1).forEach((title,j)=>group.append(element('div',{className:'demo-native-session'},element('span',{},title),element('small',{},j?'昨天':'刚刚'))));
      if(style==='next'){
        const place=core.stripPlacement(i);group.style.gridColumn=place.column;group.style.gridRow=`${place.row} / span ${place.span}`;
        group.style.setProperty('--acid-ws-id',core.IDENTITY_COLORS[i]);group.dataset.acidWsStrip=place.lead?'lead':'strip';
        if(DEMO_STATUS[i])group.dataset.acidWsStatus=DEMO_STATUS[i];
        const mark=document.createElement('span');mark.className='acid-ws-mark-host';mark.setAttribute('aria-hidden','true');mark.innerHTML=core.markHtml(core.markFamily(i),core.markSeed('demo-'+i),DEMO_STATUS[i]);group.append(mark);
        row.addEventListener('pointerenter',()=>showFlyout(i));row.addEventListener('focus',()=>showFlyout(i));
      }
      row.addEventListener('click',()=>{setWorkspace(i);closeFlyout();});
      row.addEventListener('keydown',event=>{if(event.key==='Enter'){setWorkspace(i);closeFlyout();}});
      list.append(group);
    });setWorkspace(active);
  }
  function closeFlyout(){if(flyout&&preview){preview=null;setPalette();}flyout?.remove();flyout=undefined;document.querySelectorAll('[data-acid-ws-open]').forEach(n=>n.removeAttribute('data-acid-ws-open'));}
  function showFlyout(index){
    if(style!=='next'||flyout?.dataset.demoIndex===String(index))return;closeFlyout();
    const group=$(`[data-demo-index="${index}"]`),rect=group.getBoundingClientRect(),number=String(index+1).padStart(3,'0');
    group.setAttribute('data-acid-ws-open','');setPreview(index);
    flyout=element('aside',{className:'acid-ws-flyout',role:'dialog','aria-label':number+' '+names[index],'data-demo-index':index,'data-acid-motion-owned':'flyout',style:{left:'115px',top:Math.max(132,Math.min(innerHeight-260,rect.top))+'px','--acid-ws-id':core.IDENTITY_COLORS[index]}});
    flyout.append(element('header',{className:'acid-ws-fly-head'},element('span',{className:'acid-ws-fly-number'},number),element('span',{className:'acid-ws-fly-title'},element('strong',{},names[index]),element('em',{},'DEMO / '+names[index]))),element('div',{className:'acid-ws-fly-meta'},element('span',{},'CONVERSATIONS 03'),element('button',{className:'acid-ws-fly-new'},'+ NEW CHAT HERE')));
    const list=element('div',{className:'acid-ws-fly-list',role:'list'});
    conversations.forEach((name,i)=>list.append(element('button',{className:'acid-ws-fly-row',role:'listitem','aria-current':i===0?'true':undefined,onClick:()=>{setWorkspace(index);closeFlyout();}},element('span',{className:'acid-ws-fly-name'},name),element('span',{className:'acid-ws-fly-time'},i?'昨天':'刚刚'))));
    flyout.append(list);document.body.append(flyout);controller.mask(flyout,{kind:'hover',direction:'left-right'});
  }
  function setStyle(value){
    closeFlyout();drawerTransition?.finish(false);style=value;
    if(style==='next')html.dataset.acidSidebar='next';else html.removeAttribute('data-acid-sidebar');
    $('.wtg9ga_footArea').dataset.acidDrawer='closed';$('.acid-drawer-handle').setAttribute('aria-expanded','false');setHandle(false);
    renderList();
  }
  // Mirrors AppearanceFooter: quiet SYS handle, workspace colour + CLOSE while open.
  function setHandle(open){const handle=$('.acid-drawer-handle');handle.dataset.state=open?'open':'idle';handle.querySelector('.acid-drawer-meter').hidden=open;handle.querySelector('.acid-drawer-chevron').textContent=open?'⌄ CLOSE':'⌃';}
  function toggleDrawer(){
    closeFlyout();const area=$('.wtg9ga_footArea'),handle=$('.acid-drawer-handle');
    if(area.dataset.acidClosing){drawerTransition=controller.reopenSurface(area);return;}
    if(area.dataset.acidDrawer==='open')drawerTransition=controller.closeSurface(area,()=>{area.dataset.acidDrawer='closed';handle.setAttribute('aria-expanded','false');setHandle(false);},'menu');
    else{area.dataset.acidDrawer='open';handle.setAttribute('aria-expanded','true');setHandle(true);drawerTransition=controller.mask(area,{kind:'menu'});}
  }
  function openPalette(){
    closeFlyout();if(dialog)return;
    dialog=element('dialog',{className:'demo-dialog','data-acid-dialog-surface':''});
    dialog.append(element('header',{},element('h2',{},'调色盘'),element('button',{'aria-label':'关闭调色盘',onClick:closeDialog},'×')));
    const select=element('select',{'aria-label':'工作区样式',onChange:event=>setStyle(event.target.value)},element('option',{value:'next'},'新版色条'),element('option',{value:'classic'},'经典工作区'));select.value=style;
    dialog.append(element('label',{className:'demo-setting'},element('span',{},'工作区样式'),select));
    const row=element('div',{className:'demo-presets'});
    for(const [key,label] of [['acid','经典酸性'],['orange','工业橙'],['polar','极地信号']])row.append(element('button',{onClick:()=>setPalette(key)},label));
    dialog.append(row,element('p',{},'两种工作区布局即时切换；正式插件会在本机保存偏好。'));
    dialog.addEventListener('cancel',event=>{event.preventDefault();closeDialog();});document.body.append(dialog);dialog.showModal();
  }
  function closeDialog(){if(!dialog)return;const node=dialog;controller.closeSurface(node,()=>{node.close();node.remove();if(dialog===node)dialog=undefined;},'dialog');}
  function openMore(){
    if(menu){menu.remove();menu=undefined;return;}
    menu=element('section',{className:'demo-more-menu','data-menu-material':'','data-acid-motion-owned':'menu',role:'menu'});
    ['设置','工作区','帮助'].forEach(title=>menu.append(element('button',{role:'menuitem',onClick:()=>{menu.remove();menu=undefined;}},title)));
    document.body.append(menu);controller.mask(menu,{kind:'menu'});
  }
  document.addEventListener('click',event=>{
    const button=event.target.closest('button');if(!button)return;
    if(button.matches('.acid-drawer-handle'))toggleDrawer();
    if(button.matches('[data-palette]'))openPalette();
    if(button.id==='style-toggle')setStyle(style==='next'?'classic':'next');
    if(button.dataset.mode)setPalette(palette,button.dataset.mode==='adaptive'?'night':button.dataset.mode);
    if(button.hasAttribute('data-native-more'))openMore();
  });
  document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeFlyout();if(menu){menu.remove();menu=undefined;}else if(!dialog&&$('.wtg9ga_footArea').dataset.acidDrawer==='open')toggleDrawer();}});
  $('.mP3x-q_centerCol').addEventListener('pointerenter',closeFlyout);
  setPalette();renderList();
  if(new URL(location.href).searchParams.get('scene')==='deliverables'){$('#deliverables').hidden=false;setPalette('acid','day');}
  window.showcase={setPalette,setWorkspace,setStyle,showFlyout,closeFlyout,toggleDrawer,openPalette,closeDialog,setCollapsed,setPreview,
    setDeliverables(visible){$('#deliverables').hidden=!visible;},
    inspect(){return{mode,palette,style,active,overflow:html.scrollWidth>innerWidth,fonts:document.fonts.check('20px "Industrial GRID"')&&document.fonts.check('12px "Industrial SIGNAL"')};}};
  document.fonts.ready.then(()=>window.showcaseReady=true);
  window.addEventListener('pagehide',()=>controller.dispose(),{once:true});
})();
