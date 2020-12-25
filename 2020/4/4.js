fs = require('fs').promises;

const fields = [
    "byr", // (Birth Year)
    "ecl", // (Eye Color)
    "eyr", // (Expiration Year)
    "hcl", // (Hair Color)
    "hgt", // (Height)
    "iyr", // (Issue Year)
    "pid", // (Passport ID)
    // "cid", // (Country ID)
]

function parseInputFile(raw) {
    var lines = raw.split('\n');
    var firstItem = [];
    var passports = [firstItem];
    lines.forEach(line => {
        if (line == '') {
            passports.push(new Array());
        }
        else {
            const entries = line.split(' ').map(pair => {
                return pair.split(':')[0]
                // const [key, value] = pair.split(':');
                // return { [key]: value }
            });
            const concatted = passports[passports.length-1].concat(entries)
            passports[passports.length-1] = concatted
        }
    })
    return passports;
}

function checkForRequiredFields(candidates) {
    var validPassports = candidates.filter(c => fields.every( f => c.includes(f) ));
    return validPassports;
}

async function validatePassports(inputFile) {
    const rawText = await fs.readFile(inputFile,'utf8');
    const passportCandidates = parseInputFile(rawText);
    console.log(passportCandidates.length + ' entries to consider:')
    console.log(passportCandidates);

    const validPassports = checkForRequiredFields(passportCandidates);
    console.log(validPassports.length + ' met criteria')
    return validPassports;
}

const validPassports = validatePassports('./input.txt');

module.exports = {
    validatePassports,
}