import Vue from "../../../node_modules/vue/dist/vue.esm.browser.js";
Vue.component('card-analyze-things-color', {
  props: ['analyzedcategory', 'summary'],
  computed: {},
  template: '<table class="card card-color">' +
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
    '<td :style="{backgroundColor: analyzeResult.result}">' +
    '</td>' +
    '</tr>' +

    '</tbody>' +

    '</table>'
});
