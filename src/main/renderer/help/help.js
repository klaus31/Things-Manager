import Vue from "../../../node_modules/vue/dist/vue.esm.browser.js";
import {APP, ml} from './../config/begin-config.js';
import './../shared/html/tm-sidebar.js';
import './../shared/html/tm-main-area.js';

new Vue({
  el: '#app-help',
  data: {
    area: APP.currentArea,
    ml: ml,
  }
});