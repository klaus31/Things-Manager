// JavaScript root modifications (YEAH!)

String.prototype.hashCode = function () {
  return this.split("").reduce(function (a, b) {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a
  }, 0);
};

String.prototype.contains = function (substr) {
  return this.indexOf(substr) >= 0;
};

Array.prototype.contains = function (item) {
  return this.indexOf(item) >= 0;
};

Array.prototype.removeItemWithIndex = function (index) {
  this.splice(index, 1);
};

Array.prototype.removeItem = function (item) {
  this.removeItemWithIndex(this.indexOf(item));
};
