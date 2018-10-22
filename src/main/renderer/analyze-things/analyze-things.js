import Vue from "../../../node_modules/vue/dist/vue.esm.browser.js";
import {APP, ml, projectListener} from './../config/begin-config.js';
import {AnalyzeThings_ProjectViewModel} from "./ProjectViewModel.js";
import './card-analyze-things-checkbox.js';
import './card-analyze-things-color.js';
import './card-analyze-things-text.js';
import './../shared/html/v-colors-hover.js';
import './../shared/html/tm-editable.js';
import './../shared/html/tm-sidebar.js';
import './../shared/html/tm-main-area.js';

const vueAppAnalyzeThings = new Vue({
  el: '#app-analyze-things',
  data: {
    area: APP.currentArea,
    viewModel: new AnalyzeThings_ProjectViewModel(APP),
    ml: ml
  },
  methods: {}
});

projectListener.on('new-category', (category) => vueAppAnalyzeThings.viewModel.onDataCategoryAdded(category));
projectListener.on('delete-category', (category) => vueAppAnalyzeThings.viewModel.onDataCategoryDeleted(category));
