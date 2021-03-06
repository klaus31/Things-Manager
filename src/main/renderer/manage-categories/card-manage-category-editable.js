// XXX extract thing.locked to the outside and make 2 components of it: one for locked state, the other for unlocked state
Vue.component('card-manage-category-editable', {
  props: ['project', 'category', 'ml'],
  computed: {
    ml_sHYY8EbLsT9BJMhP: function () {
      return this.ml.get('sHYY8EbLsT9BJMhP', this.category.plural);
    },
    ml_7klcINA55ODeG3iz: function () {
      return this.ml.get('7klcINA55ODeG3iz', this.category.plural);
    },
    ml_xSKHgV8x_8BNA0Q5: function () {
      return this.ml.get('xSKHgV8x_8BNA0Q5', this.category.plural);
    },
    ml_DlYP16VWFMcl5Oo6: function () {
      return this.ml.get('DlYP16VWFMcl5Oo6');
    },
    ml_dSWlfcUauVIvYO3B: function () {
      return this.ml.get('dSWlfcUauVIvYO3B');
    },
    ml_37B1orLeGG53soUH: function () {
      return this.ml.get('37B1orLeGG53soUH');
    }
  },
  methods: {
  },
  template: '<table class="card editable" v-colors="category.colors">' +
    '<thead>' +
    '<tr>' +
    '<th colspan="2">' +
    '{{category.summary}}' +
    '<p class="buttons">' +
    '<tm-button v-if="category.isDeletable()" @click="project.deleteCategory(category)" icon="trash" :title="ml_sHYY8EbLsT9BJMhP"></tm-button>' +
    '<tm-button @click="category.toggleLock()" class="btn-inset" icon="pencil" :title="ml_xSKHgV8x_8BNA0Q5"></tm-button>' +
    '</p>' +
    '</th>' +
    '</tr>' +
    '</thead>' +

    '<tbody>' +

    '<tr>' +
    '<td>' +
    '{{ml.get("aKaexK0ACUBUqi5o")}}' +
    '</td>' +
    '<td class="input">' +
    '<input v-model="category.singular" type="text" :placeholder="ml_DlYP16VWFMcl5Oo6">' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td>' +
    '{{ml.get("UmfQ8szYOce8l3jR")}}' +
    '</td>' +
    '<td class="input">' +
    '<input v-model="category.plural" type="text" :placeholder="ml_dSWlfcUauVIvYO3B">' +
    '</td>' +
    '</tr>' +

    '<tr>' +
    '<td colspan="2">' +
    '<strong>{{ml.get("iaKt20y27Q1DDaQu", category.plural)}}</strong>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td>' +
    '{{ml.get("2BsZT2KP5Jr4Y7LS")}}' +
    '</td>' +
    '<td class="input">' +
    '<input v-model="category.key" type="text" :placeholder="ml_37B1orLeGG53soUH">' +
    '</td>' +
    '</tr>' +

    '<tr>' +
    '<td colspan="2">' +
    '<strong>{{ml.get("NicwN4U8PvEokD0I", category.plural)}}</strong>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td>' +
    '{{ml.get("SKEFwKi4GfqyOyT5")}}' +
    '</td>' +
    '<td class="input">' +
    '<input v-model="category.colorBackground" type="color">' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td>' +
    '{{ml.get("GARs4FY1svvEI3Od")}}' +
    '</td>' +
    '<td class="input">' +
    '<input v-model="category.textColor" type="color">' +
    '</td>' +
    '</tr>' +

    // sortables
    '<tr v-if="category.sortableOptions.length">' +
    '<td colspan="2">' +
    '<strong>{{ml.get("ejn+M0lTqXFh5Zgy", category.plural)}}</strong>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td colspan="2" class="input">' +
    '<draggable class="sortables" v-model="category.sortableOptions">' +
    '<p v-for="sortableOption in category.sortableOptions">{{sortableOption.key}}</p>' +
    '</draggable>' +
    '</td>' +
    '</tr>' +

    '<tr v-if="category.sortableOptions.length">' +
    '<td colspan="2">' +
    '<strong>{{ml.get("sEzqYfSNsSPFwosV", category.plural)}}</strong><br>' +
    '<span>{{ml.get("QLvPeYYGmyNOAaTS", category.plural)}}</span>' +
    '</td>' +
    '</tr>' +
    '<tr v-for="property in category.sortableOptions">' +
    '<td colspan="2" class="input">' +
    '<input v-model="property.key" type="text">' +
    '</td>' +
    '</tr>' +


    '<tr>' +
    '<td colspan="2">' +
    '<strong>{{ml.get("fz5x361KrtRjhR+R")}}</strong>' +
    '<p class="buttons"><tm-button icon="plus" @click="() => category.addPreselection()"></tm-button></p>' +
    '<br><span>{{ml.get("V0hkvLhWwDa5Aw21", category.plural)}}</span>' +
    '</td>' +
    '</tr>' +
    '<tr v-for="preselection in category.preselections">' +
    '<td class="input">' +
    '<strong>{{ml.get("WEEuIfOm2fnxEPOH")}}</strong>' +
    '<input v-model="preselection.kind" type="text">' +
    '</td>' +
    '<td class="input">' +
    '<strong>{{ml.get("F5Flp6gS0Y86f3xY", preselection.kind)}}</strong>' +
    '<p class="buttons"><tm-button icon="plus" @click="category.addOption(preselection)"></tm-button></p>' +
    '<input v-for="option in preselection.options" v-model="option.value" type="text">' +
    '</td>' +
    '</tr>' +

    '</tbody>' +
    '</table>'
});
