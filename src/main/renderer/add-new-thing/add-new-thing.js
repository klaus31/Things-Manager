import Vue from "../../../node_modules/vue/dist/vue.esm.browser.js";
import {APP, ml} from './../config/begin-config.js';
import {NewThingViewModel} from "./NewThingViewModel.js";
import './../shared/html/v-colors-hover.js';
import './../shared/html/tm-editable.js';
import './../shared/html/tm-sidebar.js';
import './../shared/html/tm-main-area.js';
import './card-new-thing.js'

new Vue({
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