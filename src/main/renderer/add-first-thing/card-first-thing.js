import './../shared/html/v-colors.js';
import './../shared/html/v-autofocus.js';
import './../shared/html/tm-button.js';

Vue.component('card-first-thing', {
  props: ['value', 'start', 'ml'],
  methods: {},
  computed: {
    ml_qml1h1qAhTdFbrAu: function () {
      return this.ml.get('qml1h1qAhTdFbrAu');
    },
    ml_DlYP16VWFMcl5Oo6: function () {
      return this.ml.get('DlYP16VWFMcl5Oo6');
    },
    ml_dSWlfcUauVIvYO3B: function () {
      return this.ml.get('dSWlfcUauVIvYO3B');
    },
    ml_37B1orLeGG53soUH: function () {
      return this.ml.get('37B1orLeGG53soUH');
    },
    ml_yftlu43NdMw4Gfaa: function () {
      return this.ml.get('yftlu43NdMw4Gfaa');
    },
    ml_sj5BzmGMC30e1aKl: function () {
      return this.ml.get('sj5BzmGMC30e1aKl');
    }
  },
  template: '<table class="card card-first-thing" v-colors="value.colors">' +
    '<thead>' +

    '<tr>' +
    '<th colspan="2">' +
    '{{ml.get("VlsFXjPultjFOija")}}' +
    '</th>' +
    '</tr>' +
    '</thead>' +

    '<tbody>' +

    '<tr>' +
    '<td colspan="2">' +
    '<strong>{{ml.get("sUfmYEPPdBBRL5Z3")}}</strong>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td>' +
    '{{ml.get("aSTys64BadnhDxG5")}}:' +
    '</td>' +
    '<td class="input">' +
    '<input v-model="value.projectName" type="text" :placeholder="ml_qml1h1qAhTdFbrAu" v-autofocus>' +
    '</td>' +
    '</tr>' +

    '<tr>' +
    '<td colspan="2">' +
    '<strong>{{ml.get("FqFezyc1oSu944aU")}}</strong>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td>' +
    '{{ml.get("aKaexK0ACUBUqi5o")}}' +
    '</td>' +
    '<td class="input">' +
    '<input v-model="value.categorySingular" type="text" :placeholder="ml_DlYP16VWFMcl5Oo6">' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td>' +
    '{{ml.get("UmfQ8szYOce8l3jR")}}' +
    '</td>' +
    '<td class="input">' +
    '<input v-model="value.categoryPlural" type="text" :placeholder="ml_dSWlfcUauVIvYO3B">' +
    '</td>' +
    '</tr>' +

    '<tr>' +
    '<td colspan="2">' +
    '<strong>{{ml.get("iaKt20y27Q1DDaQu", value.thingsLabel)}}</strong>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td>' +
    '{{ml.get("rXYPadAB5YgYyLpB")}}' +
    '</td>' +
    '<td class="input">' +
    '<input v-model="value.categoryKeyName" type="text" :placeholder="ml_37B1orLeGG53soUH">' +
    '</td>' +
    '</tr>' +

    '<tr>' +
    '<td colspan="2">' +
    '<strong>{{ml.get("JOpIzKg0cdGyXgVG", value.thingLabel)}}</strong>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td>' +
    '{{ml.get("vp5aqq4LTfwQ2CkQ", value.keypropertyLabel, value.thingLabel)}}' +
    '</td>' +
    '<td class="input">' +
    '<input v-model="value.firstThingValue" type="text" :placeholder="ml_yftlu43NdMw4Gfaa">' +
    '</td>' +
    '</tr>' +

    '<tr>' +
    '<td colspan="2">' +
    '<strong>{{ml.get("6ycMQqLU3Kb6T69M", value.thingsLabel)}}</strong>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td>' +
    '{{ml.get("SKEFwKi4GfqyOyT5")}}' +
    '</td>' +
    '<td class="input">' +
    '<input v-model="value.colors.backgroundColor" type="color">' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td>' +
    '{{ml.get("GARs4FY1svvEI3Od")}}' +
    '</td>' +
    '<td class="input">' +
    '<input v-model="value.colors.color" type="color">' +
    '</td>' +
    '</tr>' +

    '</tbody>' +

    '<tfoot v-if="value.isReadyToStart()">' +
    '<tr>' +
    '<td colspan="2">' +
    '<tm-button @click="start()" icon="triangle-right" :title="ml_sj5BzmGMC30e1aKl" buttonstyle="primary">{{ml.get("VaHcMxbCcjn8016t")}}</tm-button>' +
    '</td>' +
    '</tr>' +
    '</tfoot>' +
    '</table>'
});
