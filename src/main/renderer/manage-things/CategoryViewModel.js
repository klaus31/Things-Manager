export class ManagedThings_CategoryViewModel {
  constructor(dataCategory) {
    this.active = true;
    this._dataCategory = dataCategory;
  }

  get labelSingular() {
    return this._dataCategory.singular;
  }

  get labelPlural() {
    return this._dataCategory.plural;
  }

  get colors() {
    return {backgroundColor: this._dataCategory.colorBackground, color: this._dataCategory.colorText};
  }

  isActive(managedThing) {
    return this.active && managedThing.category === this._dataCategory.singular;
  }

  manages(dataCategory) {
    return this._dataCategory.uuid === dataCategory.uuid;
  }

  withDataCategory(callback) {
    callback(this._dataCategory);
  }
}