class DataType {
  constructor(value, label, fallbackFunction) {
    this._value = value;
    this._label = label;
    this._fallbackFunction = fallbackFunction;
  }

  get value() {
    return this._value || this._fallbackFunction();
  }

  get label() {
    return this._label;
  }
}