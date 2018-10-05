class CurrentArea {
  constructor() {
    this._key = 'add-first-thing';
    this._tmpData = {};
  }

  get key() {
    return this._key;
  }

  set key(key) {
    if (!key) throw 'key must not be empty';
    if (typeof key !== 'string') throw 'key must be a string';
    this._key = key;
  }

  setTmpData(key, tmpData) {
    this._tmpData[key] = tmpData;
  }

  popTmpData(key) {
    const tmpData = this._tmpData[key];
    this._tmpData[key] = null;
    return tmpData;
  }

  toJSON() {
    return {
      key: this._key
    }
  }

  static fromJSON(json) {
    const result = new CurrentArea();
    result.key = json.key;
    return result;
  }
}