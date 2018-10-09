Vue.directive('colors-hover', function (el, binding) {

  let oldStyle = el.style;

  el.addEventListener("mouseover", function () {
    el.style.backgroundColor = binding.value.backgroundColor;
    el.style.color = binding.value.color;
  });
  
  el.addEventListener("mouseout", function () {
    el.style = oldStyle;
  });

});