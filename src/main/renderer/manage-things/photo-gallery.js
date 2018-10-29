import Vue from "../../../node_modules/vue/dist/vue.esm.browser.js";
import './photo.js';

Vue.component('photo-gallery', {
  props: ['photos', 'ml'],
  computed: {
  },
  template: '' + nodeGetFileContent('manage-things/photo-gallery.html')
});
