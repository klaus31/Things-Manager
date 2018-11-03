export class AnalyzeStrategy {
  analyzeThing(thing, analyzePossibility) {
    throw 'analyzeThing must be overridden';
  }

  finalize() {
    throw 'finalize must be overridden';
  }
}