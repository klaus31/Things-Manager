class NewProjectRequestedCtrl {

  constructor(app) {
    this._app = app;
  }

  handle() {
    const confirmed = !this._app.changesMade || window.confirm(ml.get('0+Jhdv38B5t0u8zb'));
    if (confirmed) {
      localStorage.clear();
      localStorage.setItem('tmp-language', this._app.languageCode);
      localStorage.removeItem('originalHashCodeOfApp');
      window.location.reload();
    }
  }
}