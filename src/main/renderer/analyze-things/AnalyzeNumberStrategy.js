import {ml} from './../config/MultiLanguage.js';
import {AnalyzeThingResult} from "./AnalyzeThingResult.js";
import {AnalyzeStrategy} from "./AnalyzeStrategy.js";
import {AnalyzeUtil} from "./AnalyzeUtil.js";
import {AnalyzedCategoryResult} from "./AnalyzedCategoryResult.js";

export class AnalyzeNumberStrategy extends AnalyzeStrategy {

  constructor() {
    super();
    this._analyzedResults = [];
  }

  analyzeThing(thing, analyzePossibility) {
    const properties = thing.findPropertyValues(analyzePossibility.text, analyzePossibility.id);
    let i = properties.length;
    while (i--) {
      const cleanValue = Number.parseInt(properties[i]);
      if (!isNaN(cleanValue)) {
        this._analyzedResults.push(new AnalyzeThingResult(thing.keyvalue, cleanValue));
      }
    }
  }

  finalize() {
    let sorted = this._analyzedResults.sort((a, b) => a.result < b.result ? 1 : -1);
    let result = new AnalyzedCategoryResult(sorted);
    result.type = 'number';
    result.addAdditionalResult(ml.get('9Zy2Lsp0e6999bwr'), AnalyzeUtil.sum(this._analyzedResults));
    result.addAdditionalResult(ml.get('fTcBoDLCXfYEcpTn'), AnalyzeUtil.average(this._analyzedResults));
    return result;
  }

}