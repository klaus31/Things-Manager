import {ml} from './../../config/begin-config.js';
import {Geodata} from "./model/Geodata.js";
import {Rating} from "./model/Rating";

export class DataTypeValueUtil {

  constructor() {
  }

  static getInitValueOfType(type) {
    switch (type) {
      case 'date':
      case 'time':
      case 'datetime-local':
      case 'week':
      case 'month':
        return moment().format();
      case 'number':
      case 'range':
      case 'rating':
        return 0;
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
    switch (type) {
      case 'date':
      case 'time':
      case 'datetime-local':
      case 'week':
      case 'month':
        return !isNaN(new Date(value));
      case 'number':
      case 'range':
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

  static formatContent(type, content, format) {
    let geoURL;
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
        return content; // TODO make stars of it
      case 'checkbox':
        if (format === 'html') {
          return content ? '<span class="glyphicon glyphicon-ok"></span>' : '<span class="glyphicon glyphicon-remove"></span>';
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