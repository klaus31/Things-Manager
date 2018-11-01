import Vue from "../../../node_modules/vue/dist/vue.esm.browser.js";
import {APP} from './../config/begin-config.js';
import {ml} from './../config/MultiLanguage.js';
import {FirstThingViewModel} from "./FirstThingViewModel.js";
import {appStorage} from "../shared/data/AppStorage.js";
import './../shared/html/tm-sidebar.js';
import './../shared/html/tm-main-area.js';
import './card-first-thing.js';

new Vue({
  el: '#app-add-first-thing',
  data: {
    area: APP.currentArea,
    viewModel: new FirstThingViewModel(),
    ml: ml
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