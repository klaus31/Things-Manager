import {projectListener} from "../shared/ProjectListener.js";

Vue.component('photo', {
  props: ['photo', 'photos'],
  computed: {},
  methods: {
    enlarge: function () {
      projectListener.fire('enlarge-photo', {photo: this.photo, photos: this.photos});
    }
  },
  template: '' + nodeGetFileContent('manage-things/photo.html')
});
