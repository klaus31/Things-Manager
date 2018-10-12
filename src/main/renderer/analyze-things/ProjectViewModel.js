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
      if (this._shownCategory.propertyKeys.length) {
        this._propertyKeyToAnalyze = this._shownCategory.propertyKeys[0];
      }
    }
    return this._propertyKeyToAnalyze;
  }

  get cardSummary() {
    let plural = null;
    this._shownCategory.withDataCategory(c => plural = c.plural)
    return plural + ': ' + this._propertyKeyToAnalyze.name;
  }

  get cardColors() {
    return this._shownCategory.colors;
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

  // XXX this is not an analysis yet but another representation of things
  get analyzedCategoryResult() {
    let strategy = null;
    switch (this._propertyKeyToAnalyze.type) {
      case 'checkbox':
        strategy = new AnalyzeCheckboxStrategy();
        break;
      case 'number':
        strategy = new AnalyzeNumberStrategy();
        break;
      case 'range':
        strategy = new AnalyzeRangeStrategy();
        break;
      default:
        strategy = new AnalyzeTextStrategy();
        break;
    }
    this._shownCategory.forEachThing(thing => {
      let results = strategy.analyzeThing(thing, this._propertyKeyToAnalyze);
    });
    return strategy.finalize();
  }

  get analyzeCardToShow() {
    switch (this._propertyKeyToAnalyze.type) {
      case 'checkbox':
        return 'checkbox';
      default:
        return 'text';
    }
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

  onDataCategoryDeleted(dataCategory) {
    let i = this._categories.length;
    while (i--) {
      if (this._categories[i].manages(dataCategory)) {
        this._categories.removeItemWithIndex(i);
      }
    }
  }
}