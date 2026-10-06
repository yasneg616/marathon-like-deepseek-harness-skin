// The native command menu is bottom-anchored; reserve both headers above it.
function installComposerMenuClearance(){
  const key='--acid-composer-menu-height',owned=new Map();let frame=0;
  const release=(node,previous)=>{if(previous.value)node.style.setProperty(key,previous.value,previous.priority);else node.style.removeProperty(key);};
  function sync(){
    const menus=new Set(document.querySelectorAll('.RlGAzG_card [data-trigger-menu]'));
    for(const[node,previous]of owned)if(!menus.has(node)){release(node,previous);owned.delete(node);}
    for(const menu of menus){
      if(!owned.has(menu))owned.set(menu,{value:menu.style.getPropertyValue(key),priority:menu.style.getPropertyPriority(key)});
      const masthead=document.querySelector('.acid-masthead')?.getBoundingClientRect();
      const header=menu.closest('.Dc7zOa_root')?.querySelector('.Dc7zOa_header')?.getBoundingClientRect();
      const top=Math.max(12,masthead?.bottom??0,header?.height?header.bottom:0);
      const height=Math.max(0,Math.min(400,menu.getBoundingClientRect().bottom-top-8));
      menu.style.setProperty(key,`${height}px`);
    }
  }
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(()=>{frame=0;sync();});};
  const observer=new MutationObserver(schedule);observer.observe(document.body,{subtree:true,childList:true});
  window.addEventListener('resize',schedule);window.addEventListener('scroll',schedule,true);sync();
  return()=>{observer.disconnect();window.removeEventListener('resize',schedule);window.removeEventListener('scroll',schedule,true);if(frame)cancelAnimationFrame(frame);for(const[node,previous]of owned)release(node,previous);owned.clear();};
}

function installSkinMotion(getMotion){return createAcceptedMotionController(getMotion);}

function syncWorkspaceOrdinals(items){
  const ordinals=new Map(items.map((workspace,i)=>[String(workspace.workspaceId),formatWorkspaceIndex(i+1)]));
  for(const row of document.querySelectorAll('[data-slot="sidebar.workspaces"] [data-row-key^="workspace:"]')){
    const index=ordinals.get(row.dataset.rowKey.slice(10));
    if(index)row.setAttribute('data-acid-ordinal',index);else row.removeAttribute('data-acid-ordinal');
  }
}
