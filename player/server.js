const http = require('http');
const fs = require('fs');
const url = require('url');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer();

const rawIndex = require('./assets/template.js');
const { getCourseUrl } = require('./utils.js');

const port = 3000;

const server = http.createServer(async (req, res) => {
  const { pathname } = url.parse(req.url);
  console.log(req.method, pathname)

  try {
    
    if (pathname === '/') {
      const query = url.parse(req.url, true).query;
      const courseManifestUrl = query.course_name ? await getCourseUrl(query.course_name) : 'http://127.0.0.1:3000/courses/' ;
      const index = rawIndex.replace('%URL%', courseManifestUrl)
      res.writeHead(200, { 'Content-Type': 'text/html' });
      return res.end(index);
    }

  /*   if (req.url.startsWith('/courses')) {
      // Cuando entras a localhost:3000, te "redirige" el request a localhost:3001
      // Esto soluciona el error de CORS, pero no deberia ser necesario un proxy
      return proxy.web(req, res, {
        target: 'http://127.0.0.1:3001',
        changeOrigin: true
      })
    } */

    // Archivos estaticos
    if (req.url === '/index.js') {
      var index = fs.readFileSync('./public/index.js');
      res.writeHead(200, { 'Content-Type': 'application/javascript' });
      return res.end(index);
    }

    if (req.url === '/styles.css') {
      var index = fs.readFileSync('./public/styles.css');
      res.writeHead(200, { 'Content-Type': 'text/css' });
      return res.end(index);
    }

    if (req.url === '/scorm-again.min.js') {
      var index = fs.readFileSync('./public/scorm-again.min.js');
      res.writeHead(200, { 'Content-Type': 'aplication/javascript' });
      return res.end(index);
    }
    // Fin archivos estaticos

    // Si no coincide con otra ruta entra al 404
    res.writeHead(404)
    return res.end()

  } catch (err) {
    console.error(err)

    // Si hay un error devuelve 500
    res.writeHead(500)
    return res.end()
  }
})

server.listen(port, () => {
  console.log('Listening at http://127.0.0.1:3000')
});
