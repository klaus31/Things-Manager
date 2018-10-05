class ManagedThings_PropertyViewModel {
  constructor(property) {
    this._dataProperty = property;
  }


  get key() {
    return this._dataProperty.key.name;
  }

  set key(key) {
    this._dataProperty.key.name = key;
  }

  get type() {
    return this._dataProperty.key.type;
  }

  set type(newType) {
    this._dataProperty.changeTypeTo(newType);
  }

  get value() {
    return this._dataProperty.value;
  }

  set value(value) {
    this._dataProperty.value = value;
  }

  get datatypeOptions() {
    return DataTypeProvider.getDatatypes();
  }

  get categoryKeyType() {
    return this._categoryKeyType;
  }

  set categoryKeyType(categoryKeyType) {
    this._categoryKeyType = categoryKeyType;
  }

  clone() {
    const clonedDataProperty = this._dataProperty.clone();
    return new ManagedThings_PropertyViewModel(clonedDataProperty);
  }

  withDataProperty(callback) {
    callback(this._dataProperty);
  }
}