
Vue.component('card-analyze-things-checkbox', {
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
    '<td colspan="2">' +
    '{{analyzeResult.thing}}' +
    '</td>' +
    '</tr>' +

    '</tbody>' +

    '<tfoot v-if="analyzedcategory.additionalResults.length">' +
    '<tr v-for="additionalResult in analyzedcategory.additionalResults">' +
    '<td>' +
    '{{additionalResult.key}}' +
    '</td>' +
    '<td>' +
    '{{additionalResult.value}}' +
    '</td>' +
    '</tr>' +
    '</tfoot>' +
    '</table>'
});
