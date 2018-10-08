// JavaScript root modifications (YEAH!)
String.prototype.hashCode = function () {
  return this.split("").reduce(function (a, b) {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a
  }, 0);
};

if (!APP_VERSION) throw 'APP_VERSION required to show in Front';
if (!openExternalHttp) throw 'openExternalHttp required to open links external';
if (!ipcRenderer) throw 'ipcRenderer required to inform main process';

const projectListener = new ProjectListener();
const appStorage = new AppStorage();
const ml = new MultiLanguage();

const STARTER = new Starter();
const APP = STARTER.start();
