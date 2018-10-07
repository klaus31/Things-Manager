Vue.directive('autofocus', {
  inserted: el => el.focus()
});