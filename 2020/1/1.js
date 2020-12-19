/* Day 1 */
fs = require('fs');

function checkExpenses(entries = []) {
    // walk through entries
    // add to previously unsummed entries
    for (let i = 0; i < (entries.length-1); i++) {
        const first = entries[i];
        for (let j = i+1; j < (entries.length); j++) {
            if (first + entries[j] === 2020) {
                console.log('correct sum was produced from entries',
                    i, 'and', j, 'of list',
                    ' (values:', first, entries[j], ')');
                return first*entries[j];
            }
        }
    }
    return false;
}

// read entries from file
fs.readFile('./input-1.txt', 'utf8', (err,data) => {
    if (err) {
        console.log('problem opening file :(');
        throw new Error(err);
    }
    const entries = data.split('\n').map(d => parseInt(d));
    const result = checkExpenses(entries);
    console.log('resulting product of multiplication:')
    console.log(result);
})

module.exports = {
    checkExpenses
}