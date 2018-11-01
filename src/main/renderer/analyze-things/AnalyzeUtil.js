import {ml} from './../config/MultiLanguage.js';
export class AnalyzeUtil {
  static sum(analzeResults, decimalPlaces) {
    let i = analzeResults.length;
    let result = 0;
    while (i--) {
      result += analzeResults[i].result;
    }
    return ml.countrySpecificNumberFormat(result, decimalPlaces || 0);
  }

  static average(analzeResults) {
    const sum = AnalyzeUtil.sum(analzeResults);
    return AnalyzeUtil.floatToCountrySpecific(analzeResults.length ? sum / analzeResults.length : 0);
  }

  static floatToCountrySpecific(float) {
    let result = parseFloat(Math.round(float * 100) / 100).toFixed(2);
    return ml.countrySpecificNumberFormat(result, 2);
  }

  static floatToPercent(float) {
    return AnalyzeUtil.floatToCountrySpecific(float * 100) + ' %';
  }
}