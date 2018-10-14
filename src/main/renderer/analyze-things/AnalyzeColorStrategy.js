class AnalyzeColorStrategy extends AnalyzeStrategy {

  constructor() {
    super();
    this._analyzedResults = [];
  }

  analyzeThing(thing, propertyKeyToAnalyze) {
    thing.findPropertyValues(propertyKeyToAnalyze).forEach(color => {
      this._analyzedResults.push(new AnalyzeThingResult(thing.keyvalue, color));
    });
  }

  finalize() {
    const sorted = this._analyzedResults.sort((a, b) => a.thing.toLowerCase().localeCompare(b.thing.toLowerCase()));
    return new AnalyzedCategoryResult(sorted);
  }
}