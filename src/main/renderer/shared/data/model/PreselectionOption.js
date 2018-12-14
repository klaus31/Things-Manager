import {UuidUtil} from "../../UuidUtil";

export class PreselectionOption {
  constructor(value) {
    this._value = value || '';
    this._uuid = UuidUtil.create();
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
  }

  get uuid() {
    return this._uuid;
  }

  set uuid(uuid) {
    this._uuid = uuid;
  }

  toJSON() {
    return {
      value: this._value,
      uuid: this._uuid
    }
  }

  static fromJSON(json) {
    const result = new PreselectionOption();
    result._value = json.value;
    result._uuid = json.uuid;
    return result;
  }

  toString() {
    let result = [];
    result.push(this._value);
    return result.join(',');
  }
}