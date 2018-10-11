class AnalyzeNumberStrategy {
  constructor(vmCategory, propertyKey) {
    if (!propertyKey || propertyKey.type !== 'number') throw 'invalid propertyKey';
    this._vmCategory = vmCategory;
    vmCategory.withDataCategory(c => this._category = c);
    this.propertyKey = propertyKey;
  }

  get colors() {
    return this._vmCategory.colors;
  }

  get strategy() {
    return 'number';
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
          analyzeResults.push(new AnalyzeResult(thing.keyvalue, properties[j]));
        }
      }
    }
    return analyzeResults.sort((a, b) => (a.result - 0) < (b.result - 0) ? 1 : -1);
  }
}