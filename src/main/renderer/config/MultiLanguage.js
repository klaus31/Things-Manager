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

  getTimePeriod(unitOrTime) {
    function getPluralUnit(unit) {
      switch (unit) {
        case 'seconds':
          return ml.get('yAhSlELknu4PEP_Q');
        case 'minutes':
          return ml.get('8BysBIgprws5j0mj');
        case 'hours':
          return ml.get('es3dHoiqqsVAU1UU');
        case 'days':
          return ml.get('cNq_WbZk41W1v5bh');
        case 'years':
          return ml.get('3kFRBjbRgOP2coGI');
        default:
          throw 'unknown unit: ' + unit;
      }
    }

    function getSingularUnit(unit) {
      switch (unit) {
        case 'seconds':
          return ml.get('iFUxPvHD6ndSyQfg');
        case 'minutes':
          return ml.get('kSfN8mynH2cOyP6x');
        case 'hours':
          return ml.get('aonvBsOdm6dxHNlh');
        case 'days':
          return ml.get('MTHYzuF/s67fvTbA');
        case 'years':
          return ml.get('670jEjTWiwqx10HN');
        default:
          throw 'unknown unit: ' + unit;
      }
    }

    const time = typeof unitOrTime !== 'string' ? unitOrTime : null;
    const unit = typeof unitOrTime === 'string' ? unitOrTime : null;
    if (time) {
      let results = [];
      if (time.years && Number(time.years)) {
        let unit = Number(time.years) === 1 ? getSingularUnit('years') : getPluralUnit('years');
        results.push(time.years + ' ' + unit);
      }
      if (time.days && Number(time.days)) {
        let unit = Number(time.days) === 1 ? getSingularUnit('days') : getPluralUnit('days');
        results.push(time.days + ' ' + unit);
      }
      if (time.hours && Number(time.hours)) {
        let unit = Number(time.hours) === 1 ? getSingularUnit('hours') : getPluralUnit('hours');
        results.push(time.hours + ' ' + unit);
      }
      if (time.minutes && Number(time.minutes)) {
        let unit = Number(time.minutes) === 1 ? getSingularUnit('minutes') : getPluralUnit('minutes');
        results.push(time.minutes + ' ' + unit);
      }
      if (time.seconds && Number(time.seconds)) {
        let unit = Number(time.seconds) === 1 ? getSingularUnit('seconds') : getPluralUnit('seconds');
        results.push(time.seconds + ' ' + unit);
      }
      if (results.length === 0) {
        return '0 ' + getPluralUnit('seconds');
      } else {
        return results.join(', ');
      }
    } else {
      return getPluralUnit(unit);
    }
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