import {AnalyzeThings_CategoryViewModel} from './CategoryViewModel.js';
import {AnalyzeCheckboxStrategy} from './AnalyzeCheckboxStrategy.js';
import {AnalyzeNumberStrategy} from './AnalyzeNumberStrategy.js';
import {AnalyzeTimeperiodStrategy} from './AnalyzeTimeperiodStrategy.js';
import {AnalyzeDateStrategy} from './AnalyzeDateStrategy.js';
import {AnalyzeColorStrategy} from './AnalyzeColorStrategy.js';
import {AnalyzeRangeStrategy} from './AnalyzeRangeStrategy.js';
import {AnalyzeEuroStrategy} from './AnalyzeEuroStrategy.js';
import {AnalyzeFloatStrategy} from './AnalyzeFloatStrategy.js';
import {AnalyzeDollarStrategy} from './AnalyzeDollarStrategy.js';
import {AnalyzeTextStrategy} from './AnalyzeTextStrategy.js';
import {AnalyzePhotoAllStrategy} from "./AnalyzePhotoAllStrategy";
import {AnalyzePhotoMainStrategy} from "./AnalyzePhotoMainStrategy";
import {AnalyzePreselectionStrategy} from "./AnalyzePreselectionStrategy";

export class AnalyzeThings_ProjectViewModel {

  constructor(app) {
    this._app = app;
    this._categories = [];
    app.project.categories.forEach(category => this._categories.push(new AnalyzeThings_CategoryViewModel(category)));
    this._shownCategory = null;
    this._possibilityToAnalyze = null;
  }

  get possibilityToAnalyze() {
    if (!this._possibilityToAnalyze) {
      if (this._shownCategory.analyzePossibilities.length) {
        this._possibilityToAnalyze = this._shownCategory.analyzePossibilities[0];
      }
    }
    return this._possibilityToAnalyze;
  }

  get cardSummary() {
    let plural = null;
    this._shownCategory.withDataCategory(c => plural = c.plural)
    return plural + ': ' + this._possibilityToAnalyze.text;
  }

  get cardColors() {
    return this._shownCategory.colors;
  }

  set possibilityToAnalyze(possibilityToAnalyze) {
    this._possibilityToAnalyze = possibilityToAnalyze;
  }

  get category() {
    if (!this._shownCategory) this._shownCategory = this._categories[0];
    return this._shownCategory;
  }

  set category(category) {
    this._shownCategory = category;
    if (category.analyzePossibilities.length) {
      this._possibilityToAnalyze = category.analyzePossibilities[0];
    }
  }

  // XXX this is not an analysis yet but another representation of things
  get analyzedCategoryResult() {
    let strategy = null;
    if (this._possibilityToAnalyze.id.startsWith('preselection')) {
      strategy = new AnalyzePreselectionStrategy();
    } else {
      switch (this._possibilityToAnalyze.id) {
        case 'checkbox':
          strategy = new AnalyzeCheckboxStrategy();
          break;
        case 'number':
        case 'rating':
          strategy = new AnalyzeNumberStrategy();
          break;
        case 'timeperiod':
          strategy = new AnalyzeTimeperiodStrategy();
          break;
        case 'date':
        case 'time':
        case 'datetime-local':
        case 'week':
        case 'month':
          strategy = new AnalyzeDateStrategy();
          break;
        case 'color':
          strategy = new AnalyzeColorStrategy();
          break;
        case 'range':
          strategy = new AnalyzeRangeStrategy();
          break;
        case 'euro':
          strategy = new AnalyzeEuroStrategy();
          break;
        case 'float':
          strategy = new AnalyzeFloatStrategy();
          break;
        case 'dollar':
          strategy = new AnalyzeDollarStrategy();
          break;
        case 'photo-main':
          strategy = new AnalyzePhotoMainStrategy();
          break;
        case 'photo-all':
          strategy = new AnalyzePhotoAllStrategy();
          break;
        default:
          strategy = new AnalyzeTextStrategy();
          break;
      }
    }
    this._shownCategory.forEachThing(thing => {
      let results = strategy.analyzeThing(thing, this._possibilityToAnalyze);
    });
    return strategy.finalize();
  }

  get analyzeIdToShow() {
    switch (this._possibilityToAnalyze.id) {
      case 'checkbox':
        return 'checkbox';
      case 'color':
        return 'color';
      case 'rating':
        return 'rating';
      case 'photo-main':
      case 'photo-all':
        return 'photo';
      default:
        return 'text';
    }
  }

  get categories() {
    return this._categories;
  }

  get projectName() {
    return this._app.project.name;
  }

  set projectName(projectName) {
    return this._app.project.name = projectName;
  }

  onDataCategoryAdded(dataCategory) {
    this._categories.push(new AnalyzeThings_CategoryViewModel(dataCategory));
  }

  onDataCategoryDeleted(dataCategory) {
    let i = this._categories.length;
    while (i--) {
      if (this._categories[i].manages(dataCategory)) {
        this._categories.removeItemWithIndex(i);
      }
    }
  }
}