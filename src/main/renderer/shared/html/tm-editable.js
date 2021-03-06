import {DataTypeValueUtil} from "../data/DataTypeValueUtil.js";
import './tm-button.js';
import './tm-input.js';

Vue.component('tm-editable', {
  props: ['content', 'callback', 'type', 'callbackeditablechanged', 'colors'],
  data: function () {
    return {
      editable: false
    }
  },
  computed: {
    computedEditable: function () {
      return this.editable || this.type === 'color';
    },
    computedColors: function () {
      return this.colors || {};
    },
    showLinkToOpen: function () {
      return !this.computedEditable && DataTypeValueUtil.isLinkable(this.content, this.type);
    },
    computedContent: function () {
      return DataTypeValueUtil.formatContent(this.type, this.content, 'html', this.computedColors);
    }
  },
  methods: {
    finish: function (value) {
      this.callback(value);
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
    '<tm-input :type="type" :actions="{onChange: callback, onDone: finish}" :content="content" autofocus="true"  autoselect="true"></tm-input>' +
    '</p>' +
    '</div>'
});
