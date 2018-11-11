import Vue from "../../../../node_modules/vue/dist/vue.esm.browser.js";
import {APP} from './../../config/begin-config.js'; // XXX access to most global object in most tiny component :(

function computePreselection(uuid) {
  const categories = APP.project.categories;
  let i = categories.length;
  while (i--) {
    let j = categories[i].preselections.length;
    while (j--) {
      if (categories[i].preselections[j].uuid === uuid) {
        return categories[i].preselections[j];
      }
    }
  }
  throw 'cannot find preselection for ' + this.uuid;
}

function computeUuidSelectedOption(uuid, content, vueComponent) {
  let preselection = computePreselection(uuid);
  preselection.options.forEach(option => {
    if (option.uuid === content) return option.uuid;
  });
  vueComponent.onChange(preselection.options[0].uuid);
  return preselection.options[0].uuid;
}

const foo = Vue.component('tm-input-preselection', {
  props: ['uuid', 'actions', 'content'],
  data: function () {
    return {
      preselection: computePreselection(this.uuid),
      uuidSelectedOption: computeUuidSelectedOption(this.uuid, this.content, this)
    }
  },
  computed: {},
  methods: {
    onChange: function (uuid) {
      uuid = typeof(uuid) === 'string' ? uuid : this.uuidSelectedOption;
      if (this.actions) {
        if (this.actions.onChange) this.actions.onChange(uuid);
        if (this.actions.onDone) this.actions.onDone(uuid);
      }
    }
  },
  watch: {
    uuid: function () {
      this.preselection = computePreselection(this.uuid);
      this.uuidSelectedOption = computeUuidSelectedOption(this.uuid, this.content, this);
    }
  },
  template: '<select v-model="uuidSelectedOption" @change="onChange">' +
    '<option v-for="option in preselection.options" :value="option.uuid">{{option.value}}</option>' +
    '</select>'

});
