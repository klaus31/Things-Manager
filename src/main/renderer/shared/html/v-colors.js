import Vue from "../../../../node_modules/vue/dist/vue.esm.browser.js";
Vue.directive('colors', function (el, binding) {
  el.style.backgroundColor = binding.value.colorBackground;
  el.style.color = binding.value.colorText;
});