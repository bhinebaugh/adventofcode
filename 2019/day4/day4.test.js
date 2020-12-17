const test = require("tape")
const { Validate } = require("./validate.js")

const validate = new Validate(245182, 790572)
test("six-digit number", t => {
    t.ok( validate.getLength("245679") )
    t.notOk( validate.getLength("3") )
    t.notOk( validate.getLength("2455789") )
    t.notOk( validate.getLength("122") )
    t.end()
})

test("repeated adjacent digits", t => {
    t.plan(2)
    t.ok( validate.adjacent("344789") )
    t.notOk( validate.adjacent("245789") )
})

test("but only two adjacent", t => {
    t.ok( validate.limitedAdjacent("112233") )
    t.ok( validate.limitedAdjacent("111122") )
    t.ok( validate.limitedAdjacent("255577") )
    t.ok( validate.limitedAdjacent("225777") )
    t.notOk( validate.limitedAdjacent("333333") )
    t.notOk( validate.limitedAdjacent("123444") )
    t.end()
})

test("within range", t => {
    // Your puzzle input is 245182-790572
    t.plan(4)
    t.notOk( validate.range("245181") )
    t.ok( validate.range("245182") )
    t.ok( validate.range("790572") )
    t.notOk( validate.range("790573") )
})

test("successive digits do not decrease", t => {
    t.plan(2)
    t.notOk( validate.increasing("452899") )
    t.ok( validate.increasing("333557") )
})

test("all together now", t => {
    t.ok( validate.newAll("255678") )
    t.ok( validate.newAll("255577") )
    t.notOk( validate.newAll("225777") )
    t.end()
})