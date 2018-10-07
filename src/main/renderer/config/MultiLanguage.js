class MultiLanguage {

  get(key) {
    if (!TEXTS[key]) throw key + ' does not exist';
    let result = TEXTS[key][APP.languageCode];
    for (let i = 1; i < arguments.length; i++) {
      result = result.replace('{' + i + '}', arguments[i]);
    }
    return result;
  }
}