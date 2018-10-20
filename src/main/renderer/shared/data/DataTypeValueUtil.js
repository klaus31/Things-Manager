class DataTypeValueUtil {

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
        return 0;
      case 'color':
        return '#dddddd';
      case 'url':
        return 'http://????';
      case 'checkbox':
        return '';
      case 'geodata':
        return new Geodata();
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
        return !isNaN(value)
      case 'color':
        return !!value.match(/^#[0-9a-f]{6}$/i);
      case 'url':
        return !!value.match(/^https?:\/\/[^ ]+$/i);
      case 'geodata':
        return value instanceof Geodata;
      case 'checkbox':
        return value === true || value === false;
      default:
        return true;
    }
  }

  static formatContent(type, content, format) {
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
      case 'checkbox':
        if (format === 'html') {
          return content ? '<span class="glyphicon glyphicon-ok"></span>' : '<span class="glyphicon glyphicon-remove"></span>';
        } else if (format === 'text') {
          return content ? '+' : '-';
        } else {
          throw 'need format';
        }
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
}