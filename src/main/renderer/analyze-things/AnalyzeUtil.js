export class AnalyzeUtil {
  static sum(analzeResults) {
    let i = analzeResults.length;
    let result = 0;
    while (i--) {
      result += analzeResults[i].result;
    }
    return result;
  }

  static average(analzeResults) {
    const sum = AnalyzeUtil.sum(analzeResults);
    return AnalyzeUtil.floatToCountrySpecific(analzeResults.length ? sum / analzeResults.length : 0);
  }

  static floatToCountrySpecific(float) {
    let result = parseFloat(Math.round(float * 100) / 100).toFixed(2);
    return ml.countrySpecificNumberFormat(result);
  }

  static floatToPercent(float) {
    return AnalyzeUtil.floatToCountrySpecific(float * 100) + ' %';
  }
}