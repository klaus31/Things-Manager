class AnalyzeTextStrategie {
  constructor(vmCategory, propertyKey) {
    this._vmCategory = vmCategory;
    vmCategory.withDataCategory(c => this._category = c);
    // TODO throw exception if strategy is not valid for key (e.g. text for colors)
    this.propertyKey = propertyKey;
  }

  get colors() {
    return this._vmCategory.colors;
  }

  get strategy() {
    return 'text';
  }

  get summary() {
    return this._category.plural + ': ' + this.propertyKey.name;
  }

  get analyzeResults() {
    let analyzeResults = [];
    let i = this._category.things.length;
    while (i--) {
      const thing = this._category.things[i];
      const properties = thing.findPropertyValues(this.propertyKey);
      if (properties.length) {
        analyzeResults.push({
          thing: thing.keyvalue,
          result: properties.join(', ')
        });
      }
    }
    analyzeResults.sort((a, b) => a.thing.toLowerCase().localeCompare(b.thing.toLowerCase()));
    return analyzeResults;
  }
}