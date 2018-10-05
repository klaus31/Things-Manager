const vueAppAddFirstThing = new Vue({
  el: '#app-add-first-thing',
  data: {
    area: APP.currentArea,
    viewModel: new FirstThingViewModel()
  },
  methods: {
    start: function() {
      APP.project = this.viewModel.toProject();
      APP.setCurrentAreaKey('manage-things');
      appStorage.storeApp(APP);
      window.location.reload();
    }
  }
});