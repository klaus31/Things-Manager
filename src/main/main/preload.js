/** ship every required node stuff to the renderer process */

const shell = require('electron').shell;
window.ipcRenderer = require('electron').ipcRenderer;
window.APP_VERSION = require(__dirname + '/../../package.json').version;

window.openExternalHttp = function (url) {
  if (url.match(/^https?:\/\/.+/)) {
    shell.openExternal(url);
  } else {
    console.error('Only http://... and https://... allowed to open external');
  }
};

window.nodeGetFileContent = function (file) {
  let secureFilePath = require('path').join(__dirname, '..', 'renderer', file.replace(/\.\./g, ''));
  return require('fs').readFileSync(secureFilePath, 'UTF-8');
};