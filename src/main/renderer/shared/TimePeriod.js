export class TimePeriod {
  constructor(seconds) {
    this._MINUTE = 60;
    this._HOUR = 60 * this._MINUTE;
    this._DAY = 24 * this._HOUR;
    this._WEEK = 7 * this._DAY;
    this._YEAR = Math.floor(365.2564 * this._DAY);
    this._seconds = seconds;
  }

  get seconds() {
    return this._seconds;
  }

  biggestUnit() {
    if (this._seconds % this._YEAR === 0) return 'year';
    if (this._seconds % this._WEEK === 0) return 'week';
    if (this._seconds % this._DAY === 0) return 'day';
    if (this._seconds % this._HOUR === 0) return 'hour';
    if (this._seconds % this._MINUTE === 0) return 'minute';
    return 'second';
  }

  calc(unit) {
    switch (unit) {
      case 'year':
        // everything more then 52 weeks should be a full year in this case
        const weeks = Math.floor(this._seconds / this._WEEK);
        return Math.floor(weeks / 52);
      case 'week':
        return Math.floor(this._seconds / this._WEEK);
      case 'day':
        return Math.floor(this._seconds / this._DAY);
      case 'hour':
        return Math.floor(this._seconds / this._HOUR);
      case 'minute':
        return Math.floor(this._seconds / this._MINUTE);
      case 'second':
        return this._seconds;
      default:
        throw 'unknown unit ' + unit;
    }
  }

  setPeriod(time, unit) {
    switch (unit) {
      case 'year':
        this._seconds = time * this._YEAR;
        break;
      case 'week':
        this._seconds = time * this._WEEK;
        break;
      case 'day':
        this._seconds = time * this._DAY;
        break;
      case 'hour':
        this._seconds = time * this._HOUR;
        break;
      case 'minute':
        this._seconds = time * this._MINUTE;
        break;
      case 'second':
        this._seconds = time;
        break;
      default:
        throw 'unknown unit ' + unit;
    }
  }
}
