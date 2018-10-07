const ctrlFileLoad = require('./FileLoad');
const ctrlFileSave = require('./FileSave');
const ml = require('./MultiLanguage');
const PROFILE = require('minimist')(process.argv.slice(2)).profile || 'PROD';
const {webContents, ipcMain} = require('electron');

// FIXME it must not be possible to access all that without defining the very first thing

module.exports =
  function (languageCode) {
    ml.code = languageCode;
    return function () {
      // TODO Language of shortcuts
      const result = [
        {
          label: ml.get('menu-file'),
          submenu: [
            {
              label: ml.get('menu-file-open'),
              accelerator: 'CmdOrCtrl+O',
              click() {
                ctrlFileLoad.load();
              }
            },
            {
              label: ml.get('menu-file-save'),
              accelerator: 'CmdOrCtrl+S',
              click() {
                ctrlFileSave.save();
              }
            },
            {
              label: ml.get('menu-file-save-as'),
              accelerator: 'CmdOrCtrl+Shift+S',
              click() {
                ctrlFileSave.saveAs();
              }
            },
            {
              type: 'separator'
            },
            {
              role: 'quit',
              label: ml.get('menu-file-quit'),
              accelerator: 'CmdOrCtrl+Q',
            },
          ]
        },
        {
          label: ml.get('menu-edit'),
          submenu: [
            {
              label: ml.get('menu-edit-things'),
              accelerator: 'CmdOrCtrl+1',
              click() {
                webContents.getAllWebContents().forEach(wc => wc.send('app-area-changed', 'manage-things'));
              }
            },
            {
              label: ml.get('menu-edit-categories'),
              accelerator: 'CmdOrCtrl+2',
              click() {
                webContents.getAllWebContents().forEach(wc => wc.send('app-area-changed', 'manage-categories'));
              }
            },
            {
              type: 'separator'
            },
            {
              role: 'cut',
              label: ml.get('menu-edit-cut')
            },
            {
              role: 'copy',
              label: ml.get('menu-edit-copy')
            },
            {
              role: 'paste',
              label: ml.get('menu-edit-paste')
            },]
        },
        {
          label: ml.get('menu-language'),
          submenu: [
            {
              label: 'English',
              click() {
                webContents.getAllWebContents().forEach(wc => wc.send('change-language', 'en'));
                ml.code = 'en';
              }
            },
            {
              label: 'Deutsch',
              click() {
                webContents.getAllWebContents().forEach(wc => wc.send('change-language', 'de'));
                ml.code = 'de';
              }
            }
          ]
        },
        {
          label: ml.get('menu-help'),
          submenu: [
            {
              label: ml.get('menu-help-help'),
              click() {
                webContents.getAllWebContents().forEach(wc => wc.send('app-area-changed', 'help'));
              }
            },
            {
              label: ml.get('menu-help-credits'),
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
    }
  };

ipcMain.on('save-requested', () => ctrlFileSave.save());