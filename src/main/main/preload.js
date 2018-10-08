/** ship every required node stuff to the renderer process */

const shell = require('electron').shell;
window.ipcRenderer = require('electron').ipcRenderer;

window.openExternalHttp = function (url) {
  if (url.match(/^https?:\/\/.+/)) {
    shell.openExternal(url);
  } else {
    console.error('Only http://... and https://... allowed to open external');
  }
};