const Server = require('./Server');
const {app, BrowserWindow, Menu, webContents} = require('electron');
const path = require('path');
const ml = require('./MultiLanguage');
const createMenuTemplate = require('./MenuTemplateFactory');
const PROFILE = require('minimist')(process.argv.slice(2)).profile || 'PROD';

// we need an unsafe-eval for working with vuejs.
// however: nodeIntegration is set to false
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

let win;
let server = new Server(8125, '127.0.0.1');

function createWindow() {
  win = new BrowserWindow({
    frame: true,
    colorBackground: 'transparent',
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
  server.start(() => win.loadURL(`${server.getHttpUrl()}index.html`));
  // server.start(() => win.loadURL(`http://0.0.0.0:8080/index.html`));

  if (PROFILE.toUpperCase() === 'DEV') win.webContents.openDevTools();
  else win.setMenu(null);

  win.on('closed', () => {
    server.stop();
    webContents.getAllWebContents().forEach(wc => wc.send('app-closed'));
    win = null
  });
  Menu.setApplicationMenu(Menu.buildFromTemplate(createMenuTemplate('en')(win)));
  ml.onCodeChanged = languageCode => Menu.setApplicationMenu(Menu.buildFromTemplate(createMenuTemplate(languageCode)(win)));
}


app.on('ready', createWindow);

app.on('window-all-closed', () => {
  server.stop();
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
});
