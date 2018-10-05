// XXX extract thing.locked to the outside and make 2 components of it: one for locked state, the other for unlocked state
Vue.component('card-manage-category-editable', {
  props: ['project', 'category'],
  template: '<table class="card editable" v-colors="category.colors">' +
    '<thead>' +
    '<tr>' +
    '<th colspan="2">' +
    '{{category.summary}}' +
    '<p class="buttons">' +
    '<tm-button v-if="category.isDeletable()" @click="project.deleteCategory(category)" icon="trash" title="Delete this category"></tm-button>' +
    '<tm-button @click="category.toggleLock()" class="btn-inset" icon="pencil" title="Stop modifying this category"></tm-button>' +
    '</p>' +
    '</th>' +
    '</tr>' +
    '</thead>' +

    '<tbody>' +

    '<tr>' +
    '<td>' +
    'Singular Term' +
    '</td>' +
    '<td class="input">' +
    '<input v-model="category.singular" type="text" placeholder="e.g. Book">' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td>' +
    'Plural Term' +
    '</td>' +
    '<td class="input">' +
    '<input v-model="category.plural" type="text" placeholder="e.g. Books">' +
    '</td>' +
    '</tr>' +

    '<tr>' +
    '<td colspan="2">' +
    '<strong>What is the most important attribute of your {{category.plural}}?</strong>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td>' +
    'Attribute:' +
    '</td>' +
    '<td class="input">' +
    '<input v-model="category.key" type="text" placeholder="e.g. Title">' +
    '</td>' +
    '</tr>' +

    '<tr>' +
    '<td colspan="2">' +
    '<strong>What color should be cards of {{category.plural}} in?</strong>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td>' +
    'Background' +
    '</td>' +
    '<td class="input">' +
    '<input v-model="category.backgroundColor" type="color">' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td>' +
    'Text' +
    '</td>' +
    '<td class="input">' +
    '<input v-model="category.textColor" type="color">' +
    '</td>' +
    '</tr>' +

    '</tbody>' +
    '</table>'
});
