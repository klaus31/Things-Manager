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
}

class AnalyzeThings_ProjectViewModel {

  constructor(app) {
    this._app = app;
    this._categories = [];
    app.project.categories.forEach(category => this._categories.push(new AnalyzeThings_CategoryViewModel(category)));
    this._shownCategory = null;
  }

  changeCategory(vmCategory) {
    this._shownCategory = vmCategory;
  }

  get category() {
    if (!this._shownCategory) this._shownCategory = this._categories[0];
    return this._shownCategory;
  }

  set category(category) {
    this._shownCategory = category;
  }

  get categories() {
    return this._categories;
  }

  get projectName() {
    return this._app.project.name;
  }

  set projectName(projectName) {
    return this._app.project.name = projectName;
  }

  onDataCategoryAdded(dataCategory) {
    this._categories.push(new AnalyzeThings_CategoryViewModel(dataCategory));
  }

  onDataThingAdded(thingWithCategory) {
    // TODO update analysis
  }

  onDataThingDeleted(thingWithCategory) {
    // TODO update analysis
  }

  onDataCategoryDeleted(dataCategory) {
    let i = this._categories.length;
    while (i--) {
      if (this._categories[i].manages(dataCategory)) {
        this._categories.removeItemWithIndex(i);
      }
    }
  }
}