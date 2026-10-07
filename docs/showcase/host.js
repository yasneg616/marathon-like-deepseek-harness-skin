// Small DOM adapter for documentation samples, not a replacement Harness host.
function element(tag, props, ...children) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(props || {})) {
    if (key === 'key' || value === undefined || value === null) continue;
    if (key === 'className') node.className = value;
    else if (key === 'style') for (const [property, color] of Object.entries(value)) node.style.setProperty(property, color);
    else if (['disabled','hidden','inert','required'].includes(key)) { if (value) node.setAttribute(key, ''); }
    else if (/^on[A-Z]/.test(key)) node.addEventListener(key.slice(2).toLowerCase(), value);
    else node.setAttribute(key, String(value));
  }
  for (const child of children.flat(Infinity)) if (child !== null && child !== undefined) node.append(child instanceof Node ? child : document.createTextNode(String(child)));
  return node;
}
window.__ModuleLoader__ = {load(module) {
  window.showcaseCore = module.factory(name => name === 'react' ? {createElement:element} : {createPortal() {}});
}};
