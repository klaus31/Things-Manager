Vue.component('tm-editable', {
  props: ['content', 'callback', 'type'],
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
    isCheckbox: function () {
      return this.type === 'checkbox';
    },
    computedContent: function () {
      switch (this.type) {
        case 'date':
          return moment(this.content).format('L');
        case 'month':
          return moment(this.content).format('MMMM YYYY');
        case 'week':
          return moment(this.content).week() + ' / ' + moment(this.content).format('YYYY');
        case 'datetime-local':
          return moment(this.content).format('LLL');
        case 'range':
          return this.content + ' %';
        case 'checkbox':
          return this.content ? '<span class="glyphicon glyphicon-ok"></span>' : '<span class="glyphicon glyphicon-remove"></span>';
        case 'url':
          let aContent = this.content;
          if (aContent.length > 30) {
            aContent = aContent.substr(0, 27) + '...';
          }
          return aContent;
        default:
          return this.content;
      }
    },
    showLinkToOpen: function () {
      return !this.computedEditable && this.type === 'url';
    },
    openLink: function () {
      require('electron').shell.openExternal(this.content);
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
    },
    start: function () {
      this.editable = true;
    }
  },
  template: '<div role="button" class="editable editable-text">' +
    '<p @click="start()" class="content" v-if="!computedEditable" v-html="computedContent"></p>' +
    '<p v-if="showLinkToOpen" class="buttonlink">' +
    '<tm-button icon="link" @click="() => openLink()"></tm-button>' +
    '</p>' +
    '<p v-if="computedEditable">' +
    '<input :type="computedType" v-autofocus v-autoselect :value="content" @input="callCallback"' +
    ' @blur="finish" @keydown.enter="finish">' +
    '<span v-if="isRange">{{content}} %</span>' +
    '</p>' +
    '</div>'

});
