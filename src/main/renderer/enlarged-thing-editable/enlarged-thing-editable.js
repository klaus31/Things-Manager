
import {ml} from './../config/MultiLanguage.js';
import {projectListener} from '../shared/ProjectListener.js';
import {escapeActionStack} from "../shared/EscapeActionStack.js";

const vueEnlargedThingEditable = new Vue({
  el: '#enlarged-thing-editable',
  data: {
    thing: null,
    project: null,
    ml: ml
  },
  computed: {
    ml_aSawO4UuPSIxZpQK: function () {
      return this.ml.get('aSawO4UuPSIxZpQK');
    },
    ml_5IwOpns5w1FNb4xj: function () {
      return this.ml.get('5IwOpns5w1FNb4xj');
    },
    ml_iZ4l8dJ2jBTbd7Ja: function () {
      return this.ml.get('iZ4l8dJ2jBTbd7Ja');
    },
    preselections: function() {
      return this.thing.preselections;
    }
  },
  methods: {
    close: function () {
      escapeActionStack.pop();
      this.thing = null;
    },
    closeOverEscape: function () {
      this.thing = null;
    },
    changeCategory: function (event) {
      this.thing = this.project.changeCategory(this.thing, event.currentTarget.value);
    }
  }
});

projectListener.on('enlarge-thing-editable', function (pAndT) {
  vueEnlargedThingEditable.project = pAndT.project; // XXX this is a manage-things/ThingCardViewModel.js, which defines things, only used here
  vueEnlargedThingEditable.thing = pAndT.thing; // XXX this is a manage-things/ThingCardViewModel.js, which defines things, only used here
  escapeActionStack.push(() => vueEnlargedThingEditable.closeOverEscape());
});
