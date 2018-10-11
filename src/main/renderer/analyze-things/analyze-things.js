const vueAppAnalyzeThings = new Vue({
  el: '#app-analyze-things',
  data: {
    area: APP.currentArea,
    viewModel: new AnalyzeThings_ProjectViewModel(APP),
    ml: ml
  },
  methods: {
  }
});

projectListener.on('new-category', (category) => vueAppAnalyzeThings.viewModel.onDataCategoryAdded(category));
projectListener.on('delete-category', (category) => vueAppAnalyzeThings.viewModel.onDataCategoryDeleted(category));
