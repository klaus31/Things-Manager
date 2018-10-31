import Vue from "../../../node_modules/vue/dist/vue.esm.browser.js";
import {ml, projectListener} from '../config/begin-config.js';

const vueEnlargedThingEditable = new Vue({
  el: '#enlarged-thing-editable',
  data: {
    thing: null,
    project: null,
    ml: ml
  },
  computed: {
    ml_WxykMLwBTKWHuTIj: function () {
      return this.ml.get('WxykMLwBTKWHuTIj');
    },
    ml_CCXaoC1JKRXNcgXH: function () {
      return this.ml.get('CCXaoC1JKRXNcgXH');
    },
    ml_aSawO4UuPSIxZpQK: function () {
      return this.ml.get('aSawO4UuPSIxZpQK');
    },
    ml_5IwOpns5w1FNb4xj: function () {
      return this.ml.get('5IwOpns5w1FNb4xj');
    },
    ml_iZ4l8dJ2jBTbd7Ja: function () {
      return this.ml.get('iZ4l8dJ2jBTbd7Ja');
    }
  },
  methods: {
    close: function () {
      this.thing = null;
    }
  }
});

projectListener.on('enlarge-thing-editable', function (pAndT) {
  vueEnlargedThingEditable.project = pAndT.project; // XXX this is a manage-things/ThingCardViewModel.js, which defines things, only used here
  vueEnlargedThingEditable.thing = pAndT.thing; // XXX this is a manage-things/ThingCardViewModel.js, which defines things, only used here
});

// FIXME will close mandy enlarged areas (photo and thing)
projectListener.on('key-event-esc', () => vueEnlargedThingEditable.close());

