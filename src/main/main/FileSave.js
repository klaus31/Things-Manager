const {dialog, win} = require('electron');
const daoThingFile = require('./DaoThingFile');
const ml = require('./MultiLanguage');

class FileSave {

  saveAs() {
    const options = {
      title: ml.get('save-things-as'),
      filters: [
        {name: ml.get('things-manager-files'), extensions: ['tmf']},
        {name: ml.get('all-files'), extensions: ['*']}
      ],
    };
    dialog.showSaveDialog(win, options, daoThingFile.persist);
  }

  exportAsExcel() {
    const options = {
      title: ml.get('export-things-as-excel'),
      filters: [
        {name: ml.get('excel-files'), extensions: ['xlsx']}
      ],
    };
    dialog.showSaveDialog(win, options, daoThingFile.persist);
  }

  save() {
    if (daoThingFile.currentFile && require('fs').existsSync(daoThingFile.currentFile)) {
      daoThingFile.persist(daoThingFile.currentFile);
    } else {
      this.saveAs();
    }
  }
}

module.exports = new FileSave();