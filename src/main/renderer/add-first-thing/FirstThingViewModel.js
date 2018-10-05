class FirstThingViewModel {
  constructor() {
    this.projectName = null;
    this.categorySingular = null;
    this.categoryPlural = null;
    this.categoryKeyName = null;
    this.firstThingValue = null;
    this.colors = {backgroundColor: '#faebd7', color: '#000000'};
  }

  get thingsLabel() {
    return this.categoryPlural || 'things';
  }

  get keypropertyLabel() {
    return this.categoryKeyName || 'attribute';
  }

  get thingLabel() {
    return this.categorySingular || 'thing';
  }

  get h1() {
    return this.projectName || 'Your Project';
  }

  toProject() {
    const thing = new Thing();
    thing.keyvalue = this.firstThingValue;
    const category = new Category();
    category.propertyKey.name = this.categoryKeyName;
    category.propertyKey.type = 'text';
    category.singular = this.categorySingular;
    category.plural = this.categoryPlural;
    category.colorBackground = this.colors.backgroundColor;
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