import Vue from "../../../node_modules/vue/dist/vue.esm.browser.js";
import {projectListener} from '../shared/ProjectListener.js';

class ImageInWindowCalculator {
  constructor(image) {
    this._screenWidth = window.innerWidth;
    this._screenHeight = window.innerHeight;
    this._maxWidth = this._screenWidth * 0.9;
    this._maxHeight = this._screenHeight * 0.8;
    this._imageWidth = image.width;
    this._imageHeight = image.height;
    const scaleX = this._maxWidth / this._imageWidth;
    const scaleY = this._maxHeight / this._imageHeight;
    this._scaleToUse = this._maxWidth * scaleY > this._maxWidth ? scaleY : scaleX;
    if (this._scaleToUse > 1) {
      this._scaleToUse = 1;
    }
  }

  calcWidth() {
    return this._imageWidth * this._scaleToUse;
  }

  calcHeight() {
    return this._imageHeight * this._scaleToUse;
  }
}

const vueEnlargedPhoto = new Vue({
  el: '#enlarged-photo',
  data: {
    photo: null
  },
  computed: {
    width: function () {
      return this.photo ? new ImageInWindowCalculator(this.photo.image).calcWidth() : null;
    },
    height: function () {
      return this.photo ? new ImageInWindowCalculator(this.photo.image).calcHeight() : null;
    }
  },
  methods: {
    close: function () {
      this.photo = null;
    }
  }
});

projectListener.on('enlarge-photo', function (photo) {
  vueEnlargedPhoto.photo = photo;
});