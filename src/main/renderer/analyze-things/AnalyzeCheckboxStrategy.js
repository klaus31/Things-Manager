class AnalyzeCheckboxStrategy {
  constructor(vmCategory, propertyKey) {
    if (!propertyKey || propertyKey.type !== 'checkbox') throw 'invalid propertyKey';
    this._vmCategory = vmCategory;
    vmCategory.withDataCategory(c => this._category = c);
    this.propertyKey = propertyKey;
  }

  get colors() {
    return this._vmCategory.colors;
  }

  get strategy() {
    return 'checkbox';
  }

  get summary() {
    return this._category.plural + ': ' + this.propertyKey.name;
  }

  get analyzeResults() {
    function allChecked(propertieValues) {
      let j = propertieValues.length;
      while (j--) {
        if (!propertieValues[j]) return false;
      }
      return true;
    }

    let analyzeResults = [];
    let i = this._category.things.length;
    while (i--) {
      const thing = this._category.things[i];
      const properties = thing.findPropertyValues(this.propertyKey);
      if (properties.length) {
        if (allChecked(properties)) {
          analyzeResults.push(new AnalyzeResult(thing.keyvalue, true));
        }
      }
    }
    analyzeResults.sort((a, b) => a.thing.toLowerCase().localeCompare(b.thing.toLowerCase()));
    return analyzeResults;
  }
}