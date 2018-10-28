import {PropertyKey} from './PropertyKey.js';
import {Thing} from './Thing.js';
import {UuidUtil} from "../../UuidUtil.js";

export class Category {

  constructor() {
    this.uuid = UuidUtil.create();
    this._singular = null;
    this._plural = null;
    this._propertyKey = new PropertyKey();
    this._things = [];
    this._colorBackground = '#faebd7';
    this._colorText = '#000000';
  }

  get colorText() {
    return this._colorText;
  }

  set colorText(colorText) {
    this._colorText = colorText;
  }

  get colors() {
    return {
      colorText: this._colorText,
      colorBackground: this._colorBackground
    };
  }

  get colorBackground() {
    return this._colorBackground;
  }

  set colorBackground(colorBackground) {
    this._colorBackground = colorBackground;
  }

  get things() {
    return this._things;
  }

  get plural() {
    return this._plural;
  }

  get singular() {
    return this._singular;
  }

  set singular(singular) {
    this._singular = singular;
  }

  set plural(plural) {
    this._plural = plural;
  }

  get propertyKey() {
    return this._propertyKey;
  }

  deleteThing(thing) {
    this._things.removeItem(thing);
  }

  set propertyKey(propertyKey) {
    if (propertyKey && !(propertyKey instanceof PropertyKey)) throw 'propertyKey invalid';
    this._propertyKey = propertyKey;
  }

  findPropertyKeysOfAllThings() {
    const result = [];
    const namesOnly = [];
    let i = this._things.length;
    while (i--) {
      const properties = this._things[i].properties;
      let j = properties.length;
      while (j--) {
        if (!namesOnly.contains(properties[j].key.name)) {
          result.push(properties[j].key);
          namesOnly.push(properties[j].key.name);
        }
      }
    }
    return result;
  }

  toJSON() {
    const things = [];
    this._things.forEach(thing => things.push(thing.toJSON()));
    return {
      propertyKey: this._propertyKey ? this._propertyKey.toJSON() : null,
      things: things,
      singular: this._singular,
      plural: this._plural,
      colorBackground: this._colorBackground,
      colorText: this._colorText,
    }
  }

  static fromJSON(json) {
    const result = new Category();
    json.things.forEach(thing => result._things.push(Thing.fromJSON(thing)));
    result.propertyKey = PropertyKey.fromJSON(json.propertyKey);
    result.singular = json.singular;
    result.plural = json.plural;
    result.colorBackground = json.colorBackground;
    result.colorText = json.colorText;
    return result;
  }
}