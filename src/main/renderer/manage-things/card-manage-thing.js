import Vue from "../../../node_modules/vue/dist/vue.esm.browser.js";
import './../shared/html/tm-editable.js';
import './../shared/html/tm-button.js';
import './../shared/html/tm-input.js';
import './photo-gallery.js';

// XXX extract thing.locked to the outside and make 2 components of it: one for locked state, the other for unlocked state
Vue.component('card-manage-thing', {
  props: ['thing', 'project', 'ml'],
  computed: {
    ml_WxykMLwBTKWHuTIj: function () {
      return this.ml.get('WxykMLwBTKWHuTIj');
    },
    ml_CCXaoC1JKRXNcgXH: function () {
      return this.ml.get('CCXaoC1JKRXNcgXH');
    },
    ml_6aROasnal7tNQsPt: function () {
      return this.ml.get('6aROasnal7tNQsPt');
    },
    ml_iZ4l8dJ2jBTbd7Ja: function () {
      return this.ml.get('iZ4l8dJ2jBTbd7Ja');
    },
    ml_aSawO4UuPSIxZpQK: function () {
      return this.ml.get('aSawO4UuPSIxZpQK');
    },
    ml_5IwOpns5w1FNb4xj: function () {
      return this.ml.get('5IwOpns5w1FNb4xj');
    }
  },
  template: '' + nodeGetFileContent('manage-things/card-manage-thing.html')
});
