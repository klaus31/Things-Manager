class AnalyzeDateStrategy extends AnalyzeStrategy {

  constructor() {
    super();
    this._analyzedResults = [];
  }

  analyzeThing(thing, propertyKeyToAnalyze) {
    thing.findPropertyValues(propertyKeyToAnalyze).forEach(dateTime => {
      let result = this.getResult(dateTime, propertyKeyToAnalyze);
      let analyzeThingResult = new AnalyzeThingResult(thing.keyvalue, result);
      const dateTimeFormat = DataTypeValueUtil.getDateTimeFormat(propertyKeyToAnalyze.type);
      analyzeThingResult.setDateTimeFormat(dateTimeFormat);
      this._analyzedResults.push(analyzeThingResult);
    });
  }

  getResult(dateTime, propertyKeyToAnalyze) {
    if (propertyKeyToAnalyze.type === 'time') {
      return new Date('1970-01-01T' + dateTime);
    } else if (propertyKeyToAnalyze.type === 'week') {
      return new Date(moment(dateTime));
    } else {
      return new Date(dateTime);
    }
  }

  finalize() {
    const sorted = this._analyzedResults.sort((a, b) => a.result > b.result ? 1 : -1);
    return new AnalyzedCategoryResult(sorted);
  }
}