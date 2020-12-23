fs = require('fs');

function parseInputFile(text) {
    var entries = text.split('\n').filter(i => i != false);
    entries = entries.map(n => {
        n = n.split(': ');
        const rule = n[0].split(' ');
        const password = n[1];
        return {
            rule: {
                range: rule[0].split('-'),
                character: rule[1]
            },
            password
        }
    })
    return entries;
}

function countValidPasswordsA(entries) {
    var validPasswordsA = 0;
    // For method A, the number of occurences of the character
    // must be within the inclusive range of the two numbers
    const checkLetterOccurence = function({ rule, password}) {
        const requiredCharacter = rule.character;
        occurences = password
                            .split('')
                            .filter(l => l === requiredCharacter)
                            .length;
        if (occurences >= rule.range[0] && occurences <= rule.range[1]) {
            return true;
        }
    }

    for (let i = 0; i < entries.length; i++) {
        if (checkLetterOccurence(entries[i])) {
            validPasswordsA++
        }
    }
    return validPasswordsA;
}

function countValidPasswordsB(entries) {
    var validPasswordsB = 0;
    // For method B, the two numbers specify the 1-indexed positions,
    // at one and only one of which the character must occur (X-OR)
    const checkLetterPosition = function({ rule, password }) {
        const firstMatch = password[rule.range[0]-1] === rule.character;
        const secondMatch = password[rule.range[1]-1] === rule.character;
        // use JS type coercion to detect inequality of matches
        if (firstMatch + secondMatch === 1) {
            return true;
        } else {
            return false;
        }
    }

    for (let i = 0; i < entries.length; i++) {
        if (checkLetterPosition(entries[i])) {
            validPasswordsB++
        }
    }
    return validPasswordsB;
}

fs.readFile('./input-2.txt', 'utf8', (err, data) => {
    if (err) { throw new Error(err); }
    const entries = parseInputFile(data);
    console.log(countValidPasswordsA(entries));
    console.log(countValidPasswordsB(entries));
});

module.exports = {
    parseInputFile,
    countValidPasswordsA,
    countValidPasswordsB
}