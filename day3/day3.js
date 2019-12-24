import { wire1, wire2 } from "./input.json"

function findDistance(origin, intersection) {
    let x = Math.abs(origin[0], intersection[0])
    let y = Math.abs(origin[1], intersection[1])
    return x+y
}

function plotWire(pathString, g=null) {
    let grid = g || []
    for (let y = 0; y < 400; y++) {
        let row = new Array(400).fill(0)
        grid.push( row )
    }
    console.log("initialized grid", grid)
    let path = pathString.split(",")
    let dx = 0, dy = 0;
    let posx = 200, posy = 200
    path.forEach(i => {
        var direction = i.substring(0,1)
        var distance = Number.parseInt(i.substring(1))
        console.log("coordinates:", posx, posy, " --> ", direction, distance)
        switch(direction) {
            case "U":
                for (dy = 0; dy < distance; dy++) {
                    if (posy + dy > 400) break;
                    try {
                        grid[posy + dy][posx] += 1
                    } catch {
                        //
                    }
                }
                posy += distance
                break;
            case "D":
                for (dy = 0; dy < distance; dy++) {
                    if (posy - dy < 0 ) break;
                    try {
                        grid[posy - dy][posx] += 1
                    } catch {}
                }
                posy -= distance
                break;
            case "L":
                for (dx = 0; dx < distance; dx++) {
                    if (posx - dx < 0) break;
                    try{
                        grid[posy][posx - dx] += 1
                    } catch {}
                }
                posx -= distance
                break;
            case "R":
                for (dx = 0; dx < distance; dx++) {
                    if (posx + dx > 400) break;
                    try {
                        grid[posy][posx + dx] += 1
                    } catch {}
                }
                posx += distance
                break;
            default:
                console.log("unexpected instruction")
                return false;  
        }
    })
    return grid
}

function displayGrid(grid) {
    console.log(grid)
    //grid.forEach(row => {
    for (let y = grid.length - 1; y >= 0; y--) {
        console.log(grid[y].join(" "))
    }
}

function findIntersections(plot1, plot2) {
    var p1 = plotWire(plot1)
    var joined = plotWire(plot2, p1)
    var intersections = [];
    joined.forEach( (row, rIndex) => {
        row.forEach( (cell, cIndex) => {
            if (cell === 2) { intersections.push({x: cIndex, y: rIndex})}
        })
    })
    return intersections
}

function closestManhattan(w1,w2) {
    var ixs = findIntersections(w1,w2)
    var results = ixs.map(coords => coords.x + coords.y)
        .sort( (a,b) => a > b)
    console.log("found intersections:", results)
}

closestManhattan(
    // "R8,U5,L5,D3",
    // "U7,R6,D4,L4",
    // "R75,D30,R83,U83,L12,D49,R71,U7,L72",
    // "U62,R66,U55,R34,D71,R55,D58,R83",
    // --> 159
    // "R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51",
    // "U98,R91,D20,R16,D67,R40,U7,R15,U6,R7"
    // --> 135
    wire1,
    wire2
)

module.exports = {
    closestManhattan,
    plotWire,
}