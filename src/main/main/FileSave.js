const {dialog, win} = require('electron');
const daoThingFile = require('./DaoThingFile');

class FileSave {

    saveAs() {
        const options = {
            title: 'Save things as ...',
            filters: [
                {name: 'Things-Manager-Files', extensions: ['tmf']},
                {name: 'All Files', extensions: ['*']}
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