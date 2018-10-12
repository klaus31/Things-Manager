class MultiLanguage {

  constructor() {
    this._texts = {
      ...TEXTS_ADD_FIRST_THING,
      ...TEXTS_MANAGE_THINGS,
      ...TEXTS_MANAGE_THINGS_ADD_NEW_THING,
      ...TEXTS_MANAGE_CATEGORIES,
      ...TEXTS_SHARED,
      ...TEXTS_CONFIG,
      ...TEXTS_CREDITS,
      ...TEXTS_HELP,
      ...TEXTS_MANAGE_ANALYZE_THINGS
    };
  }

  get(key) {
    if (!this._texts[key]) throw key + ' does not exist';
    let result = this._texts[key][APP.languageCode];
    for (let i = 1; i < arguments.length; i++) {
      result = result.replace('{' + i + '}', arguments[i] === null ? '' : arguments[i]);
    }
    return result;
  }

  countrySpecificNumberFormat(number) {
    if (APP.languageCode === 'de') return (number + '').replace(/\./, ',');
    else return number;
  }
}