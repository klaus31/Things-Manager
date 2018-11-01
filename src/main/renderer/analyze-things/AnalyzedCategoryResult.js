export class AnalyzedCategoryResult {
  constructor(analyzedThingsResults) {
    this._analyzedThingsResults = analyzedThingsResults;
    this._additionalResults = [];
    this._type = 'default';
  }

  get type() {
    return this._type;
  }

  set type(type) {
    this._type = type;
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