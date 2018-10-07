const ipcRenderer = require('electron').ipcRenderer;

const projectListener = new ProjectListener();
const appStorage = new AppStorage();
const ml = new MultiLanguage();

const STARTER = new Starter();
const APP = STARTER.start();
