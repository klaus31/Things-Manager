const fs = require('fs');
const {webContents, ipcMain} = require('electron');

class FileWriterTmf {

  constructor(filename) {
    this._filename = filename;
  }

  write(appData) {
    fs.writeFile(this._filename, JSON.stringify(appData), 'utf8', function (err) {
      if (err) throw err;
      webContents.getAllWebContents().forEach(wc => wc.send('data-persisted', appData));
    });
  }
}

module.exports = FileWriterTmf;