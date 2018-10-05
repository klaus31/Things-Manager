const {dialog, win} = require('electron');
const daoThingFile = require('./DaoThingFile');

class FileLoad {
    load() {
        const options = {
            title: 'Open things ...',
            properties: ['openFile'],
            filters: [
                {name: 'Things-Manager-Files', extensions: ['tmf']},
                {name: 'All Files', extensions: ['*']}
            ],
        };
        dialog.showOpenDialog(win, options, (f) => !f || daoThingFile.load(f[0]));
    }
}

module.exports = new FileLoad();