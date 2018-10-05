class DataTypeValueUtil {

  constructor() {
  }

  static getInitValueOfType(type) {
    switch (type) {
      case 'text':
        return 'New';
      case 'date':
      case 'time':
      case 'datetime-local':
      case 'week':
      case 'month':
        return moment(new Date()).format();
      case 'number':
      case 'range':
        return 0;
      case 'color':
        return '#dddddd';
      case 'url':
        return 'http://????';
      case 'checkbox':
        return '';
      default:
        return 'New';
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
      case 'checkbox':
        return value === true || value === false;
      default:
        return true;
    }
  }
}