import Vue from "../../../node_modules/vue/dist/vue.esm.browser.js";
import './../shared/html/tm-editable.js';
import './../shared/html/tm-button.js';
import './../shared/html/tm-input.js';
import './photo-gallery.js';
import {projectListener} from '../shared/ProjectListener.js';

Vue.component('card-manage-thing', {
  props: ['thing', 'project', 'ml'],
  computed: {
    ml_6aROasnal7tNQsPt: function () {
      return this.ml.get('6aROasnal7tNQsPt');
    }
  },
  methods: {
    edit: function (thing) {
      projectListener.fire('enlarge-thing-editable', {thing: thing, project: this.project});
    }
  },
  template: '' + nodeGetFileContent('manage-things/card-manage-thing-locked.html')
});
