var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
  console.log('requested: ' + request.url);

  const basedir = request.url.match(/^\/node_modules/) ? './' : './main/renderer';
  const filePath = basedir + request.url;

  const extname = path.extname(filePath);
  let contentType = 'text/html';
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.less':
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }
  fs.readFile(filePath, function (error, content) {
    if (error) {
      console.error('oh no ...', error);
    }
    else {
      response.writeHead(200, {'Content-Type': contentType});
      response.end(content, 'utf-8');
    }
  });
}).listen(8125);
console.info('Server running at http://127.0.0.1:8125/');