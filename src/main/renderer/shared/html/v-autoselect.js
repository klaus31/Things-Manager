import Vue from "../../../../node_modules/vue/dist/vue.esm.browser.js";
Vue.directive('autoselect', {
  inserted: el => el.select()
});