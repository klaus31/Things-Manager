import {AnalyzeThingResult} from "./AnalyzeThingResult.js";
import {AnalyzeStrategy} from "./AnalyzeStrategy.js";
import {AnalyzedCategoryResult} from "./AnalyzedCategoryResult.js";
import {DataTypeValueUtil} from "../shared/data/DataTypeValueUtil.js";

export class AnalyzeDateStrategy extends AnalyzeStrategy {

  constructor() {
    super();
    this._analyzedResults = [];
  }

  analyzeThing(thing, analyzePossibility) {
    thing.findPropertyValues(analyzePossibility.text, analyzePossibility.id).forEach(dateTime => {
      let result = this.getResult(dateTime, analyzePossibility);
      let analyzeThingResult = new AnalyzeThingResult(thing.keyvalue, result);
      const dateTimeFormat = DataTypeValueUtil.getDateTimeFormat(analyzePossibility.id);
      analyzeThingResult.setDateTimeFormat(dateTimeFormat);
      this._analyzedResults.push(analyzeThingResult);
    });
  }

  getResult(dateTime, analyzePossibility) {
    if (analyzePossibility.id === 'time') {
      return new Date('1970-01-01T' + dateTime);
    } else if (analyzePossibility.id === 'week') {
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