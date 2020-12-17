var test = require("tape");
//import test from "tape";

var {operate, compute} = require("./day5.js")
//import operate from "./day2.js";

const opcodes = [1,2,3,4,99]

test("errors on unknown opcode", (t) => {
	var x = operate(3,5,5);
	t.notok(x);
	t.end();
})

test("opcode '1' adds numbers", (t) => {
	t.equal( operate(1,4,3), 7)
	t.end();
})

test("opcode '2' multiplies numbers", (t) => {
	t.equal( operate(2,4,3), 12)
	t.end();
})

test("opcode '3' saves an input to position specified by parameter", t => {
	var program = [3,2]
})

test("opcode '4' outputs the value at its parameter's position", t => {
	var program = [4,2,88]
	t.equal( compute(program) )
})

test("The program 3,0,4,0,99 outputs whatever it gets as input, then halts.", t => {
	var program = [3,0,4,0,99]

})

test("the program 1002,4,3,4,33 produces 99", t => {
	
})

test("supports parameter mode '0' --> position mode", t => {
	var program = ["001", "3",]
})

test("supports parameter mode '1' --> immediate mode", t => {

})

test("simple addition program", (t) => {
	var program = [1,0,0,0,99]
	t.deepEqual( compute(program), [2,0,0,0,99] )
	t.end();
})

test("simple multiplication program", (t) => {
	var input = [2,3,0,3,99]
	var output = [2,3,0,6,99]
	t.deepEqual( compute(input), output )
	t.end()
})

test("bigger multiplication program", (t) => {
	var input = [2,4,4,5,99,0]
	var output = [2,4,4,5,99,9801]
	t.deepEqual( compute(input), output )
	t.end()
})

test("multi-step program", t => {
	var input = [1,1,1,4,99,5,6,0,99]
	var output = [30,1,1,4,2,5,6,0,99]
	t.deepEqual( compute(input), output )
	t.end()
})


