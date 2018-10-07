// JavaScript root modifications (YEAH!)
String.prototype.hashCode = function () {
  return this.split("").reduce(function (a, b) {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a
  }, 0);
};

const ipcRenderer = require('electron').ipcRenderer;

const projectListener = new ProjectListener();
const appStorage = new AppStorage();
const ml = new MultiLanguage();

const STARTER = new Starter();
const APP = STARTER.start();
