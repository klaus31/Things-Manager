
import {APP} from './../config/begin-config.js';
import {ml} from './../config/MultiLanguage.js';
import {projectListener} from "../shared/ProjectListener.js";
import {AnalyzeThings_ProjectViewModel} from "./ProjectViewModel.js";
import './card-analyze-things-checkbox.js';
import './card-analyze-things-color.js';
import './card-analyze-things-text.js';
import './card-analyze-things-rating.js';
import './../shared/html/v-colors-hover.js';
import './../shared/html/tm-editable.js';
import './../shared/html/tm-sidebar.js';
import './../shared/html/tm-main-area.js';
import './../shared/html/photo-gallery.js';

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
