import Vue from "../../../../node_modules/vue/dist/vue.esm.browser.js";
Vue.directive('autofocus', {
  inserted: el => el.focus()
});