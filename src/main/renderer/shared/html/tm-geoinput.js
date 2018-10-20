Vue.component('tm-geoinput', {
  // https://getbootstrap.com/docs/3.3/css/#buttons-options
  props: [],
  computed: {
  },
  // Input: 54°49'06.2"N+9°25'33.3"E
  template: '<p class="geo geo-input">' +
    '<input type="number" v-model="geo.n1">°' +
    '<input type="number" v-model="geo.n2">\'' +
    '<input type="number" v-model="geo.n3">"N<br>' +
    '<input type="number" v-model="geo.e1">°' +
    '<input type="number" v-model="geo.e2">\'' +
    '<input type="number" v-model="geo.e3">"E' +
    '</p>'
});
