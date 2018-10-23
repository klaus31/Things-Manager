import {ml} from "./MultiLanguage.js";
import {NewProjectRequestedCtrl} from "./NewProjectRequestedCtrl.js";

export class ResetChangesCtrl {
  constructor(app, ipcRenderer) {
    this._app = app;
    this._ipcRenderer = ipcRenderer;
  }

  start() {
    if (this._app.changesMade) {
      if (this._app.currentFile) {
        const confirmed = window.confirm(ml.get('0+Jhdv38B5t0u8zb'));
        if (confirmed) {
          this._ipcRenderer.send('reload-data-from-file', this._app.currentFile);
        }
      } else {
        new NewProjectRequestedCtrl(this._app).handle();
      }
    }
  }
}