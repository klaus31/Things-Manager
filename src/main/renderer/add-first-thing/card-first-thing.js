Vue.component('card-first-thing', {
  props: ['value', 'start'],
  methods: {},
  template: '<table class="card card-first-thing" v-colors="value.colors">' +
    '<thead>' +

    '<tr>' +
    '<th colspan="2">' +
    'Define your first thing here' +
    '</th>' +
    '</tr>' +
    '</thead>' +

    '<tbody>' +

    '<tr>' +
    '<td colspan="2">' +
    '<strong>What is your mission?</strong>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td>' +
    'Project Name:' +
    '</td>' +
    '<td class="input">' +
    '<input v-model="value.projectName" type="text" placeholder="e.g. My Library" v-autofocus>' +
    '</td>' +
    '</tr>' +

    '<tr>' +
    '<td colspan="2">' +
    '<strong>What kind of thing is your first?</strong>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td>' +
    'Singular Term' +
    '</td>' +
    '<td class="input">' +
    '<input v-model="value.categorySingular" type="text" placeholder="e.g. Book">' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td>' +
    'Plural Term' +
    '</td>' +
    '<td class="input">' +
    '<input v-model="value.categoryPlural" type="text" placeholder="e.g. Books">' +
    '</td>' +
    '</tr>' +

    '<tr>' +
    '<td colspan="2">' +
    '<strong>What is the most important attribute of your {{value.thingsLabel}}?</strong>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td>' +
    'Attribute:' +
    '</td>' +
    '<td class="input">' +
    '<input v-model="value.categoryKeyName" type="text" placeholder="e.g. Title">' +
    '</td>' +
    '</tr>' +

    '<tr>' +
    '<td colspan="2">' +
    '<strong>Please define your very first {{value.thingLabel}}?</strong>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td>' +
    '{{value.keypropertyLabel}} of the {{value.thingLabel}}' +
    '</td>' +
    '<td class="input">' +
    '<input v-model="value.firstThingValue" type="text" placeholder="e.g. Shining">' +
    '</td>' +
    '</tr>' +

    '<tr>' +
    '<td colspan="2">' +
    '<strong>What color should be cards of {{value.thingsLabel}} in?</strong>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td>' +
    'Background' +
    '</td>' +
    '<td class="input">' +
    '<input v-model="value.colors.backgroundColor" type="color">' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td>' +
    'Text' +
    '</td>' +
    '<td class="input">' +
    '<input v-model="value.colors.color" type="color">' +
    '</td>' +
    '</tr>' +

    '</tbody>' +

    '<tfoot v-if="value.isReadyToStart()">' +
    '<tr>' +
    '<td colspan="2">' +
    '<tm-button @click="config()" icon="triangle-right" title="Start Manage" buttonstyle="primary">Start!</tm-button>' +
    '</td>' +
    '</tr>' +
    '</tfoot>' +
    '</table>'
});
