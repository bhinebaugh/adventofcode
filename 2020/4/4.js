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
                // return pair.split(':')[0]
                const [key, value] = pair.split(':');
                return { [key]: value }
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

function validateAllFields(passport) {

    // byr (Birth Year) - four digits; at least 1920 and at most 2002.
    // iyr (Issue Year) - four digits; at least 2010 and at most 2020.
    // eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
    // hgt (Height) - a number followed by either cm or in:
    //     If cm, the number must be at least 150 and at most 193.
    //     If in, the number must be at least 59 and at most 76.
    // hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
    // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
    // pid (Passport ID) - a nine-digit number, including leading zeroes.
    // cid (Country ID) - ignored, missing or not.
    allowed = {
        byr: 19[2-9][0-9] | 200[0-2],
        iyr: 20(1\n|20),
        eyr: 20(2\n|30),
        hgt: ???,
        hcl: /#[0-9a-f]{6}/,
        ecl: (amb)|(blu)...
        pid: \n{9}
        
    }

    return true;
}

async function validatePassports(inputFile) {
    const rawText = await fs.readFile(inputFile,'utf8');
    const passportCandidates = parseInputFile(rawText);
    console.log(passportCandidates.length + ' entries to consider:')
    console.log(passportCandidates);

    const passportsWithRequiredFields = checkForRequiredFields(passportCandidates);
    const validPassports = 
        passportsWithRequiredFields.filter(passport => validateAllFields(passport))
    return validPassports;
}

const validPassports = validatePassports('./input.txt');

module.exports = {
    validatePassports,
}