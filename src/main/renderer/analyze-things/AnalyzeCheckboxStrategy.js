import {AnalyzeThingResult} from "./AnalyzeThingResult.js";
import {AnalyzeStrategy} from "./AnalyzeStrategy.js";

export class AnalyzeCheckboxStrategy extends AnalyzeStrategy {

  constructor() {
    super();
    this._analyzedResults = [];
    this._notChecked = 0;
    this._total = 0;
  }

  analyzeThing(thing, propertyKeyToAnalyze) {
    function allChecked(propertieValues) {
      if (!propertieValues.length) return false;
      let j = propertieValues.length;
      while (j--) {
        if (!propertieValues[j]) return false;
      }
      return true;
    }

    if (allChecked(thing.findPropertyValues(propertyKeyToAnalyze))) {
      this._analyzedResults.push(new AnalyzeThingResult(thing.keyvalue, true));
    } else {
      this._notChecked++;
    }
    this._total++;
  }

  finalize() {
    const sorted = this._analyzedResults.sort((a, b) => a.thing.toLowerCase().localeCompare(b.thing.toLowerCase()));
    let result = new AnalyzedCategoryResult(sorted);
    let checked = this._analyzedResults.length;
    if (checked) {
      result.addAdditionalResult(ml.get('yntAgfOY1s0frOe7'), ml.get('3vAJL+taVslCh98X', this._analyzedResults.length, this._total));
      result.addAdditionalResult(ml.get('tkZPaNmNs3x2qGPT'), AnalyzeUtil.floatToPercent(checked / (this._notChecked + checked)));
    }
    return result;
  }
}