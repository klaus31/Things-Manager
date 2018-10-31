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
        if (filePath && filePath[0]) {
          const result = {
            filePath: filePath[0],
            internFileName: this._homeDataService.copyImage(filePath[0]),
            uuid: this._uuid
          };
          console.info(webContents.getAllWebContents().length);
          console.info('-----------------------------');
          webContents.getAllWebContents()[0].send('photo-added', result); // XXX This was sent twice, so I only call send on the first content (and that is ?!!?)
        }
      }
    );
  }
}

module.exports = FileLoadPhoto;