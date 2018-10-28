const UuidUtil = require('./UuidUtil');
const fs = require('fs');
const path = require('path');

class HomeDataService {

  constructor() {
    this._homeDirectory = require('os').homedir() + '/.things-manager';
    if (!fs.existsSync(this._homeDirectory)) {
      fs.mkdirSync(this._homeDirectory);
    }
  }

  copyImage(source) {
    const filename = UuidUtil.create() + path.extname(source);
    const target = path.join(this._homeDirectory, filename);
    fs.copyFileSync(source, target);
    return filename;
  }

  get homeDirectory() {
    return this._homeDirectory;
  }

  getFilePath(file) {
    return path.join(this._homeDirectory, file);
  }

  static isHomeData(possibleHomeData) {
    return UuidUtil.isUuid(possibleHomeData.replace(/\.[^.]+/, ''));
  }
}

module.exports = HomeDataService;