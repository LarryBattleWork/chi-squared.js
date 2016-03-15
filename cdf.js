const logGamma = require('gamma').log;

// The following code liberated from
// http://www.math.ucla.edu/~tom/distributions/chisq.html

function gcf(X, A) { // Good for X>A+1
  let A0 = 0;
  let B0 = 1;
  let A1 = 1;
  let B1 = X;
  let AOLD = 0;
  let N = 0;
  while (Math.abs((A1 - AOLD) / A1) > 0.00001) {
    AOLD = A1;
    N = N + 1;
    A0 = A1 + (N - A) * A0;
    B0 = B1 + (N - A) * B0;
    A1 = X * A0 + N * A1;
    B1 = X * B0 + N * B1;
    A0 = A0 / B1;
    B0 = B0 / B1;
    A1 = A1 / B1;
    B1 = 1;
  }
  const p = Math.exp(A * Math.log(X) - X - logGamma(A)) * A1;
  return 1 - p;
}

function gser(X, A) { // Good for X<A+1.
  let T9 = 1 / A;
  let G = T9;
  let I = 1;
  while (T9 > G * 0.00001) {
    T9 = T9 * X / (A + I);
    G = G + T9;
    I = I + 1;
  }
  G = G * Math.exp(A * Math.log(X) - X - logGamma(A));
  return G;
}

function gammacdf(x, a) {
  if (x <= 0) {
    return 0;
  }
  if (x < a + 1) {
    return gser(x, a);
  }
  return gcf(x, a);
}

module.exports = function cdf(Z, DF) {
  if (DF <= 0) {
    throw new Error('Degrees of freedom must be positive');
  }
  return gammacdf(Z / 2, DF / 2);
};
