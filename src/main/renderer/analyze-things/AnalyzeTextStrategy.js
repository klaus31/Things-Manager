class AnalyzeTextStrategy {

  analyzeThing(thing, keyProperty) {
    let analyzeResults = [];
    const properties = thing.findPropertyValues(keyProperty);
    if (properties.length) {
      analyzeResults.push(new AnalyzeThingResult(thing.keyvalue, properties.join(', ')));
    }
    return analyzeResults;
  }

  sort(analyzeResults) {
    return analyzeResults.sort((a, b) => a.thing.toLowerCase().localeCompare(b.thing.toLowerCase()));
  }
}