test = require('tape');
m2 = require('./2.js');

testInput = `
1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc
`;

test("identify number of passwords that meet requirements", t => {
    const entries = m2.parseInputFile(testInput);
    t.equals(m2.countValidPasswordsA(entries), 2);
    t.equals(m2.countValidPasswordsB(entries), 1);
    t.end();
})