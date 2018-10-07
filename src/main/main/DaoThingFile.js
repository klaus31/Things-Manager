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
      APP.rendererData.currentFile = filename;
      fs.writeFile(filename, JSON.stringify(APP.rendererData), 'utf8', function (err) {
        if (err) throw err;
        webContents.getAllWebContents().forEach(wc => wc.send('data-persisted', APP.rendererData));
      });
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