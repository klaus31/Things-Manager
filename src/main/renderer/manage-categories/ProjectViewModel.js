class ManagedCategory_ProjectViewModel {

  constructor(app) {
    this._shownCategories = [];
    app.project.categories.forEach(category => this._shownCategories.push(new ManagedCategory_CategoryViewModel(category)));
    this._app = app;
  }

  addNewCategory() {
    const dataCategory = new Category();
    this._app.project.categories.push(dataCategory);
    const categoryViewModel = new ManagedCategory_CategoryViewModel(dataCategory);
    categoryViewModel.toggleLock();
    this._shownCategories.push(categoryViewModel);
    projectListener.fire('new-category', dataCategory);
  }

  deleteCategory(managedCategory) {
    let me = this;
    managedCategory.withDataCategory(function (dataCategory) {
      me._app.project.categories.splice(me._app.project.categories.indexOf(dataCategory), 1);
      projectListener.fire('delete-category', dataCategory);
    });
    this._shownCategories.splice(this._shownCategories.indexOf(managedCategory), 1);
  }

  get shownCategories() {
    return this._shownCategories;
  }

  get projectName() {
    return this._app.project.name;
  }

  set projectName(projectName) {
    return this._app.project.name = projectName;
  }
}