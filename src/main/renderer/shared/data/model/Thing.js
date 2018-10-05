class Thing {

  constructor() {
    this._properties = [];
    this._keyvalue = null;
  }

  get keyvalue() {
    return this._keyvalue;
  }

  set keyvalue(keyvalue) {
    this._keyvalue = keyvalue;
  }

  get properties() {
    return this._properties;
  }

  clone() {
    return Thing.fromJSON(this.toJSON());
  }

  toJSON() {
    let properties = [];
    this._properties.forEach(property => properties.push(property.toJSON()));
    return {
      keyvalue: this._keyvalue,
      properties: properties
    }
  }

  static fromJSON(json) {
    const result = new Thing();
    result._properties = [];
    json.properties.forEach(prop => result._properties.push(Property.fromJSON(prop)));
    result.keyvalue = json.keyvalue;
    return result;
  }

  toString() {
    let result = [];
    result.push(this._keyvalue);
    this._properties.forEach(p => result.push(p.toString()));
    return result.join(',');
  }

  containsPropertyKey(propertyKey) {
    let i = this._properties.length;
    while (i--) {
      if (this._properties[i].key.name === propertyKey.name) {
        return true;
      }
    }
    return false;
  }
}