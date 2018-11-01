import Vue from "../../../../node_modules/vue/dist/vue.esm.browser.js";
import './tm-input-geodata.js';
import './tm-input-range.js';
import './tm-input-rating.js';
import './tm-input-checkbox.js';
import './tm-input-float.js';
import './v-autofocus.js';
import './v-autoselect.js';

Vue.component('tm-input', {
  props: ['content', 'actions', 'type', 'autoselect', 'autofocus'],
  computed: {
    computedType: function () {
      return this.type || 'text';
    },
    isRange: function () {
      return this.type === 'range';
    },
    isRating: function () {
      return this.type === 'rating';
    },
    isGeodata: function () {
      return this.type === 'geodata';
    },
    isCheckbox: function () {
      return this.type === 'checkbox';
    },
    isFloat: function () {
      return this.type === 'float' || this.type === 'dollar' || this.type === 'euro';
    },
    isYear: function () {
      return this.type === 'year';
    },
    isDefaultInput: function () {
      // XXX does not work. don't know why. return !['rating', 'range', 'geodata'].contains(this._type);
      return this.type !== 'geodata' &&
        this.type !== 'range' &&
        this.type !== 'checkbox' &&
        this.type !== 'float' &&
        this.type !== 'dollar' &&
        this.type !== 'euro' &&
        this.type !== 'year' &&
        this.type !== 'rating';
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
    '<input v-if="isDefaultInput" :type="computedType" :value="content" @input="onChange" @blur="finish" @keydown.enter="finish" v-autofocus="autofocus" v-autoselect="autoselect">' +
    '<input v-if="isYear" type="number" :value="content" @input="onChange" @blur="finish" @keydown.enter="finish" v-autofocus="autofocus" v-autoselect="autoselect">' +
    '<tm-input-checkbox v-if="isCheckbox" :content="content" :actions="actions"></tm-input-checkbox>' +
    '<tm-input-geodata v-if="isGeodata" :content="content" :actions="actions" autofocus="autofocus" autoselect="autoselect"></tm-input-geodata>' +
    '<tm-input-range v-if="isRange" :content="content" :actions="actions" autofocus="autofocus" autoselect="autoselect"></tm-input-range>' +
    '<tm-input-rating v-if="isRating" :content="content" :actions="actions"></tm-input-rating>' +
    '<tm-input-float v-if="isFloat" :content="content" :actions="actions" :type="type" autofocus="autofocus" autoselect="autoselect"></tm-input-float>' +
    '</span>'
});
