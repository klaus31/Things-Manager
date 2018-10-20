Vue.component('tm-editable', {
  props: ['content', 'callback', 'type', 'callbackeditablechanged'],
  data: function () {
    return {
      editable: false
    }
  },
  computed: {
    computedType: function () {
      return this.type || 'text';
    },
    computedEditable: function () {
      return this.editable || this.type === 'color';
    },
    isRange: function () {
      return this.type === 'range';
    },
    isGeodata: function () {
      return this.type === 'geodata';
    },
    isCheckbox: function () {
      return this.type === 'checkbox';
    },
    computedContent: function () {
      return DataTypeValueUtil.formatContent(this.type, this.content, 'html');
    },
    showLinkToOpen: function () {
      return !this.computedEditable && DataTypeValueUtil.isLinkable(this.content, this.type);
    }
  },
  methods: {
    callCallback: function (event) {
      if (this.type === 'checkbox') {
        this.callback(event.currentTarget.checked);
      } else {
        this.callback(event.currentTarget.value);
      }
    },
    finish: function (event) {
      if (this.type === 'checkbox') {
        this.callCallback(event);
      }
      this.editable = false;
      if (this.callbackeditablechanged) this.callbackeditablechanged(false);
    },
    start: function () {
      this.editable = true;
      if (this.callbackeditablechanged) this.callbackeditablechanged(true);
    },
    openLink: function () {
      openExternalHttp(DataTypeValueUtil.getAsLink(this.content, this.type));
    }
  },
  template: '<div role="button" class="editable editable-text">' +
    '<p @click="start()" class="content" v-if="!computedEditable" v-html="computedContent"></p>' +
    '<p v-if="showLinkToOpen" class="buttonlink">' +
    '<tm-button icon="link" @click="openLink()"></tm-button>' +
    '</p>' +
    '<p v-if="computedEditable">' +
    '<input :type="computedType" v-autofocus v-autoselect :value="content" @input="callCallback"' +
    ' @blur="finish" @keydown.enter="finish">' +
    '<span v-if="isRange">{{content}} %</span>' +
    // TODO Multilanguage 'Example'
    '<span v-if="isGeodata">44°01\'01.0"N+28°38\'06.2"E</span>' +
    '</p>' +
    '</div>'

});
