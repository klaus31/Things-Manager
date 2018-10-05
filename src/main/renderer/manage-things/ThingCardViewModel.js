class ThingCardViewModel {
  constructor(category, thing) {
    this.locked = true;
    this.uuid = UuidFactory.create();

    this._dataCategory = category;
    this._dataThing = thing;
    this._changeCategory = category.uuid;

    function properties() {
      let i = thing.properties.length;
      const result = [];
      while (i--) {
        result.push(new ManagedThings_PropertyViewModel(thing.properties[i]));
      }
      return result;
    }

    this._properties = properties();
  }

  countColumnsToShow() {
    return this.locked ? 2 : 4;
  }

  addNewEmptyProperty() {
    this.addProperty(new Property());
  }

  addProperty(property) {
    this._dataThing.properties.push(property);
    this._properties.push(new ManagedThings_PropertyViewModel(property));
  }

  addNewPropertyWithDefaultValue(keyProperty) {
    this.addProperty(new Property(keyProperty));
  }

  get properties() {
    return this._properties;
  }

  get changeCategory() {
    return this._changeCategory;
  }

  set changeCategory(changeCategory) {
    this._changeCategory = changeCategory;
  }

  get categoryUuid() {
    return this._dataCategory.uuid;
  }

  canBeDeleted() {
    return this._dataCategory.things.length > 1;
  }

  delete() {
    this._dataCategory.things.splice(this._dataCategory.things.indexOf(this._dataThing), 1);
  }

  containsPropertyKey(propertyKey) {
    return this._dataThing.containsPropertyKey(propertyKey);
  }

  clone() {
    let dataThingClone = this._dataThing.clone();
    this._dataCategory.things.push(dataThingClone);
    return new ThingCardViewModel(this._dataCategory, dataThingClone);
  }

  cloneProperty(propertyViewModel) {
    const clonedPropertyViewModel = propertyViewModel.clone();
    this._properties.push(clonedPropertyViewModel);
    clonedPropertyViewModel.withDataProperty(dataProp => this._dataThing.properties.push(dataProp));
  }

  withDataCategory(callback) {
    callback(this._dataCategory);
  }

  deleteProperty(propertyViewModel) {
    propertyViewModel.withDataProperty(dataProp => this._dataThing.properties.splice(this._dataThing.properties.indexOf(dataProp), 1));
    this._properties.splice(this._properties.indexOf(propertyViewModel), 1);
  }

  withDataThing(callback) {
    callback(this._dataThing);
  }

  toggleLock() {
    this.locked = !this.locked;
  }

  cloneKeyProperty() {
    const key = this._dataCategory.propertyKey.clone();
    const clone = new Property(key, this._dataThing.keyvalue);
    this._dataThing.properties.push(clone);
    this._properties.push(new ManagedThings_PropertyViewModel(clone));
  }

  get category() {
    return this._dataCategory.singular;
  }

  get categoryPlural() {
    return this._dataCategory.plural;
  }

  set category(category) {
    this._dataCategory.singular = category;
  }

  get keyvalue() {
    return this._dataThing.keyvalue;
  }

  set keyvalue(keyvalue) {
    this._dataThing.keyvalue = keyvalue;
  }

  get colors() {
    return {backgroundColor: this._dataCategory.colorBackground, color: this._dataCategory.colorText};
  }

  get keyproperty() {
    return this._dataCategory.propertyKey.name;
  }

  set keyproperty(keyproperty) {
    this._dataCategory.propertyKey.name = keyproperty;
  }

  get keypropertytype() {
    return this._dataCategory.propertyKey.type;
  }

  set keypropertytype(keypropertytype) {
    this._dataCategory.propertyKey.type = keypropertytype;
  }

  get keypropertyvalue() {
    return this._dataThing.keyvalue;
  }

  set keypropertyvalue(keypropertyvalue) {
    this._dataThing.keyvalue = keypropertyvalue;
  }

  toString() {
    return this._dataThing.toString() + ',' + this._dataCategory.propertyKey.name;
  }
}