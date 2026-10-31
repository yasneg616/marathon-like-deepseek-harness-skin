// The native command menu is bottom-anchored; reserve both headers above it.
function installComposerMenuClearance(){
  const key='--acid-composer-menu-height',owned=new Map();let frame=0;
  const release=(node,previous)=>{if(previous.value)node.style.setProperty(key,previous.value,previous.priority);else node.style.removeProperty(key);};
  function sync(){
    const menus=new Set(document.querySelectorAll(moduleSelector(':is(.RlGAzG_card,[data-composer-card=true]) [data-trigger-menu]')));
    for(const[node,previous]of owned)if(!menus.has(node)){release(node,previous);owned.delete(node);}
    for(const menu of menus){
      if(!owned.has(menu))owned.set(menu,{value:menu.style.getPropertyValue(key),priority:menu.style.getPropertyPriority(key)});
      const masthead=document.querySelector('.acid-masthead')?.getBoundingClientRect();
      const header=menu.closest(moduleSelector('.Dc7zOa_root'))?.querySelector(moduleSelector('.Dc7zOa_header'))?.getBoundingClientRect();
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

// Classic rows carry the number and, when the palette dialog was used, the colour picked for that
// workspace. The default identity palette is deliberately not painted: ten saturated bars would
// fight the monochrome sheet, so an unpicked workspace keeps the ink it always had.
function syncWorkspaceOrdinals(items,numbers,colors){
  const ordinals=new Map(items.map((workspace,i)=>[String(workspace.workspaceId),formatWorkspaceIndex(numbers?.[String(workspace.workspaceId)]??i+1)]));
  for(const row of document.querySelectorAll('[data-slot="sidebar.workspaces"] [data-row-key^="workspace:"]')){
    const id=row.dataset.rowKey.slice(10),index=ordinals.get(id);
    if(index)row.setAttribute('data-acid-ordinal',index);else row.removeAttribute('data-acid-ordinal');
    const color=typeof normalizeHex==='function'?normalizeHex(colors?.[id],null):null;
    if(color){row.style.setProperty('--acid-ws-id',color);row.setAttribute('data-acid-ws-color','');}
    else if(row.hasAttribute('data-acid-ws-color')){row.removeAttribute('data-acid-ws-color');row.style.removeProperty('--acid-ws-id');}
  }
}
