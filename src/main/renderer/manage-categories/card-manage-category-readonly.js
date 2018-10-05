// XXX extract thing.locked to the outside and make 2 components of it: one for locked state, the other for unlocked state
Vue.component('card-manage-category-readonly', {
  props: ['project', 'category'],
  template: '<table class="card readonly" v-colors="category.colors">' +
    '<thead>' +
    '<tr>' +
    '<th colspan="2">' +
    '{{category.summary}}' +
    '<p class="buttons">' +
    '<tm-button v-if="category.isDeletable()" @click="project.deleteCategory(category)" icon="trash" title="Delete this category"></tm-button>' +
    '<tm-button @click="category.toggleLock()" class="btn-outset" icon="pencil" title="Modify this category"></tm-button>' +
    '</p>' +
    '</th>' +
    '</tr>' +
    '</thead>' +

    '<tbody>' +
    '<tr>' +
    '<td>Key</td>' +
    '<td>{{category.key}}</td>' +
    '</tr>' +
    '</tbody>' +
    '</table>'
});
