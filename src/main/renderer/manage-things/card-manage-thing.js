// XXX extract thing.locked to the outside and make 2 components of it: one for locked state, the other for unlocked state
Vue.component('card-manage-thing', {
  props: ['thing', 'project'],
  template: '<table class="card card-edit-thing" :class="{locked: thing.locked, editable: !thing.locked}" v-colors="thing.colors">' +
    '<thead>' +
    '<tr>' +
    '<th :colspan="thing.countColumnsToShow()">' +
    '{{thing.category}}: ' +
    '<tm-editable :content="thing.keyvalue" :callback="val => thing.keyvalue = val"></tm-editable>' +
    '<p class="buttons">' +
    '<tm-button v-if="!thing.locked" @click="project.clone(thing)" icon="duplicate" title="Clone this thing"></tm-button>' +
    '<tm-button v-if="!thing.locked && thing.canBeDeleted()" @click="project.deleteThing(thing)" icon="trash" title="Delete this thing"></tm-button>' +
    '<tm-button v-if="thing.locked" @click="thing.toggleLock()" class="btn-outset" icon="pencil" title="Modify this thing"></tm-button>' +
    '<tm-button v-if="!thing.locked" @click="thing.toggleLock()" class="btn-inset" icon="pencil" title="Stop modifying this thing"></tm-button>' +
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
    '<tm-button @click="thing.cloneProperty(property)" icon="duplicate" title="Clone this Property"></tm-button>' +
    '<tm-button @click="thing.deleteProperty(property)" icon="trash" title="Delete this Property"></tm-button>' +
    '</td>' +
    '</tr>' +
    '</tbody>' +
    '<tfoot v-if="!thing.locked && project.showdetails">' +
    '<tr>' +
    '<td :colspan="thing.countColumnsToShow()">' +
    '<tm-button icon="plus" @click="thing.addNewEmptyProperty()">Add Property</tm-button>' +
    '<tm-button icon="plus" @click="project.addMissingPropertiesFromOtherThings(thing)">Add missing Properties from all other {{thing.categoryPlural}}</tm-button>' +
    '<select v-if="project.categoryOptions.length" v-model="thing.changeCategory" @change="event => project.changeCategory(thing, event.currentTarget.value)">' +
    '<option v-for="option in project.categoryOptions" :value="option.value">This is a {{option.label}}</option>' +
    '</select>' +
    '</td>' +
    '</tr>' +
    '</tfoot>' +
    '</table>'
});
