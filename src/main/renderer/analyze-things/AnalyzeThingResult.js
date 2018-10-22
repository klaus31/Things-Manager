export class AnalyzeThingResult {
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

  get resultFormatted() {
    if (this._dateTimeFormat) {
      return moment(this._result).format(this._dateTimeFormat);
    }
    return this._result + (this._unit ? ' ' + this._unit : '');
  }

  set result(result) {
    this._result = result;
  }

  setUnit(unit) {
    this._unit = unit;
  }

  setDateTimeFormat(dateTimeFormat) {
    this._dateTimeFormat = dateTimeFormat;
  }
}