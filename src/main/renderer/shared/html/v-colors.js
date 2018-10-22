import Vue from "../../../../node_modules/vue/dist/vue.esm.browser.js";
Vue.directive('colors', function (el, binding) {
  el.style.backgroundColor = binding.value.backgroundColor;
  el.style.color = binding.value.color;
});