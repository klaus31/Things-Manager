const fs = require('fs');
const {webContents, ipcMain} = require('electron');
let appData = null;

class DaoThingFile {

  load(filename, callback) {
    if (filename) {
      fs.readFile(filename, function (err, data) {
        if (err) throw err;
        if (callback) {
          callback(data);
        }
        let app = JSON.parse(data);
        app.currentFile = filename;
        webContents.getAllWebContents().forEach(wc => wc.send('data-loaded', app));
      });
    }
  }

  persist(filename) {
    if (filename) {
      fs.writeFile(filename, appData, function (err) {
        if (err) throw err;
        let app = JSON.parse(appData);
        app.currentFile = filename;
        webContents.getAllWebContents().forEach(wc => wc.send('data-persisted', app));
      });
    }
  }

  get currentFile() {
    if (!appData) {
      return null;
    } else {
      return JSON.parse(appData).currentFile;
    }
  }

}

ipcMain.on('app-changed', (event, newAppData) => {
  appData = newAppData;
});

module.exports = new DaoThingFile();