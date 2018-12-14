
import {APP} from '../config/begin-config.js';
import {ml} from './../config/MultiLanguage.js';
import {projectListener} from "../shared/ProjectListener.js";
import {escapeActionStack} from "../shared/EscapeActionStack.js";

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
    photos: null,
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
      escapeActionStack.pop();
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
    closeOverEscape: function () {
      this.photo = null;
    },
    showNext: function () {
      const photoToShow = this.getNext();
      this.close();
      projectListener.fire('enlarge-photo', {photo: photoToShow, photos: this.photos});
    },
    showPrev: function () {
      const photoToShow = this.getPrev();
      this.close();
      projectListener.fire('enlarge-photo', {photo: photoToShow, photos: this.photos});
    },
    getPrev: function () {
      const index = this.photos.indexOf(this.photo);
      if (index > 0) {
        return this.photos[index - 1];
      } else {
        return null;
      }
    },
    getNext: function () {
      const index = this.photos.indexOf(this.photo);
      if (index < this.photos.length + 1) {
        return this.photos[index + 1];
      } else {
        return null;
      }
    }
  }
});

projectListener.on('enlarge-photo', function (data) {
  vueEnlargedPhoto.photo = data.photo;
  vueEnlargedPhoto.photos = data.photos;
  escapeActionStack.push(() => vueEnlargedPhoto.closeOverEscape());
});
