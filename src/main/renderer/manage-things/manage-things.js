const vueAppManageThings = new Vue({
  el: '#app-manage-things',
  data: {
    area: APP.currentArea,
    viewModel: new ManagedThings_ProjectViewModel(APP)
  },
  methods: {
    gotoNewThingAreaOf: function (category) {
      category.withDataCategory(cat => APP.currentArea.setTmpData('category', cat));
      APP.currentArea.key = 'add-new-thing';
    }
  }
});

projectListener.on('new-category', (category) => vueAppManageThings.viewModel.onDataCategoryAdded(category));
projectListener.on('delete-category', (category) => vueAppManageThings.viewModel.onDataCategoryDeleted(category));
projectListener.on('new-thing', (thingWithCategory) => vueAppManageThings.viewModel.onDataThingAdded(thingWithCategory));
