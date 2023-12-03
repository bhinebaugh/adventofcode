
stringinput = 
`Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`

sample = [
    "3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
    "1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
    "8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
    "1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
    "6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
]

const colorRegex = /\W*(\d+) (red|green|blue)\W*/

// loop over game strings (lines)
i = 1
for (gameString of sample) {
    maxOfGame = { red: 0, green: 0, blue: 0 }
    const game = gameString.split(";")
    // loop over grabs comprising the game
    for (const hand of game) {
        colorCountsOfHand = hand.split(",")
        for (colorCount of colorCountsOfHand) {
            [, countStr, color] = colorCount.match(colorRegex)
            count = Number.parseInt(countStr)
            if (typeof maxOfGame[color] === "undefined") {
                console.log(`color ${color} not found in record`)
            } else {
                if (count > maxOfGame[color]) maxOfGame[color] = count
            }
        }
    }
    console.log(i, ": ", maxOfGame)
    i++
}