import {ml} from './../config/MultiLanguage.js';
import {Thing} from "../shared/data/model/Thing.js";
import {Category} from "../shared/data/model/Category.js";
import {Project} from "../shared/data/model/Project.js";

export class FirstThingViewModel {
  constructor() {
    this.projectName = null;
    this.categorySingular = null;
    this.categoryPlural = null;
    this.categoryKeyName = null;
    this.firstThingValue = null;
    this.colors = {colorBackground: '#faebd7', color: '#000000'};
  }

  get thingsLabel() {
    return this.categoryPlural || ml.get('v4wZlj52pVH+sqqT');
  }

  get keypropertyLabel() {
    return this.categoryKeyName || ml.get('2BsZT2KP5Jr4Y7LS');
  }

  get thingLabel() {
    return this.categorySingular || ml.get('5ukUrFBsPqun4Dtc');
  }

  get h1() {
    return this.projectName || ml.get('SjHPZn9s83cjI2OL');
  }

  toProject() {
    const thing = new Thing();
    thing.keyvalue = this.firstThingValue;
    const category = new Category();
    category.propertyKey.name = this.categoryKeyName;
    category.propertyKey.type = 'text';
    category.singular = this.categorySingular;
    category.plural = this.categoryPlural;
    category.colorBackground = this.colors.colorBackground;
    category.colorText = this.colors.color;
    category.things.push(thing);
    const project = new Project();
    project.name = this.projectName;
    project.categories.push(category);
    return project;
  }

  isReadyToStart() {
    return this.projectName && this.categorySingular && this.categoryPlural && this.categoryKeyName && this.firstThingValue
  }
}