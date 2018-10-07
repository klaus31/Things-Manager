const vueTitle_computeTitle = function () {
  let result = [];

  if (APP.project && APP.project.name) {
    result.push(APP.project.name);
  }

  result.push('Thing Manager');

  if (APP.currentFile) {
    result.push(APP.currentFile);
  }
  if (APP.changesMade) {
    result.push(ml.get('XcXP+51C4Uxml8If') + ' ' + moment(APP.changesMade, "YYYYMMDDHHmm").fromNow());
  }

  return result.join(' ||| ');
};

const vueTitle = new Vue({
  el: 'title',
  data: {
    title: vueTitle_computeTitle()
  }
});

projectListener.on('app-changed', () => vueTitle.title = vueTitle_computeTitle());
window.setInterval(() => vueTitle.title = vueTitle_computeTitle(), 1000);
