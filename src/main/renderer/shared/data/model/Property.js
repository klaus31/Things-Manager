class Property {

  constructor(key, value) {
    if (key && !(key instanceof PropertyKey)) throw 'key must be a property key';
    this._key = key || new PropertyKey('Attribute', 'text');
    this._value = value || DataTypeValueUtil.getInitValueOfType(this._key.type);
  }

  get key() {
    return this._key;
  }

  set key(key) {
    if (!(key instanceof PropertyKey)) throw 'key must be instance of PropertyKey';
    this._key = key;
  }

  get value() {
    return this._value;
  }

  get selectoption() {
    let result = ThingPropertyTypesUtil.getThingProperty(this._key.type);
    if (result) {
      return result;
    } else {
      return ThingPropertyTypesUtil.getFallback();
    }
  }

  set selectoption(selectoption) {
    this._type = selectoption.value;
  }


  set value(value) {
    this._value = value;
  }

  changeTypeTo(type) {
    if (!DataTypeValueUtil.valueCompatible(type, this._value)) {
      this._value = DataTypeValueUtil.getInitValueOfType(type);
    }
    this._key.type = type;
  }

  clone() {
    return new Property(this._key.clone(), this._value);
  }

  toJSON() {
    return {
      key: this._key.toJSON(),
      value: this._value
    }
  }

  static fromJSON(property) {
    return new Property(PropertyKey.fromJSON(property.key), property.value);
  }

  toString() {
    let result = [];
    result.push(this._key.toString());
    result.push(this._value);
    return result.join(',');
  }
}