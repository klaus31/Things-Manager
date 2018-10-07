class MultiLanguage {

  constructor() {
    this._texts = {
      ...TEXTS_ADD_FIRST_THING,
      ...TEXTS_MANAGE_THINGS
    };
  }

  get(key) {
    if (!this._texts[key]) throw key + ' does not exist';
    let result = this._texts[key][APP.languageCode];
    for (let i = 1; i < arguments.length; i++) {
      result = result.replace('{' + i + '}', arguments[i]);
    }
    return result;
  }
}