export class Photo {
  constructor(originalFilePath, internFileName) {
    this._originalFilePath = originalFilePath;
    console.info(internFileName);
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

  toString() {
    let result = [];
    result.push(this._originalFilePath);
    result.push(this._internFileName);
    return result.join(',');
  }

  toJSON() {
    return {
      originalFilePath: this._originalFilePath,
      internFileName: this._internFileName
    }
  }

  static fromJSON(json) {
    return new Photo(json.originalFilePath, json.internFileName);
  }
}