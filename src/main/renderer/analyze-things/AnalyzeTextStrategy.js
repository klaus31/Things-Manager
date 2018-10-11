class AnalyzeTextStrategy {
  constructor(vmCategory, propertyKey) {
    this._vmCategory = vmCategory;
    vmCategory.withDataCategory(c => this._category = c);
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
        analyzeResults.push(new AnalyzeResult(thing.keyvalue, properties.join(', ')));
      }
    }
    analyzeResults.sort((a, b) => a.thing.toLowerCase().localeCompare(b.thing.toLowerCase()));
    return analyzeResults;
  }
}