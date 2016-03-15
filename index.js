"use strict";
const gamma = require('gamma');

exports.pdf = function pdf(x, k_) {
  if (x < 0) return 0;
  const k = k_ / 2;
  const a = 1 / (Math.pow(2, k) * gamma(k));
  const b = Math.pow(x, k - 1) * Math.exp(-x / 2);
  return a * b;
};

exports.cdf = require('./cdf');
