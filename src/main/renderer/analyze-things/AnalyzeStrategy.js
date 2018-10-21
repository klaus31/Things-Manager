export class AnalyzeStrategy {
  analyzeThing(thing, propertyKeyToAnalyze) {
    throw 'analyzeThing must be overridden';
  }

  finalize() {
    throw 'finalize must be overridden';
  }
}