if (!nodeGetFileContent) throw 'nodeGetFileContent required to show contents';
if (!APP_VERSION) throw 'APP_VERSION required to show in Front';
if (!openExternalHttp) throw 'openExternalHttp required to open links external';
if (!ipcRenderer) throw 'ipcRenderer required to inform main process';

const projectListener = new ProjectListener();
const appStorage = new AppStorage();
const ml = new MultiLanguage();

const STARTER = new Starter();
const APP = STARTER.start();
