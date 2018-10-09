class ManagedThings_ProjectViewModel {

  constructor(app) {
    this._app = app;
    this.showdetails = true;
    this.search = '';

    this._shownThings = [];
    app.project.categories.forEach(category => category.things.forEach(thing => this._shownThings.push(new ThingCardViewModel(category, thing))));

    this._categories = [];
    app.project.categories.forEach(category => this._categories.push(new ManagedThings_CategoryViewModel(category)));
    this._sortationShownThings = 'keyvalue_asc';
    this._reuseLatestSortedResult = false;
  }

  set sortationShownThings(sortationShownThings) {
    this._sortationShownThings = sortationShownThings;
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
    this._shownThings.removeItem(managedThing);
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
        this._categories.removeItemWithIndex(i);
      }
    }
  }

  get categoryOptions() {
    const result = [];
    this._app.project.categories.forEach(cat => result.push({label: cat.singular, value: cat.uuid}));
    return result;
  }

  addMissingPropertiesFromOtherThings(managedThing) {
    const category = this._app.project.getCategoryFromUuid(managedThing.categoryUuid);
    const propertyKeys = category.findPropertyKeysOfAllThings();
    propertyKeys.forEach(propertyKey => {
      if (!managedThing.containsPropertyKey(propertyKey)) {
        managedThing.addNewPropertyWithDefaultValue(propertyKey.clone());
      }
    });
  }

  changeCategory(managedThing, changeCategoryUuid) {
    const newCategory = this._app.project.getCategoryFromUuid(changeCategoryUuid);
    const shownThings = this._shownThings;
    managedThing.withDataCategory(function (oldCategory) {
      if (newCategory.uuid !== oldCategory.uuid) {
        managedThing.withDataThing(dataThing => newCategory.things.push(dataThing));
        managedThing.withDataThing(dataThing => {
          const newManagedThing = new ThingCardViewModel(newCategory, dataThing);
          newManagedThing.toggleLock();
          shownThings.push(newManagedThing);
        });
        shownThings.removeItem(managedThing);
        managedThing.delete();
      }
    });
  }

  get searchPlaceholder() {
    return ml.get('iKdUF7OMQAQHT9aj', this.shownThings.length);
  }

  get projectName() {
    return this._app.project.name;
  }

  set projectName(projectName) {
    return this._app.project.name = projectName;
  }

  isSortationOfShownThings(key) {
    return this._sortationShownThings === key;
  }

  reuseLatestSortedResult(reuseIt) {
    this._reuseLatestSortedResult = reuseIt;
    if (!reuseIt) {
      this._app.forceChange();
    }
  }

  get shownThings() {
    function matchesSearch(thing, search) {
      return !search || thing.toString().toLowerCase().contains(search.toLowerCase());
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

    function sortShownThings(things, sortationShownThings) {
      switch (sortationShownThings) {
        case 'keyvalue_asc':
          things.sort((a, b) => a.keyvalue.toLowerCase() > b.keyvalue.toLowerCase());
          break;
        case 'keyvalue_desc':
          things.sort((a, b) => a.keyvalue.toLowerCase() < b.keyvalue.toLowerCase());
          break;
      }
    }

    if (this._reuseLatestSortedResult) {
      return this._lastResult;
    }

    const result = [];
    let i = this._shownThings.length;
    while (i--) {
      let candidate = this._shownThings[i];
      if (isActive(candidate, this._categories) && matchesSearch(candidate, this.search)) {
        result.push(this._shownThings[i]);
      }
    }
    sortShownThings(result, this._sortationShownThings);
    this._lastResult = result;
    return result;
  }
}