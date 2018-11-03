import {ml} from './../config/MultiLanguage.js';
import {AnalyzeNumberStrategy} from "./AnalyzeNumberStrategy.js";
import {AnalyzedCategoryResult} from "./AnalyzedCategoryResult.js";
import {AnalyzeUtil} from "./AnalyzeUtil.js";

export class AnalyzeRangeStrategy extends AnalyzeNumberStrategy {

  constructor() {
    super();
    this._analyzedResults = [];
  }

  finalize() {
    let sorted = this._analyzedResults
      .sort((a, b) => a.result < b.result ? 1 : -1);
    sorted.forEach(ar => ar.setUnit('%'));
    let result = new AnalyzedCategoryResult(sorted);
    result.addAdditionalResult(ml.get('fTcBoDLCXfYEcpTn'), AnalyzeUtil.average(this._analyzedResults) + ' %');
    return result;
  }
}