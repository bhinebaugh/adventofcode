import { program } from "./day5-input.json"
document.getElementById("input").innerText = program.join(", ")
var output = compute(program)
document.getElementById("output").innerText = output.join(", ")

let operate = (v,a,b) => {
	opcode = v.slice(2) //last two digits ()
	if (v.length > 2) {
		params = v.padStart(3,'0')
	}
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

let compute = (program, input) => {
	let pointer = 0
	let endpoint = program.length

	//start at pointer
	//read number of entries indicated by opcode
	// program[pointer].toString().length >= 2
	let instruction = program[pointer]
	let opcode = instruction.toString().slice(-2) // last two digits
	let p = instruction.slice(0,-2).padStart(3,'0')


	console.log("remaining",program.slice(step,program.length))
	return program
}



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
