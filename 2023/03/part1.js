fs = require("fs")

// any character not a digit or '.' will be considered a symbol
const symbolRegex = /[^\.\d]/g

// getInput("./sample.txt") // --> 4361
getInput("./input.txt")     // --> 533775

function getInput(fileName) {
    fs.readFile(
        fileName,
        "utf8",
        (err, contents) => {
            if (err) throw err
            parseInput(contents)
        }
    )
}

function parseInput(puzzle) {
    lines = puzzle.split("\n") // 140 + '\n' at end
    lines = lines.filter(l => l.length > 0)
    
    validPartsStr = filterNumbers(lines)

    console.log(validPartsStr.length, "valid numbers found:", validPartsStr)
    sum = validPartsStr.reduce(
        (acc, n) => {
            int = Number.parseInt(n)
            if (isNaN(int)) {
                return acc
            }
            return acc + int
        }, 
        0
    )
    console.log( sum )
}

function filterNumbers(lines) {
    let validNumbers = []
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i]
        c = 0
        validPartsFromLine = []
        partStr = ""

        while (c < line.length) {
            if (line[c].match(/\d/)) {
                let valid = false
                // check the 3-row span of the previous column
                if (symbolInColumn(c-1, i, lines)) {
                    valid = true
                }
                do {
                    // keep adding successive digits until they stop
                    partStr = partStr + line[c]
                    // if not yet valid, check above and below
                    if (!valid && symbolInColumn(c, i, lines)) {
                        valid = true
                    }
                    c++
                } while (c < line.length && line[c].match(/\d/))
                // if still valid, the 3-row span of the column after
                if (!valid && symbolInColumn(c, i, lines)) {
                    valid = true
                }
                if (valid) {
                    validPartsFromLine.push(partStr)
                }
                partStr = ""
            }
            c++
        }
        validNumbers = validNumbers.concat(validPartsFromLine)
    }
    return validNumbers
}

function symbolInColumn(c, l, lines) {
    // checks at most three items in column c centered on row l
    if (c < 0 || c > lines[l].length - 1) return false
    const startRow = l < 1 ?  0 : l - 1
    let endRow = l + 1
    if (endRow >= lines.length) {
        endRow = lines.length - 1
    }
    for (y = startRow; y <= endRow; y++) {
        if (lines[y][c].match(/[^\.\d]/)) {
            return true
        }
    }
    return false
}


function isAdjacentToSymbol(col, line, len, lines) {
    // target = lines[line][col]
    // console.log(target)
    startLine = (line < 1) ? 0 : (line - 1)
    startCol  = (col < 1) ? 0 : (col - 1)
    endLine   = (line >= lines.length-1) ? (lines.length - 1) : (line + 1)
    endCol    = (col + len >= line.length - 1) ? (line.length - 1): (col + len + 1)
    
    // console.log(`relevant grid: ${startCol}-${endCol} of lines ${startLine}-${endLine}`)
    // g = new Array()
    for (l = startLine; l <= endLine; l++) {
        s = lines[l].slice(startCol, endCol)
        // console.log(s)
        if (s.match(symbolRegex)) return true
        // g.push(s)
    }
    // console.log(g.join('\n'))
    // console.log('-------')
    return false
}

function extractSymbols(lines) {
    for (row of lines) {
        const symbols = row.match(symbolRegex)
        if (symbols) console.log(symbols.join())
    }
}
