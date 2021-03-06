
import './../shared/html/v-colors.js';
import './../shared/html/tm-button.js';
import './../shared/html/v-autofocus.js';
import './../shared/html/v-autoselect.js';

Vue.component('card-new-thing', {
  props: ['value', 'ml'],
  methods: {},
  computed: {
    ml_cdZVHIoilBz1bJ4e: function () {
      return this.ml.get('cdZVHIoilBz1bJ4e');
    },
    ml_qei4gNQ2aHQxzXIt: function () {
      return this.ml.get('qei4gNQ2aHQxzXIt');
    }
  },
  template: '<table class="card card-new-thing editable" v-colors="value.colors()">' +
    '<thead>' +
    '<tr>' +
    '<th colspan="4">' +
    '{{value.category.singular}}: {{value.thing.keyvalue}}' +
    '</th>' +
    '</tr>' +
    '</thead>' +

    '<tbody>' +

    '<tr>' +
    '<td>{{value.category.propertyKey.name}}</td>' +
    '<td colspan="3" class="input"><input type="text" v-model="value.thing.keyvalue" autofocus="true" autoselect="true"></td>' +
    '</tr>' +

    '<tr v-for="property in value.thing.properties">' +
    '<td class="input"><input type="text" v-model="property.key.name"></td>' +
    // XXX so much code in ":actions" for a workaround for v-model :(
    '<td class="input"><tm-input :type="property.key.type" :content="property.value" :actions="{onChange: value => property.value = value, onDone: value => property.value = value}"></tm-input></td>' +
    '<td class="input"><select v-model="property.key.type"><option v-for="option in value.datatypeOptions" :value="option.value">{{option.label}}</option></select></td>' +
    '<td class="input buttons">' +
    '<tm-button @click="value.cloneProperty(property)" icon="duplicate" :title="ml_cdZVHIoilBz1bJ4e"></tm-button>' +
    '<tm-button @click="value.deleteProperty(property)" icon="trash" :title="ml_qei4gNQ2aHQxzXIt"></tm-button>' +
    '</td>' +
    '</tr>' +
    '</tbody>' +

    '<tfoot>' +
    '<tr>' +
    '<td colspan="4">' +
    '<tm-button icon="plus" @click="value.addNewEmptyProperty()">{{ml.get("dLb8HpEfzuH4saD5")}}</tm-button>' +
    '<tm-button icon="plus" @click="value.addMissingPropertiesFromOtherThings()">{{ml.get("8TXIUyZoY4iw3IlR", value.category.plural)}}</tm-button>' +
    '</td>' +
    '</tr>' +
    '</tfoot>' +
    '</table>'
});
