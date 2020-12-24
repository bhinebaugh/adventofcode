fs = require('fs');

const treeChar = '#';
const defaultSlope = {right: 3, down: 1};
const slopeSet = [
    {right: 1, down: 1},
    {right: 3, down: 1},
    {right: 5, down: 1},
    {right: 7, down: 1},
    {right: 1, down: 2},
]

function countTrees(gridAsText, slope) {
    const grid = gridAsText.split('\n');
    const width = grid[0].length;
    var treeCount = 0;
    // start at 0,0
    for (let i=0; (i*slope.down)<grid.length; i ++) {
        const row = i * slope.down;
        const column = (slope.right*i) % width;
        if (grid[row][column] === treeChar) { treeCount++ }
    }
    return treeCount;
}

function multiplyTreesOnAllSlopes(grid, slopeSet) {
    const treesPerSlope = slopeSet.map(slope => countTrees(grid, slope));
    return treesPerSlope.reduce((acc, cur) => acc*cur, 1)
}

function run() {
    fs.readFile('./input-3.txt', 'utf8', (err,data) => {
        if (err) { throw new Error(err) }

        // single slope
        const result1 = countTrees(data, defaultSlope);
        console.log('trees encountered:',result1)

        // multiple slopes
        const result2 = multiplyTreesOnAllSlopes(data, slopeSet);
        console.log('product of trees across set of slopes', result2)
    })
}

run();

module.exports = {
    countTrees,
    multiplyTreesOnAllSlopes
}