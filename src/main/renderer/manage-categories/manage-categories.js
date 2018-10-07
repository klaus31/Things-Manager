const vueAppManageCategories = new Vue({
    el: '#app-manage-categories',
    data: {
      area: APP.currentArea,
      viewModel: new ManagedCategory_ProjectViewModel(APP),
      ml: ml
    },
    methods: {}
  })
;