export class PropertyKey {

  constructor(name, type) {
    this._name = name;
    this._type = type;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get type() {
    return this._type;
  }

  set type(type) {
    this._type = type;
  }

  toJSON() {
    return {
      name: this._name,
      type: this._type
    }
  }

  static fromJSON(json) {
    return new PropertyKey(json.name, json.type);
  }

  toString() {
    let result = [];
    result.push(this._name);
    result.push(this._type);
    return result.join(',');
  }

  clone() {
    return new PropertyKey(this._name, this._type);
  }
}