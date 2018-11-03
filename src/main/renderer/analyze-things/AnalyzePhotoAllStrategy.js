import {AnalyzeStrategy} from "./AnalyzeStrategy";
import {AnalyzedCategoryResult} from "./AnalyzedCategoryResult";

export class AnalyzePhotoAllStrategy extends AnalyzeStrategy{
  constructor() {
    super();
    this._analyzedResults = [];
  }

  analyzeThing(thing, analyzePossibility) {
    thing.photos.forEach(photo => this._analyzedResults.push(photo));
  }

  finalize() {
    return new AnalyzedCategoryResult(this._analyzedResults);
  }
}