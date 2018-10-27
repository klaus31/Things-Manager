import Vue from "../../../../node_modules/vue/dist/vue.esm.browser.js";
import {DataTypeValueUtil} from "../data/DataTypeValueUtil";

Vue.component('tm-input-checkbox', {
  props: ['content', 'actions'],
  data: function () {
    return {
      on: this.content
    }
  },
  computed: {
    computedHtml: function () {
      return DataTypeValueUtil.formatContent('checkbox', this.on, 'html');
    }
  },
  methods: {
    onDone: function () {
      if (this.actions && this.actions.onDone) {
        this.actions.onDone(this.on);
      }
    },
    toggleOn: function () {
      this.on = !this.on;
      if (this.actions && this.actions.onChange) {
        this.actions.onChange(this.on);
      }
      this.onDone();
    }
  },
  template: '<p>' +
    '<span v-html="computedHtml" @click="toggleOn"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
    '<tm-button icon="ok" @click="onDone" v-if="actions.onDone"></tm-button>' +
    '</p>'
});
