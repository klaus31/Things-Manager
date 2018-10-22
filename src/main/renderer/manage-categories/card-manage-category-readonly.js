import Vue from "../../../node_modules/vue/dist/vue.esm.browser.js";
// XXX extract thing.locked to the outside and make 2 components of it: one for locked state, the other for unlocked state
Vue.component('card-manage-category-readonly', {
  props: ['project', 'category', 'ml'],
  computed: {
    ml_sHYY8EbLsT9BJMhP: function () {
      return this.ml.get('sHYY8EbLsT9BJMhP', this.category.plural);
    },
    ml_81fdkF15tHGsR51c: function () {
      return this.ml.get('81fdkF15tHGsR51c', this.category.plural);
    }
  },
  template: '<table class="card readonly" v-colors="category.colors">' +
    '<thead>' +
    '<tr>' +
    '<th colspan="2">' +
    '{{category.summary}}' +
    '<p class="buttons">' +
    '<tm-button v-if="category.isDeletable()" @click="project.deleteCategory(category)" icon="trash" :title="ml_sHYY8EbLsT9BJMhP"></tm-button>' +
    '<tm-button @click="category.toggleLock()" class="btn-outset" icon="pencil" :title="ml_81fdkF15tHGsR51c"></tm-button>' +
    '</p>' +
    '</th>' +
    '</tr>' +
    '</thead>' +

    '<tbody>' +
    '<tr>' +
    '<td>{{ml.get("v+rklxvZbiWi5k+A")}}</td>' +
    '<td>{{category.key}}</td>' +
    '</tr>' +
    '</tbody>' +
    '</table>'
});
