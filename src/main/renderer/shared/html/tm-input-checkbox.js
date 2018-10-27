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
    computedHtmlOn: function () {
      let colors = {
        colorBackground: this.on ? 'white' : 'rgb(255,255,255,0)'
      };
      return DataTypeValueUtil.formatContent('checkbox', true, 'html', colors);
    },
    computedHtmlOff: function () {
      let colors = {
        colorBackground: !this.on ? 'white' : 'rgb(255,255,255,0)'
      };
      return DataTypeValueUtil.formatContent('checkbox', false, 'html', colors);
    }
  },
  methods: {
    onDone: function () {
      if (this.actions && this.actions.onDone) {
        this.actions.onDone(this.on);
      }
    },
    setChange: function (on) {
      this.on = on;
      if (this.actions && this.actions.onChange) {
        this.actions.onChange(on);
      }
      this.onDone();
    },
    setOn: function () {
      this.setChange(true);
    },
    setOff: function () {
      this.setChange(false);
    }
  },
  template: '<p>' +
    '<span v-html="computedHtmlOff" @click="setOff"></span>&nbsp;&nbsp;' +
    '<span v-html="computedHtmlOn" @click="setOn"></span>' +
    '</p>'
});
