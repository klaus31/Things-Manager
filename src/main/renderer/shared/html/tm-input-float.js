import Vue from "../../../../node_modules/vue/dist/vue.esm.browser.js";
Vue.component('tm-input-float', {
  props: ['content', 'actions', 'type', 'autoselect', 'autofocus'],
  methods: {
    format: function(content) {
      let value = content;
      value = value.replace(',', '.').replace(/[^\d.-]/g, '');
      value = parseFloat(Math.round(value * 100) / 100).toFixed(2);
      if(isNaN(value)) value = 0;
      return value;
    },
    onChange: function (event) {
      let value = event.currentTarget.value;
      if (this.actions && this.actions.onChange) {
        this.actions.onChange(value);
      }
    },
    onDone: function (event) {
      let value = this.format(event.currentTarget.value);
      if (this.actions && this.actions.onDone) {
        this.actions.onDone(value);
      }
    }
  },
  template: '<span>' +
    '<input type="text" :value="content" @input="onChange" @blur="onDone" @keydown.enter="onDone" v-autoselect="autoselect" v-autofocus="autofocus">' +
    '</span>'

});
