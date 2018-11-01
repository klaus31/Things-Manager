import Vue from "../../../../node_modules/vue/dist/vue.esm.browser.js";
import {Geodata} from "../data/model/Geodata.js";
import "./v-autofocus.js";
import "./v-autoselect.js";

Vue.component('tm-input-geodata', {
  props: ['content', 'actions'],
  data: function () {
    return {
      geodata: new Geodata(this.content)
    }
  },
  methods: {
    onChange: function () {
      if (this.actions && this.actions.onChange) {
        this.actions.onChange(this.geodata.toString());
      }
    },
    onDone: function () {
      if (this.actions && this.actions.onDone) {
        this.actions.onDone(this.geodata.toString());
      }
    }
  },
  template: '<span class="input-geodata">' +
    // 00°00'00,0"N+00°00'00,0"E°
    'N:&nbsp;<input type="number" v-model="geodata.nDegrees" min="-89" max="89" @keydown.enter="onDone" @input="onChange">°&nbsp;&nbsp;&nbsp;' +
    '<input type="number" v-model="geodata.nMinutes" min="0" max="59" @keydown.enter="onDone" @input="onChange">\'&nbsp;&nbsp;&nbsp;' +
    '<input type="number" v-model="geodata.nSeconds" min="0" max="59" @keydown.enter="onDone" @input="onChange">.0"' +
    '<br>' +
    'E:&nbsp;<input type="number" v-model="geodata.eDegrees" min="-179" max="179" @keydown.enter="onDone" @input="onChange">°&nbsp;&nbsp;&nbsp;' +
    '<input type="number" v-model="geodata.eMinutes" min="0" max="59" @keydown.enter="onDone" @input="onChange">\'&nbsp;&nbsp;&nbsp;' +
    '<input type="number" v-model="geodata.eSeconds" min="0" max="59" @keydown.enter="onDone" @input="onChange">.0"' +
    '<br>' +
    '<tm-button icon="ok" @click="onDone" v-if="actions.onDone"></tm-button>' +
    '</span>'
});
