const http = require('http');
const fs = require('fs');
const path = require('path');
const HomeDataService = require('./HomeDataService');
const UuidUtil = require('./UuidUtil');

class Server {
  constructor(port, ip) {
    this._port = port;
    this._serverInstance = null;
    this._ip = ip || '0.0.0.0';
    this._homeDataService = new HomeDataService();
  }

  start(callback) {
    let me = this;
    this._serverInstance = http.createServer(function (request, response) {
        function calcExtnameAndFile(request) {

          if (HomeDataService.isHomeData(request.url.replace(/^\//, ''))) {
            const filePath = me._homeDataService.getFilePath(request.url.replace(/^\//, ''));
            const extname = path.extname(filePath);
            return {
              filePath: filePath,
              extname: extname
            };
          } else {
            const basedir = request.url.match(/^\/node_modules/) ? './' : './main/renderer';
            let filePath = basedir + request.url;
            let extname = path.extname(filePath);
            // correct things, when import stuff with es6
            if (extname === '') {
              filePath += '.js';
              extname = '.js';
            }
            return {
              filePath: filePath,
              extname: extname
            };
          }
        }

        let extnameAndFilePath = calcExtnameAndFile(request);


        let contentType = null;
        switch (extnameAndFilePath.extname) {
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
          case '.svg':
            contentType = 'image/svg+xml';
            break;
          case '.png':
            contentType = 'image/png';
            break;
          case '.gif':
            contentType = 'image/gif';
            break;
          case '.jpg':
          case '.jpeg':
            contentType = 'image/jpg';
            break;
        }
        fs.readFile(extnameAndFilePath.filePath, function (error, content) {
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
      }
    ).listen(this._port, this._ip);
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