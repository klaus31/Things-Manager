class AnalyzeThings_CategoryViewModel {
  constructor(dataCategory) {
    this._dataCategory = dataCategory;
  }

  get colors() {
    return {backgroundColor: this._dataCategory.colorBackground, color: this._dataCategory.colorText};
  }

  get plural() {
    return this._dataCategory.plural;
  }

  manages(dataCategory) {
    return this._dataCategory.uuid === dataCategory.uuid;
  }

  get propertyKeys() {
    return this._dataCategory.findPropertyKeysOfAllThings();
  }

  withDataCategory(callback) {
    callback(this._dataCategory);
  }

  forEachThing(callback) {
    this._dataCategory.things.forEach(callback);
  }
}