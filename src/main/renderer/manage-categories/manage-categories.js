import {APP, ml} from './../config/begin-config.js';
import {ManagedCategory_ProjectViewModel} from "./ProjectViewModel.js";
import './../shared/html/tm-editable.js';
import './../shared/html/tm-sidebar.js';
import './../shared/html/tm-main-area.js';
import './card-manage-category-readonly.js';
import './card-manage-category-editable.js';

new Vue({
    el: '#app-manage-categories',
    data: {
      area: APP.currentArea,
      viewModel: new ManagedCategory_ProjectViewModel(APP),
      ml: ml
    },
    methods: {}
  })
;