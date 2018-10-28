import Vue from "../../../node_modules/vue/dist/vue.esm.browser.js";

Vue.component('photo', {
  props: ['photo'],
  computed: {
  },
  template: '' + nodeGetFileContent('manage-things/photo.html')
});
