const gamma = require('gamma');

// Probability Density Function
exports.pdf = function pdf(x, df) {
  if (x < 0) return 0;
  if (df <= 0) {
    throw new Error('Degrees of freedom must be positive');
  }
  const k = df / 2;
  const a = Math.pow(x, k - 1) * Math.exp(-x / 2);
  const b = Math.pow(2, k) * gamma(k);
  return a / b;
};

exports.cdf = require('./cdf');
