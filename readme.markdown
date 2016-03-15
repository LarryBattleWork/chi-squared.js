# chi-squared

Characteristic functions for the
[chi-squared distribution](http://en.wikipedia.org/wiki/Chi-squared_distribution).

[![build status](https://secure.travis-ci.org/substack/chi-squared.js.png)](http://travis-ci.org/substack/chi-squared.js)

# Example

```
var chi = require('chi-squared')
chi.pdf(0.5, 1) // 0.4393912894677223
chi.pdf(2.3, 1.4) // 0.11695769277348175
chi.cdf(2, 2) // 0.6321204474030797
```

# Methods

## chi.pdf(x, k)

Compute the probability density function for the parameter `x` under `k` degrees
of freedom.

## chi.cdf(x, k)

Compute the cumulative density function. same parameters as above.

# Install

With [npm](http://npmjs.org) do:

`npm install chi-squared`

# Import

`var chi = require('chi-squared')`

# Npm tasks

- Run tests: `npm test`
- Run lint: `npm run lint`

# License

MIT
