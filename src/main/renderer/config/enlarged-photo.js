import Vue from "../../../node_modules/vue/dist/vue.esm.browser.js";
import {APP, projectListener} from './../config/begin-config.js';

class ImageInWindowCalculator {
  constructor(image) {
    this._screenWidth = window.innerWidth;
    this._screenHeight = window.innerHeight;
    this._maxWidth = this._screenWidth * 0.9;
    this._maxHeight = this._screenHeight * 0.8;
    this._imageWidth = image.width;
    this._imageHeight = image.height;
    // FIXME not correct
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
    },
    isDeletable: function () {
      return this.photo && this.photo.uuidThing;
    }
  },
  methods: {
    close: function () {
      this.photo = null;
    },
    deletePhoto: function () {
      const thing = APP.project.getThingFromUuid(this.photo.uuidThing);
      thing.deletePhoto(this.photo);
      this.close();
    }
  }
});

// TODO close on ESC

projectListener.on('enlarge-photo', function (photo) {
  vueEnlargedPhoto.photo = photo;
});