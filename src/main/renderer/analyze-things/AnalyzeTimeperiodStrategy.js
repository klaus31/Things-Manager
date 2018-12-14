import {ml} from './../config/MultiLanguage.js';
import {AnalyzeThingResult} from "./AnalyzeThingResult.js";
import {AnalyzeStrategy} from "./AnalyzeStrategy.js";
import {AnalyzedCategoryResult} from "./AnalyzedCategoryResult.js";
import {TimePeriodConverter} from "../shared/TimePeriodConverter";

export class AnalyzeTimeperiodStrategy extends AnalyzeStrategy {

  constructor() {
    super();
    this._analyzedResults = [];
    this._timePeriods = [];
  }

  analyzeThing(thing, analyzePossibility) {
    const properties = thing.findPropertyValues(analyzePossibility.text, analyzePossibility.id);
    let i = properties.length;
    while (i--) {
      const timePeriod = properties[i];
      if (typeof timePeriod === 'object') {
        this._timePeriods.push(timePeriod);
        this._analyzedResults.push(new AnalyzeThingResult(thing.keyvalue, ml.getTimePeriod(timePeriod)));
      }
    }
  }


  finalize() {
    function sum(me) {
      let i = me._timePeriods.length;
      let sumSeconds = 0;
      while (i--) {
        const timePeriod = me._timePeriods[i];
        sumSeconds += TimePeriodConverter.getSecondsFromTimePeriodObject(timePeriod);
      }
      const sumTimePeriod = TimePeriodConverter.getTimePeriodObjectFromSeconds(sumSeconds);
      return ml.getTimePeriod(sumTimePeriod);
    }

    let sorted = this._analyzedResults.sort((a, b) => a.result < b.result ? 1 : -1);
    let result = new AnalyzedCategoryResult(sorted);
    result.addAdditionalResult(ml.get('9Zy2Lsp0e6999bwr'), sum(this));
    return result;
  }

}