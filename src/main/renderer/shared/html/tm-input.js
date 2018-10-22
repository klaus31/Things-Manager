import Vue from "../../../../node_modules/vue/dist/vue.esm.browser.js";
import './tm-input-geodata.js';
import './tm-input-range.js';
import './v-autofocus.js';
import './v-autoselect.js';

Vue.component('tm-input', {
  props: ['content', 'actions', 'type'],
  computed: {
    computedType: function () {
      return this.type || 'text';
    },
    isRange: function () {
      return this.type === 'range';
    },
    isGeodata: function () {
      return this.type === 'geodata';
    },
    isDefaultInput: function () {
      return this.type !== 'geodata' && this.type !== 'range';
    }
  },
  methods: {
    getValueOfEvent: function (event) {
      if (this.type === 'checkbox') {
        return event.currentTarget.checked;
      } else {
        return event.currentTarget.value;
      }
    },
    onChange: function (event) {
      if (this.actions && this.actions.onChange) {
        this.actions.onChange(this.getValueOfEvent(event));
      }
    },
    finish: function (event) {
      if (this.actions && this.actions.onDone) {
        this.actions.onDone(this.getValueOfEvent(event));
      }
    }
  },
  template: '<span>' +
    '<input v-if="isDefaultInput" :type="computedType" v-autofocus v-autoselect :value="content" @input="onChange" @blur="finish" @keydown.enter="finish">' +
    '<tm-input-geodata v-if="isGeodata" :content="content" :actions="actions"></tm-input-geodata>' +
    '<tm-input-range v-if="isRange" :content="content" :actions="actions"></tm-input-range>' +
    '</span>'

});
