import {AnalyzeThingResult} from "./AnalyzeThingResult.js";
import {AnalyzeStrategy} from "./AnalyzeStrategy.js";
import {AnalyzedCategoryResult} from "./AnalyzedCategoryResult.js";

export class AnalyzeTextStrategy extends AnalyzeStrategy {

  constructor() {
    super();
    this._analyzedResults = [];
  }

  analyzeThing(thing, propertyKeyToAnalyze) {
    const properties = thing.findPropertyValues(propertyKeyToAnalyze.text, propertyKeyToAnalyze.id);
    if (properties.length) {
      this._analyzedResults.push(new AnalyzeThingResult(thing.keyvalue, properties.join(', ')));
    }
  }

  finalize() {
    let sorted = this._analyzedResults.sort((a, b) => a.thing.toLowerCase().localeCompare(b.thing.toLowerCase()));
    return new AnalyzedCategoryResult(sorted);
  }
}