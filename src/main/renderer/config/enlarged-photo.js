import Vue from "../../../node_modules/vue/dist/vue.esm.browser.js";
import {APP, ml, projectListener} from './../config/begin-config.js';

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
    this._scaleToUse = this._maxWidth * scaleY > this._maxWidth ? scaleX : scaleY;
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
    photo: null,
    ml: ml
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
    },
    description: function () {
      return this.photo ? this.photo.text || ml.get('uJ+kNIBM0h0Itvcz') : '';
    }
  },
  methods: {
    close: function () {
      this.photo = null;
    },
    deletePhoto: function () {
      if (window.confirm(ml.get('qMIHCrBQn2dq6rd5'))) {
        const thing = APP.project.getThingFromUuid(this.photo.uuidThing);
        thing.deletePhoto(this.photo);
        this.close();
      }
    },
    finalizePhotoDescription: function (value) {
      this.photo.text = value;
    },
    cancel: function () {
      if (this.photo) this.close();
    }
  }
});

// TODO close on ESC

projectListener.on('enlarge-photo', function (photo) {
  vueEnlargedPhoto.photo = photo;
});

projectListener.on('key-event-esc', () => vueEnlargedPhoto.cancel());
