import Vue from "../../../node_modules/vue/dist/vue.esm.browser.js";
import {projectListener} from '../shared/ProjectListener.js';

Vue.component('photo', {
  props: ['photo'],
  computed: {},
  methods: {
    enlarge: function (photo) {
      projectListener.fire('enlarge-photo', photo);
    }
  },
  template: '' + nodeGetFileContent('manage-things/photo.html')
});
