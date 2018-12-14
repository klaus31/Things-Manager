import {PreselectionOption} from "./PreselectionOption";
import {UuidUtil} from "../../UuidUtil";

export class Preselection {
  constructor() {
    this._kind = null;
    this._options = [];
    this._uuid = UuidUtil.create();
  }

  // the name, the user gives this preselection
  get kind() {
    return this._kind;
  }

  set kind(kind) {
    this._kind = kind;
  }

  get options() {
    return this._options;
  }

  set options(options) {
    this._options = options;
  }

  get uuid() {
    return this._uuid;
  }

  set uuid(uuid) {
    this._uuid = uuid;
  }

  // the technical key for this preselection
  get type() {
    return 'preselection-' + this._uuid;
  }

  addOption(value) {
    this._options.push(new PreselectionOption(value));
  }

  toJSON() {
    let options = [];
    this._options.forEach(option => options.push(option.toJSON()));
    return {
      kind: this._kind,
      options: options,
      uuid: this._uuid
    }
  }

  static fromJSON(json) {
    const result = new Preselection();
    result._kind = json.kind;
    result._uuid = json.uuid;
    result._options = [];
    json.options.forEach(option => result._options.push(PreselectionOption.fromJSON(option)));
    return result;
  }

  toString() {
    let result = [];
    result.push(this._kind);
    this._options.forEach(option => result.push(option.toString()));
    return result.join(',');
  }
}