/* Documentation-only sample data; all effects and palette calculations come from lib/client.js. */
(() => {
  const core = window.showcaseCore, html = document.documentElement;
  const $ = selector => document.querySelector(selector);
  const workspaces = [{workspaceId:'design',title:'Design Studio'},{workspaceId:'motion',title:'Motion Studies'},{workspaceId:'prototype',title:'Prototype'}];
  const studio = {night:{accent:'#C5FA31',signal:'#4255FF',surface:'#11151A',text:'#ECF0E8'},day:{accent:'#C5FA31',signal:'#4255FF',surface:'#F1F3EA',text:'#11151A'}};
  const palettes = {studio, orange:core.PALETTE_PRESETS.orange, polar:core.PALETTE_PRESETS.polar};
  const levels = [{id:'low',name:'Low'},{id:'medium',name:'Med'},{id:'high',name:'High'},{id:'max',name:'Max'}];
  let mode='night', palette='studio', workspaceId='design', motion='full', controller;
  let dialog, menu, menuEnergy, menuRuntime, detailEnergy, detailRuntime, currentEffort=2/3;
  const frame=$('.BynINW_frame'), sidebar=$('._2H3hWW_root'), right=$('.OUqwTW_panel'), detail=$('#detail-study');
  $('[data-wordmark]').innerHTML=core.MASTHEAD;
  document.querySelectorAll('[data-symbol]').forEach(node=>node.innerHTML=core.SYMBOL);
  const homeHTML=$('#screen-content').innerHTML;
  function setPalette(next=palette, nextMode=mode) {
    palette=next; mode=nextMode;
    const scheme=core.makeScheme(mode,palettes[palette][mode]);
    for(const [key,value] of Object.entries({...scheme.tokens,...scheme.variables}))html.style.setProperty(key,value);
    html.dataset.industrialMode=mode;
    html.style.colorScheme=mode==='night'?'dark':'light';
    document.querySelectorAll('[data-mode]').forEach(node=>node.setAttribute('aria-pressed',String(node.dataset.mode===mode)));
    for(const surface of document.querySelectorAll('.berserk-surface')) {
      const values={accent:scheme.variables['--acid-accent-display'],signal:scheme.tokens['--dsw-alias-link'],surface:scheme.palette.surface,ink:scheme.text,muted:scheme.tokens['--dsw-alias-label-tertiary'],rail:scheme.tokens['--dsw-alias-border-l3']};
      for(const [role,value] of Object.entries(values))surface.style.setProperty('--max-'+role,value);
    }
    menuEnergy?.configure({motion});detailEnergy?.configure({motion});
    if(dialog?.dataset.kind==='palette')fillPaletteDialog();
    return scheme;
  }
  function layout() {
    const collapsed=frame.hasAttribute('data-sidebar-collapsed');
    const left=collapsed?0:Math.min(230,Math.round(innerWidth*.22));
    const opened=right.hasAttribute('data-sidebar-right-open');
    const rightWidth=opened?Math.min(380,Math.max(0,innerWidth-(collapsed?56:left)-400)):0;
    frame.style.gridTemplateColumns=`${left}px minmax(${opened?'400':'0'}px,1fr) minmax(0px,${rightWidth}px)`;
    right.style.width=right.dataset.sidebarRightPanel==='fullscreen'?'auto':rightWidth+'px';
  }
  function renderWorkspaces() {
    const list=$('#workspace-list');list.replaceChildren();
    if(frame.hasAttribute('data-sidebar-collapsed')) {
      const nav=core.WorkspaceRailButtons({items:workspaces,workspaceId,onPick:setWorkspace,t:key=>key==='workspace'?'工作区':'未命名'});
      list.append(nav);
    } else {
      for(const [index,item] of workspaces.entries()) {
        const button=element('button',{className:'workspace-row','data-acid-workspace':item.workspaceId,'aria-pressed':workspaceId===item.workspaceId,onClick:()=>setWorkspace(item.workspaceId)},element('small',{},core.formatWorkspaceIndex(index+1)),element('span',{},'▱ '+item.title));
        list.append(button);
      }
    }
  }
  function setWorkspace(id) {
    const index=workspaces.findIndex(item=>item.workspaceId===id);if(index<0)return;
    const changed=id!==workspaceId;if(changed)controller?.captureStage();workspaceId=id;
    controller?.calibrateWorkspace($('#workspace-trigger'),index+1,workspaces[index].title);
    $('.session-heading>span').textContent=workspaces[index].title;
    const context=$('.composer-context>span');if(context)context.textContent='▱ '+workspaces[index].title+' ⌄';
    renderWorkspaces();if(changed)controller?.revealStage('workspace');
  }
  function toggleLeft() {
    frame.toggleAttribute('data-sidebar-collapsed');sidebar.classList.toggle('_2H3hWW_collapsed');renderWorkspaces();layout();
  }
  function toggleRight() {
    right.toggleAttribute('data-sidebar-right-open');right.setAttribute('aria-hidden',String(!right.hasAttribute('data-sidebar-right-open')));layout();
  }
  function switchPreview(tab) {
    const previous=right.querySelector('[data-dockkit-pane]'), next=previous.cloneNode(true);
    next.querySelectorAll('.acid-fx,[data-acid-motion-owned]').forEach(node=>node.remove());
    next.querySelectorAll('[data-tab]').forEach(node=>node.setAttribute('aria-selected',String(node.dataset.tab===tab)));
    next.querySelectorAll('.OUqwTW_tabBody').forEach(node=>node.hidden=node.dataset.sidebarRightTab!==tab);
    previous.replaceWith(next);
  }
  function closeDialog() {
    if(!dialog)return;const closing=dialog;
    controller.closeSurface(closing,()=>{closing.close();closing.remove();if(dialog===closing)dialog=undefined;},'dialog');
  }
  function createDialog(title,kind) {
    if(dialog){dialog.close();dialog.remove();}
    dialog=element('dialog',{className:'acid-dialog','aria-label':title,'data-kind':kind},element('div',{className:'acid-dialog-heading'},element('h2',{},title),element('button',{'aria-label':'关闭弹窗','data-close-dialog':''},'×')));
    dialog.addEventListener('cancel',event=>{event.preventDefault();closeDialog();});
    document.body.append(dialog);dialog.showModal();return dialog;
  }
  function fillPaletteDialog() {
    dialog.querySelector('.palette-content')?.remove();
    const content=element('div',{className:'palette-content'}), grid=element('div',{className:'palette-grid'});
    for(const [key,label] of [['accent','酸性色'],['signal','交互色'],['surface','阅读背景'],['text','正文色']]) {
      const color=palettes[palette][mode][key],swatch=element('i',{});swatch.style.background=color;
      grid.append(element('div',{className:'palette-field'},element('span',{},label),element('div',{className:'palette-value'},swatch,element('span',{},color))));
    }
    const presets=element('div',{className:'preset-row'});
    for(const [id,title] of [['studio','酸性绿'],['orange','工业橙'],['polar','极地信号']])presets.append(element('button',{'data-preset':id,'aria-pressed':palette===id},title));
    content.append(grid,presets,element('p',{className:'palette-note'},'遮罩取这四种原始颜色。明暗模式分别保存；正文按对比度处理。'));dialog.append(content);
  }
  function openPalette() {createDialog('调色盘','palette');fillPaletteDialog();}
  function openWorkspacePicker() {
    const dialog=createDialog('选择工作区','workspaces'),list=element('div',{className:'workspace-options'});
    workspaces.forEach((item,i)=>list.append(element('button',{className:'acid-workspace-option','data-pick':item.workspaceId},element('span',{},core.formatWorkspaceIndex(i+1)),element('strong',{},item.title),element('span',{},item.workspaceId===workspaceId?'↗':'+'))));dialog.append(list);
  }
  function sliderMarkup() {
    return '<div class="acid-reason-slider berserk-surface"><span class="acid-max-canvas-owner"></span><div class="acid-reason-rail"><input type="range" min="0" max="3" step="0.001" value="2" aria-label="展示思考强度"></div><div class="acid-reason-levels"><span>Low</span><span>Med</span><span data-current>High</span><span>Max</span></div></div>';
  }
  function attachEnergy(surface,kind,readout) {
    const runtime=core.createMaxBerserkRuntime();
    const instance=runtime.attachBerserk(surface,kind,{motion,speed:1,intensity:1.4,canvasHost:surface.querySelector('.acid-max-canvas-owner'),readout,manageReadout:false,ticks:levels.map((_,i)=>i/3),amountAt:p=>core.effortVisual(levels,p*3).amount,labelAt:p=>core.effortVisual(levels,p*3).label});
    surface.addEventListener('berserk-position',event=>updateReadout(readout,event.detail));
    surface.addEventListener('berserk-progress',event=>updateReadout(readout,event.detail.position));
    function updateReadout(node,p) {
      const visual=core.effortVisual(levels,p*3);node.textContent=visual.label;
      surface.querySelectorAll('.acid-reason-levels>span').forEach((label,i)=>label.toggleAttribute('data-current',i===visual.nearest));
    }
    instance.setPosition(currentEffort,false);updateReadout(readout,currentEffort);setPalette();
    return {runtime,instance};
  }
  function closeMenu() {
    if(!menu)return;const closing=menu;
    controller.closeSurface(closing,()=>{menuRuntime?.dispose();menuEnergy=undefined;menuRuntime=undefined;closing.remove();if(menu===closing)menu=undefined;},'menu');
  }
  function openMenu(kind='random') {
    if(menu){menuRuntime?.dispose();menu.remove();}
    menu=element('section',{className:'acid-model-popover',role:'dialog','aria-label':'模型与思考强度'});
    menu.innerHTML='<header class="acid-model-popover-head"><span>MODEL / REASONING</span><h2>模型与思考强度</h2><button class="acid-model-close" data-close-menu aria-label="关闭模型菜单">×</button></header><div class="acid-model-section"><span>01</span>模型</div><input class="acid-model-search" placeholder="搜索模型" aria-label="搜索展示模型"><div class="acid-model-list"><button class="acid-model-option" aria-selected="true"><span class="acid-model-option-copy"><strong>DeepSeek-V4.1-Flash</strong><small>DeepSeek / 展示目录</small></span><span class="acid-model-check">↗</span></button></div><div class="acid-model-section"><span>02</span>思考强度<output id="menu-effort">High</output></div>'+sliderMarkup()+'<p class="acid-model-note">拖动时连续预览。实际插件松开后保存到模型支持的等级。</p>';
    const width=Math.min(440,innerWidth-24);menu.style.width=width+'px';menu.style.right=Math.max(12,Math.round(innerWidth*.08))+'px';menu.style.top=Math.max(126,Math.min(innerHeight-400,Math.round(innerHeight*.22)))+'px';
    document.body.append(menu);const energy=attachEnergy(menu.querySelector('.berserk-surface'),kind,$('#menu-effort'));menuEnergy=energy.instance;menuRuntime=energy.runtime;
  }
  function setEffort(position,kind) {
    currentEffort=position;if(kind){menuEnergy?.configure({kind});detailEnergy?.configure({kind});}
    menuEnergy?.setPosition(position);detailEnergy?.setPosition(position);
    const label=$('#effort-label');if(label)label.textContent=levels[Math.round(position*3)]?.name||'High';
  }
  function setView(scene) {
    detailRuntime?.dispose();detailEnergy=undefined;detailRuntime=undefined;detail.replaceChildren();detail.hidden=scene==='app';document.body.dataset.scene=scene;
    if(scene==='app')return;
    const copy={feedback:['BUTTON / FEEDBACK','落到四个角上','悬停时厚角收拢，按下时从中心填满。'],composer:['INPUT / READY','开始输入，边线接上','不挪动正文，只点亮边线、厚角和状态灯。'],signal:['STATUS / CHANGE','四块，跟着状态变化','这是一组本地展示状态；同一状态不会反复触发。'],tremor:['MAX / 01','同频震颤','滑块和轨道一起发紧，短距离残影跟着震动。'],afterimage:['MAX / 02','残像追赶','延迟残影拉长，速度线从 High 一路展开到 Max。'],rupture:['MAX / 03','错帧暴走','轨道分片错位，几层重影把边缘撕开。']}[scene];
    if(!copy)return;
    detail.append(element('div',{className:'study-eyebrow'},copy[0]),element('h2',{},copy[1]),element('p',{},copy[2]));
    if(['tremor','afterimage','rupture'].includes(scene)) {
      const box=element('div',{className:'max-study-box'});box.innerHTML='<div class="max-study-head"><span>REASONING / High → Max</span><output id="detail-effort">High</output></div>'+sliderMarkup();detail.append(box);
      const energy=attachEnergy(box.querySelector('.berserk-surface'),scene,$('#detail-effort'));detailEnergy=energy.instance;detailRuntime=energy.runtime;
    } else if(scene==='feedback')detail.append(element('div',{className:'feedback-row'},element('button',{id:'feedback-new'},'＋ 新会话'),element('button',{id:'feedback-workspace'},'▱ 工作区'),element('button',{id:'feedback-open'},'↗ 打开')));
    else if(scene==='composer') {
      const card=element('div',{className:'RlGAzG_card'});card.innerHTML='<textarea data-composer-input="true" aria-label="展示输入框细节" placeholder="想法从这里开始。"></textarea><div class="composer-bottom"><button class="attach-button" aria-label="展示附件反馈">＋</button><span>工作区内修改 ⌄</span><div class="acid-model-controls"><button class="acid-model-trigger">◇ DeepSeek-V4.1-Flash ⌄</button><button class="acid-effort-trigger">▥ High ⌄</button></div><button class="send-button" aria-label="展示输入反馈">↑</button></div>';detail.append(card);
    } else if(scene==='signal')detail.append(element('div',{className:'signal-sample'},element('span',{role:'status',id:'sample-status'},'READY / 等待编辑'),element('button',{id:'update-status'},'更新状态 ↗')));
    detail.append(element('div',{className:'study-stamp'},element('span',{},'PALETTE / CURRENT'),element('span',{},'PRODUCTION MOTION · 1×')));
  }
  function setRoute(route='study') {
    controller.captureStage();
    if(route==='home')$('#screen-content').innerHTML=homeHTML;
    else $('#screen-content').innerHTML='<div class="hero-kicker">002 / MOTION STUDY</div><h1>动效档案<small>定稿</small></h1><p class="hero-note">覆盖，停一拍，再沿原路揭开。</p><div class="file-palette"><i></i><i></i><i></i><i></i></div><pre>01  开屏                 1.15s\n02  侧栏往返             600ms\n03  数字扫描             560ms\n04  菜单往返             500ms\n05  Max                  1× / RANDOM</pre><div class="study-stamp"><span>FOUR COLORS / ONE LANGUAGE</span><span>READY FOR HARNESS</span></div>';
    controller.revealStage('page');
  }
  function intro() {
    const node=element('div',{className:'acid-intro','aria-hidden':true});node.innerHTML='<div class=acid-intro-name>DEEPSEEK<span>HARNESS</span></div><div class=acid-intro-bar></div>';document.body.append(node);setTimeout(()=>node.remove(),1250);
  }
  document.addEventListener('click',event=>{
    const button=event.target.closest('button');if(!button)return;
    if(button.id==='sidebar-toggle')toggleLeft();
    if(button.hasAttribute('data-sidebar-right-toggle'))toggleRight();
    if(button.hasAttribute('data-sidebar-right-expand')){right.dataset.sidebarRightPanel=right.dataset.sidebarRightPanel==='push'?'fullscreen':'push';layout();}
    if(button.dataset.tab)switchPreview(button.dataset.tab);
    if(['palette-trigger','palette-shortcut'].includes(button.id))openPalette();
    if(button.hasAttribute('data-close-dialog'))closeDialog();
    if(button.hasAttribute('data-close-menu'))closeMenu();
    if(button.dataset.preset)setPalette(button.dataset.preset);
    if(button.dataset.mode)setPalette(palette,button.dataset.mode);
    if(button.id==='workspace-trigger')openWorkspacePicker();
    if(button.dataset.pick){setWorkspace(button.dataset.pick);closeDialog();}
    if(['model-trigger','effort-trigger'].includes(button.id)){if(menu)closeMenu();else openMenu();}
    if(button.id==='route-trigger'||button.id==='plugins')setRoute('study');
    if(button.id==='new-session'||button.classList.contains('acid-brand-home'))setRoute('home');
    if(button.id==='update-status')$('#sample-status').textContent=$('#sample-status').textContent.includes('READY')?'SAVED / 已保存':'READY / 等待编辑';
  });
  window.addEventListener('resize',layout);
  setPalette();if(innerWidth<650){frame.setAttribute('data-sidebar-collapsed','');sidebar.classList.add('_2H3hWW_collapsed');}renderWorkspaces();layout();
  controller=core.createAcceptedMotionController(()=>matchMedia('(prefers-reduced-motion:reduce)').matches?'off':motion);
  core.paintDigits($('#workspace-index'),'001');
  const parameters=new URL(location.href).searchParams;
  const requested=parameters.get('scene')||'app';setView(requested);
  if(parameters.get('controls')==='1') {
    html.setAttribute('data-showcase-controls','');
    const tools=element('nav',{className:'showcase-controls','aria-label':'演示场景'},element('small',{},'MOTION STUDY'));
    for(const [scene,title] of [['app','全貌'],['feedback','按钮'],['composer','输入'],['signal','状态'],['tremor','震颤'],['afterimage','残像'],['rupture','错帧']])tools.append(element('button',{'data-scene-pick':scene},title));
    for(const [action,title] of [['intro','开屏'],['charge','蓄力'],['high','High'],['max','Max'],['route','切页'],['hover','悬停反馈'],['press','点击反馈']])tools.append(element('button',{'data-demo-action':action},title));
    document.body.append(tools);layout();
    tools.addEventListener('click',event=>{
      const button=event.target.closest('button');if(!button)return;
      if(button.dataset.scenePick)setView(button.dataset.scenePick);
      const action=button.dataset.demoAction;
      if(action==='intro')intro();
      if(action==='charge')(detailEnergy||menuEnergy)?.sweep();
      if(action==='high')setEffort(2/3);
      if(action==='max')setEffort(1);
      if(action==='route')setRoute($('#screen-content .hero-kicker')?.textContent.includes('002')?'home':'study');
      if(action==='hover'||action==='press') {
        const target=$('#feedback-new');
        target?.dispatchEvent(new PointerEvent(action==='hover'?'pointerover':'pointerdown',{bubbles:true,button:0}));
      }
    });
  }
  window.showcase={setPalette,setWorkspace,setEffort,setView,setRoute,toggleLeft,toggleRight,openPalette,openMenu,closeDialog,closeMenu,switchPreview,intro,
    charge(){(detailEnergy||menuEnergy)?.sweep();},
    setMotion(value){motion=['full','quiet','off'].includes(value)?value:'full';html.dataset.industrialMotion=motion;controller.cancel();menuEnergy?.configure({motion});detailEnergy?.configure({motion});},
    inspect(){return {mode,palette,workspaceId,motion,overflow:html.scrollWidth>innerWidth,fonts:document.fonts.check('20px "Industrial GRID"')&&document.fonts.check('12px "Industrial SIGNAL"'),temporaryLayers:document.querySelectorAll('.acid-approved-mask,.acid-transition-proxy').length};}
  };
  document.fonts.ready.then(()=>{window.showcaseReady=true;});
  window.addEventListener('pagehide',()=>{controller.dispose();menuRuntime?.dispose();detailRuntime?.dispose();},{once:true});
})();
