const vueTitle_computeTitle = function () {
  let result = [];

  if (APP.project && APP.project.name) {
    result.push(APP.project.name);
  }

  result.push('Thing Manager');

  if (APP.currentFile) {
    result.push(APP.currentFile);
  }
  result.push(moment(new Date()).format('DD.MM.YYYY HH:mm:ss'));

  return result.join(' ||| ');
};

const vueTitle = new Vue({
  el: 'title',
  data: {
    title: vueTitle_computeTitle()
  }
});

projectListener.on('app-changed', () => vueTitle.title = vueTitle_computeTitle());
