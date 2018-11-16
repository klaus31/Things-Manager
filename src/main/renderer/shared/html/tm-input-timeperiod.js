import "./v-autofocus.js";
import "./v-autoselect.js";
import {ml} from './../../config/MultiLanguage.js';

Vue.component('tm-input-timeperiod', {
  props: ['content', 'actions', 'autoselect', 'autofocus'],
  computed: {
    mlSeconds: function () {
      return ml.getTimePeriod('seconds');
    },
    mlMinutes: function () {
      return ml.getTimePeriod('minutes');
    },
    mlHours: function () {
      return ml.getTimePeriod('hours');
    },
    mlDays: function () {
      return ml.getTimePeriod('days');
    },
    mlYears: function () {
      return ml.getTimePeriod('years');
    }
  },
  methods: {
    onChange: function () {
      if (this.actions && this.actions.onChange) {
        this.actions.onChange(this.content);
      }
    },
    onDone: function () {
      if (this.actions && this.actions.onDone) {
        this.actions.onDone(this.content);
      }
    }
  },
  template: '<span class="input-timeperiod">' +
    '<input type="number" min="0" v-model="content.years" @input="onChange"> {{mlYears}}<br>' +
    '<input type="number" min="0" max="363" v-model="content.days" @input="onChange"> {{mlDays}}<br>' +
    '<input type="number" min="0" max="23" v-model="content.hours" @input="onChange"> {{mlHours}}<br>' +
    '<input type="number" min="0" max="59" v-model="content.minutes" @input="onChange"> {{mlMinutes}}<br>' +
    '<input type="number" min="0" max="59" v-model="content.seconds" @input="onChange"> {{mlSeconds}}<br>' +
    '<tm-button icon="ok" @click="onDone" v-if="actions.onDone"></tm-button>' +
    '</span>'
});
