// Do I use CJS or ESM syntax?
// Common or ECMA. East coast, West coast. Sharks, Jets
// var vs let again?

// # const test = require("node:test")
// What is this variant that VS Code suggested?
const { default: test } = require("node:test");

// convention for constants?
const aoc = require("2023.01.js")

var numbers

// read input file
input = FileSystem.require("./input.txt")

test('extract numbers from line of text', () => {
    result = aoc.extract(line)
    expected = readline
    numbers.push(result)
    assert.strictEqual(result, expected)
})

// not a pure function
// bad practice?
test('sum of extracted numbers', () => {
    result = aoc.sum(numbers)
    expected = 142
    assert.strictEqual(result, expected)
})