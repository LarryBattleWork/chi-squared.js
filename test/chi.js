var test = require('tape');
var chi = require('../');

test('chi', function (t) {
    t.equal(chi.pdf(0.5, 1), 0.4393912894677222);
    t.equal(chi.pdf(2.3, 1.4), 0.11695769277348174);
    t.end();
});

test('chi.cdf', function (t) {
  t.equal(chi.cdf(2, 2), 0.6321204474030798);
  t.equal(chi.cdf(1, 3), 0.19874802827905516);
  t.equal(chi.cdf(200, 256), 0.003994567089502389);
  t.end();
});
