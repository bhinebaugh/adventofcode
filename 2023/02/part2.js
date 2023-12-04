fs = require("fs")

const rActual = 12; const gActual = 13; const bActual = 14;
const colorCountRegex = /\W*(\d+) (red|green|blue)\W*/
var lines = new Array()

// process input file into data structures expected below
fs.readFile("./input.txt", "utf8", (err, data) => {
    if (err) { throw new Error(err) }
    lines = data.split("\n")
    lines = lines.map(line => line.split(":")[1])
    processInput(lines)
})

function processInput(gamesArray) {
    // loop over an array of games as strings 
    // (lines of input file minus game id)
    i = 1; powerSum = 0;
    for (gameString of gamesArray) {
        gameMax = { red: 0, green: 0, blue: 0 }
        const game = gameString.split(";")
        // loop over grabs comprising the game
        for (const hand of game) {
            colorCountsOfHand = hand.split(",")
            for (colorCount of colorCountsOfHand) {
                [, countStr, color] = colorCount.match(colorCountRegex)
                count = Number.parseInt(countStr)
                if (typeof gameMax[color] === "undefined") {
                    console.log(`color ${color} not found in record`)
                } else {
                    if (count > gameMax[color]) gameMax[color] = count
                }
            }
        }
        power = Object.values(gameMax).reduce(
            (acc, max) => acc*max,
            1
        )
        // console.log(gameMax, "-->", power)
        powerSum = powerSum + power
        i++
    }
    console.log("sum of power of minimum cubes needed for each game:", powerSum)
}

function resultsArePossible(gameMax) {
    if (
        gameMax.red   <= rActual && 
        gameMax.green <= gActual && 
        gameMax.blue  <= bActual
    ) { return true }
    else { return false }
}