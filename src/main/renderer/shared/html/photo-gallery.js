import '../../manage-things/photo.js';

Vue.component('photo-gallery', {
  props: ['photos'],
  methods: {
  },
  template: '' + nodeGetFileContent('shared/html/photo-gallery.html')
});
