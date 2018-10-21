class Geodata {
  constructor(raw) {
    // 00°00'00,0"N+00°00'00,0"E°
    if (raw) {
      let geos = raw.replace(/\.[\d]+/g, '').split(/[^-\d]/).filter(e => e);
      this._nDegrees = geos[0] || null;
      this._nMinutes = geos[1] || null;
      this._nSeconds = geos[2] || null;
      this._eDegrees = geos[3] || null;
      this._eMinutes = geos[4] || null;
      this._eSeconds = geos[5] || null;
      if(raw.contains('S')) this._nDegrees *= -1;
      if(raw.contains('W')) this._eDegrees *= -1;
    } else {
      this._nDegrees = null;
      this._nMinutes = null;
      this._nSeconds = null;
      this._eDegrees = null;
      this._eMinutes = null;
      this._eSeconds = null;
    }
  }

  get nDegrees() {
    return this._nDegrees;
  }

  set nDegrees(nDegrees) {
    this._nDegrees = nDegrees % 90;
  }

  get nMinutes() {
    return this._nMinutes;
  }

  set nMinutes(nMinutes) {
    this._nMinutes = nMinutes % 60;
  }

  get nSeconds() {
    return this._nSeconds;
  }

  set nSeconds(nSeconds) {
    this._nSeconds = nSeconds % 60;
  }

  get eDegrees() {
    return this._eDegrees;
  }

  set eDegrees(eDegrees) {
    this._eDegrees = eDegrees % 180;
  }

  get eMinutes() {
    return this._eMinutes;
  }

  set eMinutes(eMinutes) {
    this._eMinutes = eMinutes % 60;
  }

  get eSeconds() {
    return this._eSeconds;
  }

  set eSeconds(eSeconds) {
    this._eSeconds = eSeconds % 60;
  }

  getEastAsDecimal() {
    return (Number(this._eDegrees) + Number(this._eMinutes) / 60 + Number(this._eSeconds) / (60 * 60)).toFixed(7);
  }

  getNorthAsDecimal() {
    return (Number(this._nDegrees) + Number(this._nMinutes) / 60 + Number(this._nSeconds) / (60 * 60)).toFixed(7);
  }

  isComplete() {
    return this._nDegrees !== null &&
      this._nMinutes !== null &&
      this._nSeconds !== null &&
      this._eDegrees !== null &&
      this._eMinutes !== null &&
      this._eSeconds !== null;
  }

  convertDMSToDD(degrees, minutes, seconds, direction) {
    return degrees + minutes / 60 + seconds / (60 * 60);
  }

  toString() {
    if (this.isComplete()) {
      let vDirection = this._nDegrees < 0 ? 'S' : 'N';
      let vDegrees = this._nDegrees < 0 ? this._nDegrees * -1 : this._nDegrees;
      let hDirection = this._eDegrees < 0 ? 'W' : 'E';
      let hDegrees = this._eDegrees < 0 ? this._eDegrees * -1 : this._eDegrees;
      return `${vDegrees}°${this._nMinutes}'${this._nSeconds}.0"${vDirection} ${hDegrees}°${this._eMinutes}'${this._eSeconds}.0"${hDirection}`;
    } else {
      return '';
    }
  }

  getAsLink() {
    console.info('https://www.google.de/maps/place/' + this.toString());
    console.log(this);
    return this.isComplete() ? 'https://www.google.de/maps/place/' + this.toString() : null;
    // 'https://www.google.de/maps/place/@' + this.getNorthAsDecimal() + ',' + this.getEastAsDecimal() + ',21z';
  }
}