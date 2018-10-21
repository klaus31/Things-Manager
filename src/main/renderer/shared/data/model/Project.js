import {Category} from './Category.js';

export class Project {

  constructor() {
    this._name = null;
    this._categories = [];
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get categories() {
    return this._categories;
  }

  set categories(categories) {
    this._categories = categories;
  }

  getCategoryFromUuid(uuid) {
    let i = this._categories.length;
    while (i--) {
      if (this._categories[i].uuid === uuid) {
        return this._categories[i];
      }
    }
    throw 'no category with uuid "' + uuid + '" found';
  }



  toJSON() {
    let categories = [];
    this._categories.forEach(category => categories.push(category.toJSON()));
    return {
      categories: categories,
      name: this._name
    };
  }

  static fromJSON(json) {
    const result = new Project(json.name);
    result._name = json.name;
    result._categories = [];
    json.categories.forEach(category => result._categories.push(Category.fromJSON(category)));
    return result;
  }
}