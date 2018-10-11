class AnalyzeNumberStrategy {

  analyzeThing(thing, propertyKeyToAnalyze) {
    let analyzeResults = [];
    const properties = thing.findPropertyValues(propertyKeyToAnalyze);
    let i = properties.length;
    while (i--) {
      analyzeResults.push(new AnalyzeThingResult(thing.keyvalue, properties[i] - 0));
    }
    return analyzeResults;
  }

  sort(analyzeResults) {
    return analyzeResults.sort((a, b) => a.result < b.result ? 1 : -1);
  }
}