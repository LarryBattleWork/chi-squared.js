'use strict';
const logGamma = require('gamma').log;

// The following code liberated from
// http://www.math.ucla.edu/~tom/distributions/chisq.html

// Good for X>A+1
function gcf(X, A) {
  let A0 = 0;
  let B0 = 1;
  let A1 = 1;
  let B1 = X;
  let AOLD = 0;
  let N = 0;
  const maxError = 0.00001;
  while (maxError < Math.abs((A1 - AOLD) / A1)) {
    N += 1;
    AOLD = A1;
    A0 = A1 + (N - A) * A0;
    B0 = B1 + (N - A) * B0;
    A1 = X * A0 + N * A1;
    B1 = X * B0 + N * B1;
    A0 /= B1;
    B0 /= B1;
    A1 /= B1;
    B1 = 1;
  }
  const p = Math.exp(A * Math.log(X) - X - logGamma(A)) * A1;
  return 1 - p;
}
// Good for X<A+1.
function gser(X, A) {
  let T9 = 1 / A;
  let G = T9;
  let I = 1;
  while (T9 > G * 0.00001) {
    T9 *= X / (A + I);
    G += T9;
    I += 1;
  }
  const p = G * Math.exp(A * Math.log(X) - X - logGamma(A));
  return p;
}

// Cumulative Distribution Function
module.exports = function cdf(Z, DF) {
  if (DF <= 0) {
    throw new Error('Degrees of freedom must be positive');
  }
  if (Z <= 0) {
    return 0;
  }
  const x = Z / 2;
  const a = DF / 2;
  // aka z < df + 2
  if (x < a + 1) {
    return gser(x, a);
  }
  return gcf(x, a);
};
