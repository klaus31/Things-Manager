export class Rating {

  constructor(value) {
    if (value !== null && !Rating.isValidValue(value)) throw value + ' is invalid';
    this._value = Number(value) || 0;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    if (!Rating.isValidValue(value)) throw value + ' is invalid';
    this._value = Number(value);
  }

  static isValidValue(value) {
    return !isNaN(Number(value)) && Number(value) >= 0 && Number(value) <= Rating.MAX;
  }

  static get MAX() {
    return 5;
  }
}