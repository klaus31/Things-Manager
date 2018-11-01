import Vue from "../../../../node_modules/vue/dist/vue.esm.browser.js";
Vue.component('tm-input-range', {
  props: ['content', 'actions', 'autoselect', 'autofocus'],
  methods: {
    onChange: function (event) {
      if (this.actions && this.actions.onChange) {
        this.actions.onChange(event.currentTarget.value);
      }
    },
    onDone: function (event) {
      if (this.actions && this.actions.onDone) {
        this.actions.onDone(event.currentTarget.value);
      }
    }
  },
  template: '<span>' +
    '<input type="range" :value="content" @input="onChange" @blur="onDone" @keydown.enter="onDone", v-autofocus="autofocus" v-autoselect="autoselect">' +
    '<span>{{content}} %</span>' +
    '</span>'

});
