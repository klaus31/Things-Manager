import "./v-autofocus.js";
import "./v-autoselect.js";
import {ml} from './../../config/MultiLanguage.js';
import {TimePeriod} from "../TimePeriod";

Vue.component('tm-input-timeperiod', {
  props: ['seconds', 'actions', 'autoselect', 'autofocus'],
  data: function () {
    const timePeriod = new TimePeriod(this.seconds);
    let unit = this.seconds === 0 ? 'minute' : timePeriod.biggestUnit();
    return {
      timeperiod: timePeriod,
      timeperiodInput: timePeriod.calc(unit),
      unit: unit
    }
  },
  computed: {
    ml_yAhSlELknu4PEP_Q: function () {
      return ml.get('yAhSlELknu4PEP_Q');
    },
    ml_8BysBIgprws5j0mj: function () {
      return ml.get('8BysBIgprws5j0mj');
    },
    ml_es3dHoiqqsVAU1UU: function () {
      return ml.get('es3dHoiqqsVAU1UU');
    },
    ml_cNq_WbZk41W1v5bh: function () {
      return ml.get('cNq_WbZk41W1v5bh');
    },
    ml_3mJsJKJcNbTubmxp: function () {
      return ml.get('3mJsJKJcNbTubmxp');
    },
    ml_3kFRBjbRgOP2coGI: function () {
      return ml.get('3kFRBjbRgOP2coGI');
    }
  },
  methods: {
    onChange: function () {
      if (this.actions && this.actions.onChange) {
        this.actions.onChange(this.timeperiod.seconds);
      }
    },
    onDone: function () {
      if (this.actions && this.actions.onDone) {
        this.actions.onDone(this.timeperiod.seconds);
      }
    }
  },
  watch: {
    unit: function (newUnit) {
      this.timeperiodInput = this.timeperiod.calc(newUnit);
    },
    timeperiodInput: function (newTimeperiodInput) {
      this.timeperiod.setPeriod(newTimeperiodInput, this.unit);
    }
  },
  template: '<span class="input-timeperiod">' +
    '<input type="number" v-model="timeperiodInput" min="0" @keydown.enter="onDone" @input="onChange">' +
    '<select v-model="unit">' +
    '<option value="second">{{ml_yAhSlELknu4PEP_Q}}</option>' +
    '<option value="minute">{{ml_8BysBIgprws5j0mj}}</option>' +
    '<option value="hour">{{ml_es3dHoiqqsVAU1UU}}</option>' +
    '<option value="day">{{ml_cNq_WbZk41W1v5bh}}</option>' +
    '<option value="week">{{ml_3mJsJKJcNbTubmxp}}</option>' +
    '<option value="year">{{ml_3kFRBjbRgOP2coGI}}</option>' +
    '</select>' +
    '<br>' +
    '<tm-button icon="ok" @click="onDone" v-if="actions.onDone"></tm-button>' +
    '</span>'
});
