const FileWriterTmf = require("./FileWriterTmf");
const FileWriterXlsx = require("./FileWriterXlsx");
const fs = require('fs');
const {webContents, ipcMain} = require('electron');
const ml = require('./MultiLanguage');

const APP = {rendererData: null};

class DaoThingFile {

  constructor() {
    ipcMain.on('app-changed', (event, newAppData) => {
      ml.code = newAppData.languageCode; // XXX not solid -> make app global and define two listener
      APP.rendererData = newAppData;
    });
  }

  load(filename, callback) {
    if (filename) {
      fs.readFile(filename, 'utf8', function (err, data) {
        if (err) throw err;
        if (callback) {
          callback(data);
        }
        APP.rendererData = JSON.parse(data);
        APP.rendererData.currentFile = filename;
        webContents.getAllWebContents().forEach(wc => wc.send('data-loaded', APP.rendererData));
      });
    }
  }

  persist(filename) {
    if (!APP.rendererData) throw 'ensure appData is set before persist';
    if (filename) {
      const extname = require('path').extname(filename);
      switch (extname) {
        case '.xlsx':
          new FileWriterXlsx(filename).write(APP.rendererData);
          break;
        default: // assume tmf / json
          APP.rendererData.currentFile = filename;
          new FileWriterTmf(filename).write(APP.rendererData);
      }
    }
  }

  get currentFile() {
    if (!APP.rendererData) {
      return null;
    } else {
      return APP.rendererData.currentFile;
    }
  }
}

module.exports = new DaoThingFile();