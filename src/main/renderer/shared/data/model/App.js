class App {

  constructor() {
    this._project = new Project();
    this._currentArea = new CurrentArea();
    this.currentFile = null;
    this.dataModellVersion = 1;
    this._languageCode = 'en';
  }

  get languageCode() {
    return this._languageCode;
  }

  set languageCode(languageCode) {
    if (languageCode !== 'de' && languageCode !== 'en') throw 'unsupported language ' + languageCode;
    this._languageCode = languageCode;
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
    app._languageCode = json.languageCode;
    return app;
  }
}