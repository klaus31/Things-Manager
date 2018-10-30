import {DataTypeProvider} from "../shared/data/DataTypeProvider.js";
import {projectListener} from "../config/begin-config";
import {Thing} from "../shared/data/model/Thing.js";
import {Property} from "../shared/data/model/Property.js";

export class NewThingViewModel {

  constructor(app) {
    this._dataCategory = null;
    this._project = app.project;
    this._app = app;
    this._thing = new Thing();
  }

  get thing() {
    return this._thing;
  }

  get category() {
    const tmpCategory = this._app.currentArea.popTmpData('category');
    if (tmpCategory) {
      this._dataCategory = tmpCategory;
    }
    if (!this._dataCategory) {
      this._dataCategory = this._app.project.categories[0];
    }
    return this._dataCategory;
  }

  set category(category) {
    this._dataCategory = category;
  }

  get projectName() {
    return this._project.name;
  }

  set projectName(projectName) {
    this._project.name = projectName;
  }


  colors(category) {
    category = category || this._dataCategory;
    return {colorBackground: category.colorBackground, colorText: category.colorText};
  }

  get datatypeOptions() {
    return DataTypeProvider.getDatatypes();
  }

  addMissingPropertiesFromOtherThings() {
    const propertyKeys = this._dataCategory.findPropertyKeysOfAllThings();
    propertyKeys.forEach(propertyKey => {
      if (!this._thing.containsPropertyKey(propertyKey)) {
        this._thing.properties.push(new Property(propertyKey));
      }
    });
  }

  addNewEmptyProperty() {
    this._thing.properties.push(new Property());
  }

  deleteProperty(property) {
    this._thing.properties.removeItem(property);
  }

  cloneProperty(property) {
    this._thing.properties.push(property.clone());
  }

  get categories() {
    return this._project.categories;
  }

  finalize() {
    this._dataCategory.things.push(this._thing);
    projectListener.fire('new-thing', {thing: this._thing, category: this._dataCategory});
    this._app.setCurrentAreaKey('manage-things');
  }
}