class ManagedCategory_PropertyKeyViewModel {
  constructor(propertyKey, dataCategory) {
    this._key = propertyKey;
    this._dataCategory = dataCategory;
  }

  get key() {
    return this._key;
  }

  set key(key) {
    this._dataCategory.things.forEach(thing => {
      thing.properties.forEach(property => {
        if (property.key.name === this._key) {
          property.key.name = key;
        }
      });
    });
    this._key = key;
  }

}