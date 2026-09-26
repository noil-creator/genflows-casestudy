/* Zero-dependency static server for the GenFlows case study site.
   Run:  node "C:/Case studies/site/serve.js"       (default port 4321)
         node serve.js 8080                          (custom port)          */
const http=require('http'), fs=require('fs'), path=require('path');

const ROOT=__dirname;
const PORT=Number(process.argv[2])||4321;
const TYPES={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8',
 '.js':'text/javascript; charset=utf-8','.woff2':'font/woff2','.woff':'font/woff',
 '.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp',
 '.ico':'image/x-icon','.json':'application/json; charset=utf-8'};

http.createServer((req,res)=>{
  let p=decodeURIComponent(req.url.split('?')[0]);
  if(p==='/') p='/index.html';
  if(!path.extname(p)) p+='.html';                     // /uds -> /uds.html
  const file=path.join(ROOT,path.normalize(p).replace(/^(\.\.[\/\\])+/,''));
  if(!file.startsWith(ROOT)){ res.writeHead(403).end('Forbidden'); return; }
  fs.readFile(file,(err,buf)=>{
    if(err){
      res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});
      res.end('<body style="font-family:system-ui;padding:40px"><h1>404</h1>'+
              '<p>Not found: '+p+'</p><p><a href="/">Back to case studies</a></p></body>');
      return;
    }
    res.writeHead(200,{'Content-Type':TYPES[path.extname(file).toLowerCase()]||'application/octet-stream',
                       'Cache-Control':'no-cache'});
    res.end(buf);
  });
}).listen(PORT,()=>{
  console.log('\n  GenFlows case studies running at:\n');
  console.log('    http://localhost:'+PORT+'/\n');
  console.log('  Pages:');
  ['index','uds','sls','shield','emergent3','captain-capital']
    .forEach(s=>console.log('    http://localhost:'+PORT+'/'+(s==='index'?'':s)));
  console.log('\n  Ctrl+C to stop.\n');
});
