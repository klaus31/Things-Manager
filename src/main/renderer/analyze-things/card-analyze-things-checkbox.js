Vue.component('card-analyze-things-checkbox', {
  props: ['value'],
  computed: {},
  template: '<table class="card editable" v-colors="value.colors">' +
    '<thead>' +
    '<tr>' +
    '<th>' +
    '{{value.summary}}' +
    '</th>' +
    '</tr>' +
    '</thead>' +

    '<tbody>' +

    '<tr v-for="analyzeResult in value.analyzeResults">' +
    '<td>' +
    '{{analyzeResult.thing}}' +
    '</td>' +
    '</tr>' +

    '</tbody>' +
    '</table>'
});
