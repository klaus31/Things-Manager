class App {

  constructor() {
    this._project = new Project();
    this._currentArea = new CurrentArea();
    this.currentFile = null;
    this.dataModellVersion = 1;
    this._languageCode = 'en';
    moment.locale(this._languageCode);
  }

  get languageCode() {
    return this._languageCode;
  }

  set languageCode(languageCode) {
    if (languageCode !== 'de' && languageCode !== 'en') throw 'unsupported language ' + languageCode;
    moment.locale(languageCode);
    this._languageCode = languageCode;
  }

  get changesMade() {
    return localStorage.getItem('app-changes-made');
  }

  set changesMade(changesMade) {
    if (changesMade) {
      if (!localStorage.getItem('app-changes-made')) {
        localStorage.setItem('app-changes-made', moment().format("YYYYMMDDHHmm"))
      }
    } else {
      localStorage.removeItem('app-changes-made');
    }
  }


  get project() {
    return this._project;
  }

  set project(project) {
    if (!project) throw 'need project';
    if (!(project instanceof Project)) throw 'project invalid';
    this._project = project;
  }

  get currentArea() {
    return this._currentArea;
  }

  setCurrentAreaKey(key) {
    if (!key) throw 'need key';
    this._currentArea.key = key;
  }

  toJSON() {
    return {
      project: this._project.toJSON(),
      currentArea: this._currentArea.toJSON(),
      dataModellVersion: this.dataModellVersion,
      currentFile: this.currentFile,
      languageCode: this._languageCode
    }
  }

  static fromJSON(json) {
    const app = new App();
    app.project = Project.fromJSON(json.project);
    app.currentFile = json.currentFile;
    app.dataModellVersion = json.dataModellVersion;
    app.currentFile = json.currentFile;
    app._currentArea = CurrentArea.fromJSON(json.currentArea);
    app.languageCode = json.languageCode;
    return app;
  }
}