import {APP, ml} from './../config/begin-config.js';
import './../shared/html/tm-sidebar.js';
import './../shared/html/tm-main-area.js';

new Vue({
  el: '#app-credits',
  data: {
    area: APP.currentArea,
    ml: ml,
  }
});