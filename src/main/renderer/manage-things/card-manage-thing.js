// XXX extract thing.locked to the outside and make 2 components of it: one for locked state, the other for unlocked state
Vue.component('card-manage-thing', {
  props: ['thing', 'project', 'ml'],
  computed: {
    ml_WxykMLwBTKWHuTIj: function () {
      return ml.get('WxykMLwBTKWHuTIj');
    },
    ml_CCXaoC1JKRXNcgXH: function () {
      return ml.get('CCXaoC1JKRXNcgXH');
    },
    ml_6aROasnal7tNQsPt: function () {
      return ml.get('6aROasnal7tNQsPt');
    },
    ml_iZ4l8dJ2jBTbd7Ja: function () {
      return ml.get('iZ4l8dJ2jBTbd7Ja');
    },
    ml_aSawO4UuPSIxZpQK: function () {
      return ml.get('aSawO4UuPSIxZpQK');
    },
    ml_5IwOpns5w1FNb4xj: function () {
      return ml.get('5IwOpns5w1FNb4xj');
    }
  },
  template: '<table class="card card-edit-thing" :class="{locked: thing.locked, editable: !thing.locked}" v-colors="thing.colors">' +
    '<thead>' +
    '<tr>' +
    '<th :colspan="thing.countColumnsToShow()">' +
    '{{thing.category}}: ' +
    '<tm-editable :content="thing.keyvalue" :callback="val => thing.keyvalue = val"></tm-editable>' +
    '<p class="buttons">' +
    '<tm-button v-if="!thing.locked" @click="project.clone(thing)" icon="duplicate" :title="ml_WxykMLwBTKWHuTIj"></tm-button>' +
    '<tm-button v-if="!thing.locked && thing.canBeDeleted()" @click="project.deleteThing(thing)" icon="trash" :title="ml_CCXaoC1JKRXNcgXH"></tm-button>' +
    '<tm-button v-if="thing.locked" @click="thing.toggleLock()" class="btn-outset" icon="pencil" :title="ml_6aROasnal7tNQsPt"></tm-button>' +
    '<tm-button v-if="!thing.locked" @click="thing.toggleLock()" class="btn-inset" icon="pencil" :title="ml_iZ4l8dJ2jBTbd7Ja"></tm-button>' +
    '</p>' +
    '</th>' +
    '</tr>' +
    '</thead>' +

    '<tbody v-if="project.showdetails">' +
    '<tr v-for="property in thing.properties">' +
    '<td v-if="thing.locked" class="input"><tm-editable :content="property.key" :callback="val => property.key = val"></tm-editable></td>' +
    '<td v-if="thing.locked && property.type === \'checkbox\'" class="input"><input type="checkbox" v-model="property.value"></td>' +
    '<td v-if="thing.locked && property.type !== \'checkbox\'" class="input"><tm-editable :type="property.type" :content="property.value" :callback="val => property.value = val"></tm-editable></td>' +
    '<td v-if="!thing.locked" class="input"><input type="text" v-model="property.key"></td>' +
    '<td v-if="!thing.locked" class="input"><input :type="property.type" v-model="property.value"></td>' +
    '<td v-if="!thing.locked" class="input"><select v-model="property.type"><option v-for="option in property.datatypeOptions" :value="option.value">{{option.label}}</option></select></td>' +
    '<td v-if="!thing.locked" class="input buttons">' +
    '<tm-button @click="thing.cloneProperty(property)" icon="duplicate" :title="ml_aSawO4UuPSIxZpQK"></tm-button>' +
    '<tm-button @click="thing.deleteProperty(property)" icon="trash" :title="ml_5IwOpns5w1FNb4xj"></tm-button>' +
    '</td>' +
    '</tr>' +
    '</tbody>' +
    '<tfoot v-if="!thing.locked && project.showdetails">' +
    '<tr>' +
    '<td :colspan="thing.countColumnsToShow()">' +
    '<tm-button icon="plus" @click="thing.addNewEmptyProperty()">{{ml.get("qYv6GRxsa3Kns+Mu")}}</tm-button>' +
    '<tm-button icon="plus" @click="project.addMissingPropertiesFromOtherThings(thing)">{{ml.get("cwvs+xA9BSZNuL08", thing.categoryPlural)}}</tm-button>' +
    '<select v-if="project.categoryOptions.length > 1" v-model="thing.changeCategory" @change="event => project.changeCategory(thing, event.currentTarget.value)">' +
    '<option v-for="option in project.categoryOptions" :value="option.value">{{ml.get("LC5mU7k6ha4ktcLT", option.label)}}</option>' +
    '</select>' +
    '</td>' +
    '</tr>' +
    '</tfoot>' +
    '</table>'
});
