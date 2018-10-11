Vue.component('card-analyze-things-text', {
  props: ['analyzedcategory', 'summary'],
  computed: {},
  template: '<table class="card">' +
    '<thead>' +
    '<tr>' +
    '<th colspan="2">' +
    '{{summary}}' +
    '</th>' +
    '</tr>' +
    '</thead>' +

    '<tbody>' +

    '<tr v-for="analyzeResult in analyzedcategory.analyzedThingsResults">' +
    '<td>' +
    '{{analyzeResult.thing}}' +
    '</td>' +
    '<td>' +
    '{{analyzeResult.result}}' +
    '</td>' +
    '</tr>' +

    '</tbody>' +
    '</table>'
});
