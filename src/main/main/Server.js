const http = require('http');
const fs = require('fs');
const path = require('path');

class Server {
  constructor(port) {
    this._port = port;
    this._serverInstance = null;
  }

  start(callback) {
    this._serverInstance = http.createServer(function (request, response) {
      const basedir = request.url.match(/^\/node_modules/) ? './' : './main/renderer';
      const filePath = basedir + request.url;

      const extname = path.extname(filePath);
      let contentType = null;
      switch (extname) {
        case '.html':
          contentType = 'text/html';
          break;
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
          let headers = {};
          if (contentType) {
            headers['Content-Type'] = contentType;
          }
          response.writeHead(200, headers);
          response.end(content, 'utf-8');
        }
      });
    }).listen(this._port);
    callback();
    console.info(`Server running at http://127.0.0.1:${this._port}/`);
  }

  stop() {
    this._serverInstance.close(function () {
      console.info('Server closed!');
    });
  }
}

module.exports = Server;