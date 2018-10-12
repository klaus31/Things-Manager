class AnalyzedCategoryResult {
  constructor(analyzedThingsResults) {
    this._analyzedThingsResults = analyzedThingsResults;
    this._additionalResults = [];
  }

  get additionalResults() {
    return this._additionalResults;
  }

  get analyzedThingsResults() {
    return this._analyzedThingsResults;
  }

  addAdditionalResult(key, value) {
    this._additionalResults.push({
      key: key,
      value: value
    });
  }
}