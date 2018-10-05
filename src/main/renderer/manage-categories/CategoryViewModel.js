class ManagedCategory_CategoryViewModel {

  constructor(dataCategory) {
    this.uuid = dataCategory.uuid;
    this._dataCategory = dataCategory;
    this.locked = true;
  }

  get summary() {
    let count = this._dataCategory.things.length;
    if (count === 0 && !this._dataCategory.plural) {
      return 'New Category';
    }
    let name = count === 1 ? this._dataCategory.singular : this._dataCategory.plural;
    return count + ' ' + name;
  }

  toggleLock() {
    this.locked = !this.locked;
  }

  withDataCategory(callback) {
    callback(this._dataCategory);
  }

  isDeletable() {
    return this._dataCategory.things.length === 0;
  }

  get key() {
    return this._dataCategory.propertyKey.name;
  }

  set key(key) {
    this._dataCategory.propertyKey.name = key;
  }

  get colors() {
    return {backgroundColor: this._dataCategory.colorBackground, color: this._dataCategory.colorText};
  }

  get singular() {
    return this._dataCategory.singular;
  }

  set singular(singular) {
    this._dataCategory.singular = singular;
  }

  get plural() {
    return this._dataCategory.plural;
  }

  set plural(plural) {
    this._dataCategory.plural = plural;
  }

  get backgroundColor() {
    return this._dataCategory.colorBackground;
  }

  set backgroundColor(backgroundColor) {
    this._dataCategory.colorBackground = backgroundColor;
  }

  get textColor() {
    return this._dataCategory.colorText;
  }

  set textColor(textColor) {
    this._dataCategory.colorText = textColor;
  }
}