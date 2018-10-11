class AnalyzeRangeStrategy {

  analyzeThing(thing, propertyKeyToAnalyze) {
    let analyzeResults = [];
    const properties = thing.findPropertyValues(propertyKeyToAnalyze);
    let j = properties.length;
    while (j--) {
      analyzeResults.push(new AnalyzeThingResult(thing.keyvalue, properties[j] + ' %'));
    }
    return analyzeResults;
  }

  sort(analyzeResults) {
    return analyzeResults.sort((a, b) => (a.result.replace(/[^\d]/g, '') - 0) < (b.result.replace(/[^\d]/g, '') - 0) ? 1 : -1);
  }
}