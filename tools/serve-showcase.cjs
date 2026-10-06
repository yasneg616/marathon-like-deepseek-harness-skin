// Local documentation preview. No Harness profile, SDK or authentication is loaded.
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const root = path.resolve(__dirname, '..');
const mime = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.svg':'image/svg+xml', '.woff2':'font/woff2', '.png':'image/png', '.gif':'image/gif', '.md':'text/plain; charset=utf-8' };
function startShowcase(port = 0) {
  const server = http.createServer((req, res) => {
    try {
      const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      if (pathname === '/showcase-runtime.js') {
        const original = fs.readFileSync(path.join(root, 'lib/client.js'), 'utf8');
        const anchor = "return { inject: ['slots'";
        if (original.split(anchor).length !== 2) throw new Error('Production module export changed; rebuild the preview adapter.');
        const runtime = original.replace(anchor, "return { createAcceptedMotionController, createMaxBerserkRuntime, WorkspaceRailButtons, paintDigits, CSS, MASTHEAD, SYMBOL, inject: ['slots'");
        res.writeHead(200, {'Content-Type':mime['.js'], 'Cache-Control':'no-store'}); res.end(runtime); return;
      }
      const relative = pathname === '/' ? 'docs/showcase/index.html' : pathname.replace(/^\/+/, '');
      const file = path.resolve(root, relative);
      const allowed = /^(?:docs\/(?:showcase|media)\/|assets\/)/.test(relative);
      if (!allowed || !file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
        res.writeHead(404); res.end('Not found'); return;
      }
      res.writeHead(200, {'Content-Type':mime[path.extname(file)] || 'application/octet-stream', 'Cache-Control':'no-store'});
      fs.createReadStream(file).pipe(res);
    } catch {
      res.writeHead(400); res.end('Invalid preview request');
    }
  });
  return new Promise(resolve => server.listen(port, '127.0.0.1', () => resolve({server, url:`http://127.0.0.1:${server.address().port}`})));
}
if (require.main === module) startShowcase(Number(process.argv[2]) || 19411).then(({url}) => console.log(url));
module.exports = { startShowcase };
