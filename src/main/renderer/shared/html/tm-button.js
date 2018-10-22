import Vue from "../../../../node_modules/vue/dist/vue.esm.browser.js";
Vue.component('tm-button', {
  // https://getbootstrap.com/docs/3.3/css/#buttons-options
  props: ['icon', 'size', 'buttonstyle'],
  computed: {
    computedButtonClass: function () {
      let result = 'btn';
      if (this.size) {
        result += ' btn-' + this.size;
      } else {
        result += ' btn-xs';
      }
      if (this.buttonstyle) {
        result += ' btn-' + this.buttonstyle;
      } else {
        result += ' btn-default';
      }
      return result;
    },
    computedIcon: function () {
      if (this.icon) {
        return 'glyphicon glyphicon-' + this.icon;
      } else {
        return '';
      }
    }
  },
  template: '<button @click="$emit(\'click\')" :class="computedButtonClass"><span' +
    ' :class="computedIcon" v-if="computedIcon">&thinsp;</span><slot></slot></button>'
});
