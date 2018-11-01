import Vue from "../../../../node_modules/vue/dist/vue.esm.browser.js";
Vue.directive('autofocus', {
  inserted: (el, binding) => {
    if(binding.value === 'true') el.focus();
  }
});