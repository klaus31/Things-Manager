class AnalyzeThings_ProjectViewModel {

  constructor(app) {
    this._app = app;
    this._categories = [];
    app.project.categories.forEach(category => this._categories.push(new AnalyzeThings_CategoryViewModel(category)));
    this._shownCategory = null;
    this._propertyKeyToAnalyze = null;
  }

  get propertyKeyToAnalyze() {
    if (!this._propertyKeyToAnalyze) {
      if (this.category.propertyKeys.length) {
        this._propertyKeyToAnalyze = this.category.propertyKeys[0];
      }
    }
    return this._propertyKeyToAnalyze;
  }

  set propertyKeyToAnalyze(propertyKeyToAnalyze) {
    this._propertyKeyToAnalyze = propertyKeyToAnalyze;
  }

  get category() {
    if (!this._shownCategory) this._shownCategory = this._categories[0];
    return this._shownCategory;
  }

  set category(category) {
    this._shownCategory = category;
    if (category.propertyKeys.length) {
      this._propertyKeyToAnalyze = category.propertyKeys[0];
    }
  }

  get analyzeViewModel() {
    return new AnalyzeTextStrategie(this._shownCategory, this._propertyKeyToAnalyze);
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