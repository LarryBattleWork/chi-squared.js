var test = require('tape');
var chi = require('../');

test('chi', function (t) {
    t.equal(chi.pdf(0.5, 1), 0.4393912894677223);
    t.equal(chi.pdf(2.3, 1.4), 0.11695769277348175);
    t.end();
});
