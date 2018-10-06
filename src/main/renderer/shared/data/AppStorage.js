class AppStorage {

  constructor() {
    this._suppressAutoStore = false;
  }

  restoreApp() {
    if (localStorage.getItem('app')) {
      const storedAppJson = JSON.parse(localStorage.getItem('app'));
      const backwardCompatibilityService = new BackwardCompatibilityService(storedAppJson);
      const upgradedJSON = App.fromJSON(backwardCompatibilityService.upgradeToCurrentVersion());
      ipcRenderer.send('app-changed', upgradedJSON.toJSON());
      return upgradedJSON;
    } else {
      return null;
    }
  };

  loadFileData(data) {
    localStorage.setItem('app', JSON.stringify(data));
    this._suppressAutoStore = true;
    window.location.reload();
  }

  storeApp(app) {
    if (!this._suppressAutoStore) {
      localStorage.setItem('app', JSON.stringify(app.toJSON()));
    }
  }
}