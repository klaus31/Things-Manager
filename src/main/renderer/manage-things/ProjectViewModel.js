class ManagedThings_ProjectViewModel {

  constructor(app) {
    this._app = app;
    this.showdetails = true;
    this.search = '';

    this._shownThings = [];
    app.project.categories.forEach(category => category.things.forEach(thing => this._shownThings.push(new ThingCardViewModel(category, thing))));

    this._categories = [];
    app.project.categories.forEach(category => this._categories.push(new ManagedThings_CategoryViewModel(category)));
  }

  get categories() {
    return this._categories;
  }

  clone(thingViewModel) {
    const thingViewModelClone = thingViewModel.clone();
    this._shownThings.push(thingViewModelClone);
  }

  deleteThing(managedThing) {
    managedThing.delete();
    this._shownThings.splice(this._shownThings.indexOf(managedThing), 1);
  }

  onDataCategoryAdded(dataCategory) {
    this._categories.push(new ManagedThings_CategoryViewModel(dataCategory));
  }

  onDataThingAdded(thingWithCategory) {
    this._shownThings.push(new ThingCardViewModel(thingWithCategory.category, thingWithCategory.thing));
  }

  onDataCategoryDeleted(dataCategory) {
    let i = this._categories.length;
    while (i--) {
      if (this._categories[i].manages(dataCategory)) {
        this._categories.splice(this._categories.indexOf(this._categories[i]), 1);
      }
    }
  }

  addMissingPropertiesFromOtherThings(managedThing) {
    const category = this._app.project.getCategory(managedThing.category);
    const propertyKeys = category.findPropertyKeysOfAllThings();
    propertyKeys.forEach(propertyKey => {
      if (!managedThing.containsPropertyKey(propertyKey)) {
        managedThing.addNewPropertyWithDefaultValue(propertyKey.clone());
      }
    });
  }

  get searchPlaceholder() {
    return 'Search in ' + this._shownThings.length + ' things';
  }

  get projectName() {
    return this._app.project.name;
  }

  set projectName(projectName) {
    return this._app.project.name = projectName;
  }

  get shownThings() {
    function matchesSearch(thing, search) {
      return !search || thing.toString().indexOf(search) >= 0;
    }

    function isActive(thing, categories) {
      let i = categories.length;
      while (i--) {
        if (categories[i].isActive(thing)) {
          return true;
        }
      }
      return false;
    }

    const result = [];
    let i = this._shownThings.length;
    while (i--) {
      let candidate = this._shownThings[i];
      if (isActive(candidate, this._categories) && matchesSearch(candidate, this.search)) {
        result.push(this._shownThings[i]);
      }
    }
    return result;
  }
}