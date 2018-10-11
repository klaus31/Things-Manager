class AnalyzeRangeStrategy {
  constructor(vmCategory, propertyKey) {
    if (!propertyKey || propertyKey.type !== 'range') throw 'invalid propertyKey';
    this._vmCategory = vmCategory;
    vmCategory.withDataCategory(c => this._category = c);
    this.propertyKey = propertyKey;
  }

  get colors() {
    return this._vmCategory.colors;
  }

  get strategy() {
    return 'range';
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
        let j = properties.length;
        while (j--) {
          analyzeResults.push(new AnalyzeResult(thing.keyvalue, properties[j] + ' %'));
        }
      }
    }
    return analyzeResults.sort((a, b) => (a.result.replace(/[^\d]/g, '') - 0) < (b.result.replace(/[^\d]/g, '') - 0) ? 1 : -1);
  }
}