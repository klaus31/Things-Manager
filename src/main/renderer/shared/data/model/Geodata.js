class Geodata {
  constructor(raw) {
    // 00°00'00,0"N+00°00'00,0"E°
    if (raw) {
      let geos = raw.replace(/\.[\d]+/g, '').split(/[^\d]/).filter(e => e);
      this._n1 = geos[0] || null;
      this._n2 = geos[1] || null;
      this._n3 = geos[2] || null;
      this._e1 = geos[3] || null;
      this._e2 = geos[4] || null;
      this._e3 = geos[5] || null;
    } else {
      this._n1 = null;
      this._n2 = null;
      this._n3 = null;
      this._e1 = null;
      this._e2 = null;
      this._e3 = null;
    }
  }

  isComplete() {
    return this._n1 !== null &&
      this._n2 !== null &&
      this._n3 !== null &&
      this._e1 !== null &&
      this._e2 !== null &&
      this._e3 !== null;
  }

  toString() {
    if (this.isComplete()) {
      return `${this._n1}°${this._n2}'${this._n3}.0"N+${this._e1}°${this._e2}'${this._e3}.0"E`;
    } else {
      return '';
    }
  }

  getAsLink() {
    return 'https://www.google.de/maps/place/' + this.toString();
  }
}