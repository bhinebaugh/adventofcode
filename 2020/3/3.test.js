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

const testSlope = {right: 3, down: 1};

// Right 1, down 1.
// Right 3, down 1. (This is the slope you already checked.)
// Right 5, down 1.
// Right 7, down 1.
// Right 1, down 2.
const slopeSet = [
    {right: 1, down: 1, trees: 2},
    {right: 3, down: 1, trees: 7},
    {right: 5, down: 1, trees: 3},
    {right: 7, down: 1, trees: 4},
    {right: 1, down: 2, trees: 2},
]

test('number of trees encountered', t => {
    t.equals(m3.countTrees(testGrid, testSlope), 7);
    slopeSet.forEach(slope => {
        t.equals(m3.countTrees(testGrid, slope), slope.trees)
    })
    t.equals(m3.multiplyTreesOnAllSlopes(slopeSet), 336)
    t.end();
})