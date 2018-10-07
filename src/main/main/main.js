const {app, BrowserWindow, Menu, webContents, ipcMain} = require('electron');
const path = require('path');
const ml = require('./MultiLanguage');
const createMenuTemplate = require('./MenuTemplateFactory');
const PROFILE = require('minimist')(process.argv.slice(2)).profile || 'PROD';

let win;

function createWindow() {
  win = new BrowserWindow(
    {
      frame: true,
      backgroundColor: 'transparent',
      autoHideMenuBar: false,
      icon: path.join(__dirname, 'icon-64x64.png'),
      width: 1500,
      height: 1000,
    });
  win.setMenuBarVisibility(true);
  win.loadFile('main/renderer/index.html');

  if (PROFILE.toUpperCase() === 'DEV') win.webContents.openDevTools();
  else win.setMenu(null);

  win.on('closed', () => {
    webContents.getAllWebContents().forEach(wc => wc.send('app-closed'));
    win = null
  });
  Menu.setApplicationMenu(Menu.buildFromTemplate(createMenuTemplate('en')(win)));
  ml.onCodeChanged = languageCode => Menu.setApplicationMenu(Menu.buildFromTemplate(createMenuTemplate(languageCode)(win)));
}


app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
});
