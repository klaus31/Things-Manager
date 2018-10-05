class BackwardCompatibilityService {

  constructor(json) {
    this._json = json;
  }

  upgradeToCurrentVersion() {
    switch (this._json.dataModellVersion) {
      case 1:
        return this._json;
      default:
        throw 'Not supported version: ' + this._json.dataModellVersion;
    }
  }
}