export class BackwardCompatibilityService {

  constructor(json) {
    this._json = json;
  }

  upgradeToCurrentVersion() {
    let me = this;
    function addPhotos() {
      me._json.project.categories.forEach(category => {
        category.things.forEach(thing => {
          thing.photos = thing.photos || [];
        });
      });
    }

    switch (this._json.dataModellVersion) {
      case 1:
        this._json.languageCode = this._json.languageCode || 'en';
        addPhotos();
        // NO break here
      case 2:
        this._json.dataModellVersion = 2; // update in case of 1
        this._json.project.categories.forEach(category => category.preselections = []);
        // NO break here
      case 3:
        this._json.dataModellVersion = 3; // update in case of 2
        return this._json;
      default:
        throw 'Not supported version: ' + this._json.dataModellVersion;
    }
  }
}