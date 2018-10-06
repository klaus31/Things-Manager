class MultiLanguage {

  get(key, a, b, c, d) {
    if (!TEXTS[key]) throw key + ' does not exist';
    let result = TEXTS[key][APP.languageCode];
    if (a) {
      result = result.replace("{1}", a);
    }
    if (b) {
      result = result.replace("{2}", b);
    }
    if (c) {
      result = result.replace("{3}", c);
    }
    if (d) {
      result = result.replace("{4}", d);
    }
    return result;
  }
}