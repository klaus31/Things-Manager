import Vue from "../../../../node_modules/vue/dist/vue.esm.browser.js";
import '../../manage-things/photo.js';

Vue.component('photo-gallery', {
  props: ['photos'],
  computed: {
  },
  template: '' + nodeGetFileContent('shared/html/photo-gallery.html')
});
