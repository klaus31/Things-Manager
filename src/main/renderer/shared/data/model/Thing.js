import {Property} from './Property.js';
import {Photo} from "./Photo.js";
import {UuidUtil} from "../../UuidUtil";

export class Thing {

  constructor() {
    this.uuid = UuidUtil.create();
    this._properties = [];
    this._keyvalue = null;
    this._photos = [];
  }

  get keyvalue() {
    return this._keyvalue;
  }

  set keyvalue(keyvalue) {
    this._keyvalue = keyvalue;
  }

  get photos() {
    return this._photos;
  }

  addPhoto(photo) {
    photo.uuidThing = this.uuid;
    this._photos.push(photo);
  }

  get properties() {
    return this._properties;
  }

  set properties(properties) {
    this._properties = properties;
  }

  clone() {
    return Thing.fromJSON(this.toJSON());
  }

  findPropertyValues(name, type) {
    let i = this._properties.length;
    let result = [];
    while (i--) {
      if (this._properties[i].key.name === name && this._properties[i].key.type === type) {
        result.push(this._properties[i].value);
      }
    }
    return result;
  }

  deletePhoto(photo) {
    this._photos.removeItem(photo);
  }

  toJSON() {
    let properties = [];
    let photos = [];
    this._properties.forEach(property => properties.push(property.toJSON()));
    this._photos.forEach(photo => photos.push(photo.toJSON()));
    return {
      keyvalue: this._keyvalue,
      properties: properties,
      photos: photos
    }
  }

  static fromJSON(json) {
    const result = new Thing();
    result._properties = [];
    json.properties.forEach(prop => result._properties.push(Property.fromJSON(prop)));
    json.photos.forEach(photo => result.addPhoto(Photo.fromJSON(photo)));
    result.keyvalue = json.keyvalue;
    return result;
  }

  toString() {
    let result = [];
    result.push(this._keyvalue);
    this._properties.forEach(p => result.push(p.toString()));
    this._photos.forEach(p => result.push(p.toString()));
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