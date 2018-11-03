import {AnalyzePossibility} from "./AnalyzePossibility";
import {ml} from './../config/MultiLanguage.js';

export class AnalyzeThings_CategoryViewModel {
  constructor(dataCategory) {
    this._dataCategory = dataCategory;
  }

  get colors() {
    return {colorBackground: this._dataCategory.colorBackground, colorText: this._dataCategory.colorText};
  }

  get plural() {
    return this._dataCategory.plural;
  }

  manages(dataCategory) {
    return this._dataCategory.uuid === dataCategory.uuid;
  }

  get analyzePossibilities() {
    const propertyKeys = this._dataCategory.findPropertyKeysOfAllThings();
    const result = [];
    propertyKeys.forEach(pk => result.push(new AnalyzePossibility(pk.type, pk.name)));
    result.push(new AnalyzePossibility('photo-main', ml.get('ash2kn9musZFfcbW')));
    result.push(new AnalyzePossibility('photo-all', ml.get('zaJqslu6P2U95mDK')));
    return result;
  }

  withDataCategory(callback) {
    callback(this._dataCategory);
  }

  forEachThing(callback) {
    this._dataCategory.things.forEach(callback);
  }
}