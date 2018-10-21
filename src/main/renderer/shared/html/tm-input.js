Vue.component('tm-input', {
  props: ['content', 'actions', 'type'],
  data: function () {
    return {
      editable: false
    }
  },
  computed: {
    computedType: function () {
      return this.type || 'text';
    },
    isRange: function () {
      return this.type === 'range';
    },
    isGeodata: function () {
      return this.type === 'geodata';
    }
  },
  methods: {
    getValueOfEvent: function (event) {
      if (this.type === 'checkbox') {
        return event.currentTarget.checked;
      } else {
        return event.currentTarget.value;
      }
    },
    onChange: function (event) {
      if (this.actions && this.actions.onChange) {
        this.actions.onChange(this.getValueOfEvent(event));
      }
    },
    finish: function (event) {
      if (this.actions && this.actions.onDone) {
        this.actions.onDone(this.getValueOfEvent(event));
      }
    }
  },
  template: '<span>' +
    '<input :type="computedType" v-autofocus v-autoselect :value="content" @input="onChange"' +
    ' @blur="finish" @keydown.enter="finish">' +
    '<span v-if="isRange">{{content}} %</span>' +
    // TODO Multilanguage 'Example'
    '<span v-if="isGeodata">44°01\'01.0"N+28°38\'06.2"E</span>' +
    '</span>'

});
