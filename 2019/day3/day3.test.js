var test = require("tape")
var { closestManhattan, plotWire } = require("./day3.js")

test("instruction syntax accepts R,L,U,D", t => {
	//r,l,u,d and integers
	let dist = plotWire("R10,U5,L3")
	t.ok(dist)
	t.end()
})
test("bad syntax fails", t => {
	let dist = plotWire("K5,U7,L3")
	// t.notok(dist)
	t.skip()
	t.end()
})

test("distance is calculated as Manhattan", t => {
	t.plan(2)
	
	let w1 = "R75,D30,R83,U83,L12,D49,R71,U7,L72"
	let w2 = "U62,R66,U55,R34,D71,R55,D58,R83"
	let dist = closestManhattan(w1,w2)
	t.equal(dist, 159)
	
	w1 = "R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51"
	w2 = "U98,R91,D20,R16,D67,R40,U7,R15,U6,R7"
	dist = closestManhattan(w1,w2)
	t.equal(dist, 135)
})
