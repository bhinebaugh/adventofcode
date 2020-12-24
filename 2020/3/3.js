fs = require('fs');

const treeChar = '#';

function parseGrid(gridAsText) {
    var grid = gridAsText.split('\n');
    return grid;
}
function countTrees(gridAsText, slope) {
    // parseGrid(grid)
    const grid = gridAsText.split('\n');
    const width = grid[0].length;
    var treeCount = 0;
    // start at 0,0
    for (let row=1; row<grid.length; row++) {
        const column = (slope*row) % width;
        // if (column > row.length) break;
        // column % grid.length
        if (grid[row][column] === treeChar) { treeCount++ }
    }
    return treeCount;
}

function run() {
    fs.readFile('./input-3.txt', 'utf8', (err,data) => {
        if (err) { throw new Error(err) }
        // initial slope: right 3, down 1
        const result = countTrees(data, 3);
        console.log('trees encountered:',result)
    })
}

run();

module.exports = {
    countTrees
}