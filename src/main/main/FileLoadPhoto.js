const {dialog, win, webContents} = require('electron');
const HomeDataService = require('./HomeDataService');

class FileLoadPhoto {
  constructor(uuid) {
    this._uuid = uuid;
    this._homeDataService = new HomeDataService();
  }

  addPhoto() {
    const options = {
      title: 'Open photo ...', // TODO Multi-Language
      properties: ['openFile'],
      filters: [
        {name: 'Photo', extensions: ['png', 'jpg', 'jpeg', 'gif']}
      ],
    };
    dialog.showOpenDialog(win, options, (filePath) => {
      const result = {
        filePath: filePath[0],
        internFileName: this._homeDataService.copyImage(filePath[0]),
        uuid: this._uuid
      };
      webContents.getAllWebContents().forEach(wc => wc.send('photo-added', result));
    });
  }
}

module.exports = FileLoadPhoto;