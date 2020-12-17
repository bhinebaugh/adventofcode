import { program } from "./day2-input.json"

let operate = (v,a,b) => {
	switch (v) {
		case 1:
			return a+b;
			break;
		case 2:
			return a*b;
			break;
		case 99:
			// end program
			return false;
		default:
			// return Error("invalid operation");
			return false
	}
}

let compute = (program) => {
	let step = 0
	while(program.length - step >= 4) {
		let segment = program.slice(step,step+4)
		if (segment[0] == 99) { return program }
		var result = operate(
			segment[0],
			program[segment[1]],
			program[segment[2]]
		)
		program[segment[3]] = result
		step = step+4
	}
	console.log("remaining",program.slice(step,program.length))
	return program
}

// adjust memory to pre-crash state
const unalteredState = [...program]
program[1] = 12
program[2] = 2
document.getElementById("input").innerText = program.join(", ")
var output = compute(program)
document.getElementById("output").innerText = output.join(", ")

const targetOutput = 19690720

noun_block: {
	for (let noun=0; noun <= 99; noun++) {
		for (let verb=0; verb <= 99; verb++) {
			let testProgram = [...unalteredState]
			testProgram[1] = noun
			testProgram[2] = verb
			let output = compute(testProgram)
			if (output[0] === targetOutput) {
				console.log("finally got desired output from",noun,verb)
				break noun_block;
			}
		}
	}
}


//export default operate;
module.exports = {
	operate,
	compute,
}
