const ctrlFileLoad = require('./FileLoad');
const ctrlFileSave = require('./FileSave');
const PROFILE = require('minimist')(process.argv.slice(2)).profile || 'PROD';
const {webContents, ipcMain} = require('electron');

module.exports = function () {
    // TODO Add Ctrl+Z and Ctrl+C etc. It is for free!
    const result = [
        {
            label: 'File',
            submenu: [
                {
                    label: 'Open',
                    accelerator: 'CmdOrCtrl+O',
                    click() {
                        ctrlFileLoad.load();
                    }
                },
                {
                    label: 'Save',
                    accelerator: 'CmdOrCtrl+S',
                    click() {
                        ctrlFileSave.save();
                    }
                },
                {
                    label: 'Save as',
                    accelerator: 'CmdOrCtrl+Shift+S',
                    click() {
                        ctrlFileSave.saveAs();
                    }
                },
                {type: 'separator'},
                {
                    role: 'quit',
                    accelerator: 'CmdOrCtrl+Q',
                },
            ]
        },
        {
            label: 'Edit',
            submenu: [
                {
                    label: 'Things',
                    accelerator: 'CmdOrCtrl+1',
                    click() {
                        webContents.getAllWebContents().forEach(wc => wc.send('app-area-changed', 'manage-things'));
                    }
                },
                {
                    label: 'Categories',
                    accelerator: 'CmdOrCtrl+2',
                    click() {
                        webContents.getAllWebContents().forEach(wc => wc.send('app-area-changed', 'manage-categories'));
                    }
                }
            ]
        },
        {
            label: 'Help',
            submenu: [
                {
                    label: 'Help',
                    click() {
                        webContents.getAllWebContents().forEach(wc => wc.send('app-area-changed', 'help'));
                    }
                },
                {
                    label: 'Credits',
                    click() {
                        webContents.getAllWebContents().forEach(wc => wc.send('app-area-changed', 'credits'));
                    }
                },
            ]
        }
    ];
    if (PROFILE.toUpperCase() === 'DEV') {
        let devMenuItem = {
            label: 'Dev',
            submenu: [
                {role: 'reload'},
            ]
        };
        result.push(devMenuItem);
    }
    return result;
};

ipcMain.on('save-requested', () => {
    console.info('save requested');
    ctrlFileSave.save();
});