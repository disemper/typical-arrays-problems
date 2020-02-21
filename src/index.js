
exports.min = function min (array) {
  array = array || [];
  return (array.length) ? Math.min.apply(null, array) : 0;
};

exports.max = function max (array) {
  array = array || [];
  return (array.length) ? Math.max.apply(null, array) : 0;
};

exports.avg = function avg (array) {
  array = array || [];
  return (array.length) ? array.reduce((a, b) => (a + b)) / array.length : 0;
};

