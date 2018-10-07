const vueAppAddNewThing = new Vue({
  el: '#app-add-new-thing',
  data: {
    area: APP.currentArea,
    viewModel: new NewThingViewModel(APP),
    ml: ml
  },
  methods: {
  }
});