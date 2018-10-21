Vue.component('tm-input-geodata', {
  props: ['content', 'actions'],
  methods: {
    onChange: function (event) {
      if (this.actions && this.actions.onChange) {
        this.actions.onChange(event.currentTarget.value);
      }
    },
    onDone: function (event) {
      if (this.actions && this.actions.onDone) {
        this.actions.onDone(event.currentTarget.value);
      }
    }
  },
  template: '<span>' +
    '<input type="text" v-autofocus v-autoselect :value="content" @input="onChange" @blur="onDone" @keydown.enter="onDone">' +
    // TODO Multilanguage 'Example'
    '<span>44°01\'01.0"N+28°38\'06.2"E</span>' +
    '</span>'

});
