class AppStorage {

  constructor() {
    this._suppressAutoStore = false;
  }

  restoreApp() {
    if (localStorage.getItem('app')) {
      const storedAppJson = JSON.parse(localStorage.getItem('app'));
      const backwardCompatibilityService = new BackwardCompatibilityService(storedAppJson);
      const upgradedApp = App.fromJSON(backwardCompatibilityService.upgradeToCurrentVersion());
      ipcRenderer.send('app-changed', upgradedApp.toJSON());
      return upgradedApp;
    } else {
      return null;
    }
  };

  loadFileData(data) {
    localStorage.setItem('app', JSON.stringify(data));
    localStorage.removeItem('app-changes-made');
    this._suppressAutoStore = true;
    window.location.reload();
  }

  storeApp(app) {
    if (!this._suppressAutoStore) {
      localStorage.setItem('app', JSON.stringify(app.toJSON()));
    }
  }
}