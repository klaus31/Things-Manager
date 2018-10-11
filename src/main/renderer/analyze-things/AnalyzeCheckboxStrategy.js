class AnalyzeCheckboxStrategy {

  analyzeThing(thing, propertyKeyToAnalyze) {
    function allChecked(propertieValues) {
      let j = propertieValues.length;
      while (j--) {
        if (!propertieValues[j]) return false;
      }
      return true;
    }

    let analyzeResults = [];
    const properties = thing.findPropertyValues(propertyKeyToAnalyze);
    if (properties.length) {
      if (allChecked(properties)) {
        analyzeResults.push(new AnalyzeThingResult(thing.keyvalue, true));
      }
    }
    return analyzeResults;
  }

  sort(analyzeResults) {
    return analyzeResults.sort((a, b) => a.thing.toLowerCase().localeCompare(b.thing.toLowerCase()));
  }
}