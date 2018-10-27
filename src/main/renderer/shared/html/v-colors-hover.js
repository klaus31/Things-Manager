import Vue from "../../../../node_modules/vue/dist/vue.esm.browser.js";
Vue.directive('colors-hover', function (el, binding) {

  let oldStyle = el.style;

  el.addEventListener("mouseover", function () {
    el.style.backgroundColor = binding.value.colorBackground;
    el.style.color = binding.value.colorText;
  });
  
  el.addEventListener("mouseout", function () {
    el.style = oldStyle;
  });

});