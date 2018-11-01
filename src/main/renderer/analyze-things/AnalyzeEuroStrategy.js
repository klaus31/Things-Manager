import {ml} from './../config/MultiLanguage.js';
import {AnalyzeNumberStrategy} from "./AnalyzeNumberStrategy.js";
import {AnalyzedCategoryResult} from "./AnalyzedCategoryResult.js";
import {AnalyzeUtil} from "./AnalyzeUtil.js";

export class AnalyzeEuroStrategy extends AnalyzeNumberStrategy {

  constructor() {
    super();
    this._analyzedResults = [];
  }

  finalize() {
    let sorted = this._analyzedResults
      .sort((a, b) => a.result < b.result ? 1 : -1);
    sorted.forEach(ar => ar.setFormatMethod((result) => ml.countrySpecificNumberFormat(result, 2) + ' €'));
    let result = new AnalyzedCategoryResult(sorted);
    result.addAdditionalResult(ml.get('9Zy2Lsp0e6999bwr'), AnalyzeUtil.sum(this._analyzedResults, 2) + ' €');
    result.addAdditionalResult(ml.get('fTcBoDLCXfYEcpTn'), AnalyzeUtil.average(this._analyzedResults) + ' €');
    return result;
  }
}