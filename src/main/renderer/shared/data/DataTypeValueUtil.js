import {ml} from './../../config/MultiLanguage.js';
import {Geodata} from "./model/Geodata.js";
import {Rating} from "./model/Rating";
import {preselectionValueService} from "./PreselectionValueService";

export class DataTypeValueUtil {

  constructor() {
  }

  static getInitValueOfType(type) {
    if (type.startsWith('preselection')) return preselectionValueService.findFirstOf(type);
    switch (type) {
      case 'date':
      case 'time':
      case 'datetime-local':
      case 'week':
      case 'month':
        return moment().format();
      case 'number':
      case 'year':
      case 'timeperiod':
        return 0;
      case 'range':
      case 'rating':
      case 'float':
      case 'euro':
      case 'dollar':
        return 0.00;
      case 'color':
        return '#dddddd';
      case 'url':
        return 'http://????';
      case 'checkbox':
        return '';
      case 'geodata':
        return new Geodata().toString();
      default:
        return ml.get('54r0a5Fb+W4Zp3zZ');
    }
  }

  static getDateTimeFormat(type) {
    switch (type) {
      case 'date':
        return 'L';
      case 'month':
        return 'MMMM YYYY';
      case 'week':
        return 'W / YYYY';
      case 'datetime-local':
        return 'LLL';
      case 'time':
        return 'LT';
      default:
        throw 'unknown type ' + type;
    }
  }

  static valueCompatible(type, value) {
    if (type.startsWith('preselection')) return false;
    switch (type) {
      case 'date':
      case 'time':
      case 'datetime-local':
      case 'week':
      case 'month':
        return !isNaN(new Date(value));
      case 'number':
      case 'year':
      case 'range':
      case 'float':
      case 'euro':
      case 'dollar':
      case 'timeperiod':
        return !isNaN(value);
      case 'rating':
        return Rating.isValidValue(value);
      case 'color':
        return !!value.match(/^#[0-9a-f]{6}$/i);
      case 'url':
        return !!value.match(/^https?:\/\/[^ ]+$/i);
      case 'geodata':
        return new Geodata(value).isComplete();
      case 'checkbox':
        return value === true || value === false;
      default:
        return true;
    }
  }

  static formatContent(type, content, format, colors) {
    colors = colors || {};
    colors.colorText = colors.colorText || 'black';
    colors.colorBackground = colors.colorBackground || 'white';
    let geoURL;

    function getStars(count) {
      let i = 0;
      let result = '';
      let vmOn = {fillColor: colors.colorText, strokeColor: colors.colorText};
      let vmOff = {fillColor: colors.colorBackground, strokeColor: colors.colorText};
      while (i++ < Rating.MAX) {
        let vm = i <= count ? vmOn : vmOff;
        result += nodeGetTemplate('star', vm);
      }
      return result;
    }

    if(type && type.startsWith('preselection')) return preselectionValueService.valueOf(content);

    switch (type) {
      case 'time':
        return moment('1970-01-01T' + content).format(DataTypeValueUtil.getDateTimeFormat(type));
      case 'date':
      case 'month':
      case 'week':
      case 'datetime-local':
        return moment(content).format(DataTypeValueUtil.getDateTimeFormat(type));
      case 'range':
        return content + ' %';
      case 'rating':
        return getStars(content);
      case 'number':
        return ml.countrySpecificNumberFormat(content, 0);
      case 'float':
        return ml.countrySpecificNumberFormat(content, 2);
      case 'euro':
        return ml.countrySpecificNumberFormat(content, 2) + ' €';
      case 'dollar':
        return ml.countrySpecificNumberFormat(content, 2) + ' $';
      case 'timeperiod':
        return content + ' seconds'; // TODO ml and more complex logic
      case 'checkbox':
        if (format === 'html') {
          let vm = {fillColor: colors.colorBackground, strokeColor: colors.colorText};
          return content ? nodeGetTemplate('circle-checked', vm) : nodeGetTemplate('circle', vm);
        } else if (format === 'text') {
          return content ? '+' : '-';
        } else {
          throw 'need format';
        }
      case 'geodata':
        return content.toString();
      case 'url':
        let aContent = content;
        if (aContent.length > 30) {
          aContent = aContent.substr(0, 27) + '...';
        }
        return aContent;
      default:
        return content;
    }
  }

  static isLinkable(content, type) {
    if (typeof content !== 'string') {
      return false;
    }
    if (type === 'geodata') {
      return new Geodata(content).isComplete();
    } else {
      return content.match(/^https?:\/\/[^ ]+$/i);
    }
  }

  static getAsLink(content, type) {
    if (type === 'geodata') {
      return new Geodata(content).getAsLink();
    } else {
      return content;
    }
  }
}