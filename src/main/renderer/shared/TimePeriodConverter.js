const MINUTE = 60;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const YEAR = Math.floor(365.2564 * DAY);

/**
 * converting something like {years: 0, days: 0, hours: 0, minutes: 0, seconds: 0} to seconds and vice versa
 */
export class TimePeriodConverter {

  static getSecondsFromTimePeriodObject(timePeriod) {
    let result = 0;
    if (timePeriod.seconds) {
      result += Number(timePeriod.seconds);
    }
    if (timePeriod.minutes) {
      result += Number(timePeriod.minutes) * MINUTE;
    }
    if (timePeriod.hours) {
      result += Number(timePeriod.hours) * HOUR;
    }
    if (timePeriod.days) {
      result += Number(timePeriod.days) * DAY;
    }
    if (timePeriod.years) {
      result += Number(timePeriod.years) * YEAR;
    }
    return result;
  }

  static getTimePeriodObjectFromSeconds(seconds) {
    let copy = seconds - 0;
    const result = {};
    result.years = Math.floor(copy / YEAR);
    copy -= result.years * YEAR;
    result.days = Math.floor(copy / DAY);
    copy -= result.days * DAY;
    result.hours = Math.floor(copy / HOUR);
    copy -= result.hours * HOUR;
    result.minutes = Math.floor(copy / MINUTE);
    result.seconds = copy - result.minutes * MINUTE;
    return result;
  }
}
