import {APP, ml, projectListener} from './../config/begin-config.js';
import {ManagedThings_ProjectViewModel} from "./ProjectViewModel.js";
import './../shared/html/v-colors-hover.js';
import './../shared/html/tm-editable.js';
import './../shared/html/tm-sidebar.js';
import './../shared/html/tm-main-area.js';
import './card-manage-thing.js';

const vueAppManageThings = new Vue({
  el: '#app-manage-things',
  data: {
    area: APP.currentArea,
    viewModel: new ManagedThings_ProjectViewModel(APP),
    ml: ml
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
