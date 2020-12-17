const { Validate } = require("./validate.js");
// import Validate from "./validate";

const inputRange = [245182, 790572];
let validate = new Validate(inputRange[0], inputRange[1]);
let valid = [];
let valid2 = [];

let n;

for (n=inputRange[0]; n <= inputRange[1]; n++) {
    if (validate.all(n.toString())) {
        valid.push(n)
    }
    if (validate.newAll(n.toString())) { valid2.push(n) }
}

console.log("valid numbers (double):", valid.length, valid2.length)