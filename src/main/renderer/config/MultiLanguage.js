import {TEXTS_ADD_FIRST_THING} from './../add-first-thing/texts.js';
import {TEXTS_MANAGE_THINGS} from './../manage-things/texts.js';
import {TEXTS_MANAGE_THINGS_ADD_NEW_THING} from './../add-new-thing/texts.js';
import {TEXTS_MANAGE_ANALYZE_THINGS} from './../analyze-things/texts.js';
import {TEXTS_MANAGE_CATEGORIES} from './../manage-categories/texts.js';
import {TEXTS_SHARED} from './../shared/texts.js';
import {TEXTS_CONFIG} from './../config/texts.js';
import {TEXTS_HELP} from './../help/texts.js';
import {TEXTS_CREDITS} from './../credits/texts.js';
import {APP} from "../config/begin-config.js";

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

  countrySpecificNumberFormat(number, decimalPlaces) {
    const options = {};
    options.padRight = decimalPlaces || 0; // does not show any effect :(
    number = parseFloat(number).toFixed(decimalPlaces);
    switch (APP.languageCode) {
      case 'de':
        options.integerSeparator = '.';
        options.decimal = ',';
        return formatNumber(number, options);
      case 'en':
        options.integerSeparator = ',';
        options.decimal = '.';
        return formatNumber(number, options);
      default:
        return number;
    }
  }
}

export let ml = new MultiLanguage();