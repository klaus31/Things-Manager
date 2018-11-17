const {dialog, win} = require('electron');
const daoThingFile = require('./DaoThingFile');
const ml = require('./MultiLanguage');

class FileLoadTmf {
  load() {
    const options = {
      title: ml.get('open-things'),
      properties: ['openFile'],
      filters: [
        {name: ml.get('things-manager-files'), extensions: ['tmf']},
        {name: ml.get('all-files'), extensions: ['*']}
      ],
    };
    dialog.showOpenDialog(win, options, (f) => !f || daoThingFile.load(f[0]));
  }
}

module.exports = new FileLoadTmf();