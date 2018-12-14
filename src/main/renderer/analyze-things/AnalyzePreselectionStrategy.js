import {AnalyzeThingResult} from "./AnalyzeThingResult.js";
import {AnalyzeStrategy} from "./AnalyzeStrategy.js";
import {AnalyzedCategoryResult} from "./AnalyzedCategoryResult.js";
import {preselectionValueService} from "./../shared/data/PreselectionValueService";
import {ml} from "../config/MultiLanguage";
import {AnalyzeUtil} from "./AnalyzeUtil";

export class AnalyzePreselectionStrategy extends AnalyzeStrategy {

  constructor() {
    super();
    this._analyzedResults = [];
  }

  analyzeThing(thing, propertyKeyToAnalyze) {
    const properties = thing.findPropertyValues(propertyKeyToAnalyze.text, propertyKeyToAnalyze.id);
    if (properties.length) {
      this._analyzedResults.push(new AnalyzeThingResult(thing.keyvalue, preselectionValueService.valueOf(properties[0])));
    }
  }

  finalize() {
    let sorted = this._analyzedResults.sort((a, b) => a.thing.toLowerCase().localeCompare(b.thing.toLowerCase()));
    const result = new AnalyzedCategoryResult(sorted);
    const counts = {};
    this._analyzedResults.forEach(analyzedResult => {
      if (counts[analyzedResult.result]) {
        counts[analyzedResult.result]++;
      } else {
        counts[analyzedResult.result] = 1;
      }
    });
    for (let key in counts) {
      result.addAdditionalResult(ml.get('EqdvTbPqo90/gDx5') + ' ' + key, counts[key]);
    }
    return result;
  }
}