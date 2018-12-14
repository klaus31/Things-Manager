
import {DataTypeValueUtil} from "../shared/data/DataTypeValueUtil";

Vue.component('card-analyze-things-rating', {
  props: ['analyzedcategory', 'summary', 'colors'],
  computed: {},
  methods: {
    stars(number) {
      return DataTypeValueUtil.formatContent('rating', number, 'html', this.colors);
    }
  },
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
    '<td v-html="stars(analyzeResult.result)">' +
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
