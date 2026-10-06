function formatWorkspaceIndex(ordinal){
  if(!Number.isSafeInteger(ordinal)||ordinal<1)throw new RangeError('Workspace ordinal must be a positive safe integer.');
  return ordinal>999?'999＋':String(ordinal).padStart(3,'0');
}

let activeHeader;

function paintDigits(node,value){
  const fragment=document.createDocumentFragment();
  for(const character of value.slice(0,3)){
    const cell=document.createElement('span'),glyph=document.createElement('span');
    cell.className='workspace-digit';glyph.className='workspace-glyph';glyph.textContent=character;
    cell.append(glyph);fragment.append(cell);
  }
  if(value.length>3){const suffix=document.createElement('span');suffix.className='workspace-overflow';suffix.textContent='＋';fragment.append(suffix);}
  node.replaceChildren(fragment);
}

function cancelWorkspaceHeader(){
  activeAcceptedMotion?.cancelWorkspace();
  const current=activeHeader;activeHeader=undefined;
  if(!current)return;
  for(const animation of current.animations)animation.cancel();
  for(const node of current.overlays)node.remove();
  current.button.classList.remove('workspace-switching');
  delete current.button.dataset.switchDirection;
}

async function updateWorkspaceHeader(button,ordinal,name,motion='off'){
  const index=button.querySelector('#workspace-index'),label=button.querySelector('#workspace-name');
  if(Number(index.dataset.ordinal)===ordinal&&label.textContent===name)return;
  if(Number(index.dataset.ordinal)&&motion!=='off'&&activeAcceptedMotion)return activeAcceptedMotion.calibrateWorkspace(button,ordinal,name);
  cancelWorkspaceHeader();paintDigits(index,formatWorkspaceIndex(ordinal));index.dataset.ordinal=String(ordinal);label.textContent=name;
  button.setAttribute('aria-label',`切换工作区：${formatWorkspaceIndex(ordinal)} ${name}`);
}
