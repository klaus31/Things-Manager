export class AnalyzePossibility {
  constructor(id, text) {
    this._id = id;
    this._text = text;
  }

  get id() {
    return this._id;
  }

  get text() {
    return this._text;
  }
}