test = require('tape');
fs   = require('fs').promise;
m4   = require('./4');

test('day 4', t => {
    const result = m4.validatePassports('./input.test.txt');
    // t.equal(result,2);
    t.end();
});
