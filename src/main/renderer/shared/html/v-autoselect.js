Vue.directive('autoselect', {
  inserted: (el, binding) => {
    if(binding.value === 'true') el.select();
  }
});