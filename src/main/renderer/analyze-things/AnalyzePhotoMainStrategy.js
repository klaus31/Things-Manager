import {AnalyzeStrategy} from "./AnalyzeStrategy";
import {AnalyzedCategoryResult} from "./AnalyzedCategoryResult";

export class AnalyzePhotoMainStrategy extends AnalyzeStrategy {
  constructor() {
    super();
    this._analyzedResults = [];
  }

  analyzeThing(thing, analyzePossibility) {
    if (thing.photos.length) this._analyzedResults.push(thing.photos[0]);
  }

  finalize() {
    return new AnalyzedCategoryResult(this._analyzedResults);
  }
}