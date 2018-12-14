Vue.directive('autofocus', {
  inserted: (el, binding) => {
    if(binding.value === 'true') el.focus();
  }
});