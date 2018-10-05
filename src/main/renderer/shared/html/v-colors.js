Vue.directive('colors', function (el, binding) {
  el.style.backgroundColor = binding.value.backgroundColor;
  el.style.color = binding.value.color;
});