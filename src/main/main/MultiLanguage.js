class MultiLanguage {

  constructor() {
    this._texts = require('./texts');
    this._code = 'en';
    this._onCodeChanged = null;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    let fireCodeChanged = this._onCodeChanged && this._code && this._code !== code;
    this._code = code;
    if (fireCodeChanged) {
      this._onCodeChanged(code);
    }
  }

  set onCodeChanged(onCodeChanged) {
    this._onCodeChanged = onCodeChanged;
  }


  get(key) {
    if (!this._texts[key]) throw key + ' does not exist';
    return this._texts[key][this._code];
  }
}

module.exports = new MultiLanguage();