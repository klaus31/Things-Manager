Vue.component('card-analyze-things-checkbox', {
  props: ['analyzedcategory', 'summary'],
  computed: {},
  template: '<table class="card">' +
    '<thead>' +
    '<tr>' +
    '<th>' +
    '{{summary}}' +
    '</th>' +
    '</tr>' +
    '</thead>' +

    '<tbody>' +

    '<tr v-for="analyzeResult in analyzedcategory.analyzedThingsResults">' +
    '<td>' +
    '{{analyzeResult.thing}}' +
    '</td>' +
    '</tr>' +

    '</tbody>' +
    '</table>'
});
