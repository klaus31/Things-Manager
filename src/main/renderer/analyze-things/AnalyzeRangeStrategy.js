import {ml} from './../config/begin-config.js';
import {AnalyzeThingResult} from "./AnalyzeThingResult.js";
import {AnalyzeNumberStrategy} from "./AnalyzeNumberStrategy.js";
import {AnalyzedCategoryResult} from "./AnalyzedCategoryResult.js";
import {AnalyzeUtil} from "./AnalyzeUtil.js";

export class AnalyzeRangeStrategy extends AnalyzeNumberStrategy {

  constructor() {
    super();
    this._analyzedResults = [];
  }

  analyzeThing(thing, propertyKeyToAnalyze) {
    const properties = thing.findPropertyValues(propertyKeyToAnalyze);
    let i = properties.length;
    while (i--) {
      const cleanValue = Number.parseInt(properties[i]);
      if (cleanValue) {
        this._analyzedResults.push(new AnalyzeThingResult(thing.keyvalue, cleanValue));
      }
    }
  }

  finalize() {
    let sorted = this._analyzedResults
      .sort((a, b) => a.result < b.result ? 1 : -1);
    sorted.forEach(ar => ar.setUnit('%'));
    let result = new AnalyzedCategoryResult(sorted);
    result.addAdditionalResult(ml.get('9Zy2Lsp0e6999bwr'), AnalyzeUtil.sum(this._analyzedResults));
    result.addAdditionalResult(ml.get('fTcBoDLCXfYEcpTn'), AnalyzeUtil.average(this._analyzedResults) + ' %');
    return result;
  }
}