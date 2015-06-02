'use strict';

var parseIntIgnoresLeadingZeros = (function () {
  return parseInt('010') === 10;
}());

var strictMode = (function () {
  return !this;
}());

var DateISOString = (function () {
  return !!(Date && Date.prototype && Date.prototype.toISOString);
}());

module.exports = !!(
  parseIntIgnoresLeadingZeros &&
  strictMode &&
  DateISOString
);
