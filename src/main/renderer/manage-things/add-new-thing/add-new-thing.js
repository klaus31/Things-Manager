const vueAppAddNewThing = new Vue({
  el: '#app-add-new-thing',
  data: {
    area: APP.currentArea,
    viewModel: new NewThingViewModel(APP),
    ml: ml
  },
  methods: {
    finalize() {
      this.viewModel.finalize();
      this.viewModel = new NewThingViewModel(APP);
    },
    cancel() {
      this.area.key = 'manage-things';
      this.viewModel = new NewThingViewModel(APP);
    }
  }
});