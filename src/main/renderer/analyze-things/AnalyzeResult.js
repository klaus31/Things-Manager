class AnalyzeResult {
  constructor(thing, result) {
    this._thing = thing;
    this._result = result;
  }

  get thing() {
    return this._thing;
  }

  set thing(thing) {
    this._thing = thing;
  }

  get result() {
    return this._result;
  }

  set result(result) {
    this._result = result;
  }

}