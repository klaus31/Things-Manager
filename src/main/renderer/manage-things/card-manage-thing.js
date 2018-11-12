import './../shared/html/tm-editable.js';
import './../shared/html/tm-button.js';
import './../shared/html/tm-input.js';
import '../shared/html/photo-gallery.js';
import {projectListener} from '../shared/ProjectListener.js';

Vue.component('card-manage-thing', {
  props: ['thing', 'project', 'ml'],
  computed: {
    ml_CCXaoC1JKRXNcgXH: function () {
      return this.ml.get('CCXaoC1JKRXNcgXH');
    },
    ml_WxykMLwBTKWHuTIj: function () {
      return this.ml.get('WxykMLwBTKWHuTIj');
    },
    ml_6aROasnal7tNQsPt: function () {
      return this.ml.get('6aROasnal7tNQsPt');
    }
  },
  methods: {
    edit: function (thing) {
      projectListener.fire('enlarge-thing-editable', {thing: thing, project: this.project});
    }
  },
  template: '' + nodeGetFileContent('manage-things/card-manage-thing-locked.html')
});
