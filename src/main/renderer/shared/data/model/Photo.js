import {UuidUtil} from "../../UuidUtil";

export class Photo {
  constructor(originalFilePath, internFileName) {
    this.uuid = UuidUtil.create();
    this.uuidThing = null;
    this._text = '';
    this._originalFilePath = originalFilePath;
    this._internFileName = internFileName;
    this._image = new Image();
    this._image.src = internFileName;
  }

  get originalFilePath() {
    return this._originalFilePath;
  }

  get internFileName() {
    return this._internFileName;
  }

  get image() {
    return this._image;
  }

  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
  }

  toString() {
    let result = [];
    result.push(this._originalFilePath);
    result.push(this._internFileName);
    result.push(this._text);
    return result.join(',');
  }

  toJSON() {
    return {
      originalFilePath: this._originalFilePath,
      internFileName: this._internFileName,
      text: this._text
    }
  }

  static fromJSON(json) {
    let photo = new Photo(json.originalFilePath, json.internFileName);
    photo._text = json.text || '';
    return photo;
  }
}