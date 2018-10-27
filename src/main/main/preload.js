/** ship every required node stuff to the renderer process */

const shell = require('electron').shell;
window.ipcRenderer = require('electron').ipcRenderer;
window.APP_VERSION = require(__dirname + '/../../package.json').version;
const Handlebars = require('handlebars');

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

window.nodeGetTemplate = function (name, vm) {
  let filePath;
  switch (name) {
    case 'star':
      filePath = require('path').join(__dirname, '..', 'renderer/shared/graphics/star.svg');
      break;
    case 'circle':
      filePath = require('path').join(__dirname, '..', 'renderer/shared/graphics/circle.svg');
      break;
    case 'circle-checked':
      filePath = require('path').join(__dirname, '..', 'renderer/shared/graphics/circle-checked.svg');
      break;
    default:
      throw 'unknown template ' + name;
      return null;
  }
  let content = require('fs').readFileSync(filePath, 'UTF-8');
  return Handlebars.compile(content)(vm);
};