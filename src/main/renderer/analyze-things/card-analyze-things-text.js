Vue.component('card-analyze-things-text', {
  props: ['value', 'ml'],
  computed: {},
  template: '<table class="card editable" v-colors="value.colors">' +
    '<thead>' +
    '<tr>' +
    '<th colspan="2">' +
    '{{value.summary}}' +
    '</th>' +
    '</tr>' +
    '</thead>' +

    '<tbody>' +

    '<tr v-for="analyzeResult in value.analyzeResults">' +
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
