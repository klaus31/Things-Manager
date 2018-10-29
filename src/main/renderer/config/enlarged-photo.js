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
    console.info('scaleX: ' + scaleX);
    console.info('scaleY: ' + scaleY);
    console.info('scaleToUse: ' + this._scaleToUse);
    console.info('image: ' + this._imageWidth + " x " + this._imageHeight);
    console.info('window: ' + window.innerWidth + " x " + window.innerHeight );
    console.info('max: ' + this._maxWidth + " x " + this._maxHeight);
    console.info('result: ' + this._imageWidth * this._scaleToUse + " x " + this._imageHeight * this._scaleToUse);
    console.info('----------');
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
    }
  }
});

// TODO close on ESC

projectListener.on('enlarge-photo', function (photo) {
  vueEnlargedPhoto.photo = photo;
});