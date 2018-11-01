import {starter} from './Starter.js';
import {ml} from "./MultiLanguage.js";
import './PhotoAddedEventHandler.js'
import './global-key-events.js'

if (!nodeGetFileContent) throw 'nodeGetFileContent required to show contents';
if (!APP_VERSION) throw 'APP_VERSION required to show in Front';
if (!openExternalHttp) throw 'openExternalHttp required to open links external';
if (!ipcRenderer) throw 'ipcRenderer required to inform main process';

const APP = starter.start();
export {APP, ml};