# chi-squared

Characteristic functions for the
[chi-squared distribution](http://en.wikipedia.org/wiki/Chi-squared_distribution).

# example

```
> var chi = require('chi-squared')
> chi.pdf(0.5, 1)
0.4393912894677223
> chi.pdf(2.3, 1.4)
0.11695769277348175
```

# methods

var chi = require('chi-squared')

## chi.pdf(x, k)

Compute the probability density function for the parameter `x` under `k` degrees
of freedom.

# install

With [npm](http://npmjs.org) do:

```
npm install chi-squared
```

# license

MIT
