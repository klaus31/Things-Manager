const Server = require('./server');
const {app, BrowserWindow, Menu, webContents} = require('electron');
const path = require('path');
const ml = require('./MultiLanguage');
const createMenuTemplate = require('./MenuTemplateFactory');
const PROFILE = require('minimist')(process.argv.slice(2)).profile || 'PROD';

// we need an unsafe-eval for working with vuejs.
// however: nodeIntegration is set to false
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

let win;

function createWindow() {
  win = new BrowserWindow({
    frame: true,
    backgroundColor: 'transparent',
    autoHideMenuBar: false,
    icon: path.join(__dirname, 'icon-64x64.png'),
    minWidth: 1050,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: false, // do not change!
      preload: path.join(__dirname, 'preload.js')
    }
  });
  win.maximize();
  win.setMenuBarVisibility(true);
  win.loadURL('http://127.0.0.1:8125/index.html');

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
