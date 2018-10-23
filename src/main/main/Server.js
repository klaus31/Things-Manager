const http = require('http');
const fs = require('fs');
const path = require('path');

class Server {
  constructor(port, ip) {
    this._port = port;
    this._serverInstance = null;
    this._ip = ip || '0.0.0.0';
  }

  start(callback) {
    this._serverInstance = http.createServer(function (request, response) {
      const basedir = request.url.match(/^\/node_modules/) ? './' : './main/renderer';
      let filePath = basedir + request.url;
      let extname = path.extname(filePath);

      // correct things, when import stuff with es6
      // XXX I do not know why I am the only guy on planet that has to do that
      if (extname === '') {
        filePath += '.js';
        extname = '.js';
      }

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
    }).listen(this._port, this._ip);
    callback();
    console.info(`Server running at ${this.getHttpUrl()}`);
  }

  getHttpUrl() {
    return `http://${this._ip}:${this._port}/`;
  }

  stop() {
    this._serverInstance.close(function () {
      console.info('Server closed!');
    });
  }
}

module.exports = Server;