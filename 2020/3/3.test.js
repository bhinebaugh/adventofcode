test = require('tape');
m3 = require('./3.js');

const testGrid = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;

const testSlope = 3;

test('number of trees encountered', t => {
    t.equals(m3.countTrees(testGrid, testSlope), 7);
    t.end();
})