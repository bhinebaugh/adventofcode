//import * as input from "./day-8-input.json";
import { data } from "./day-8-input.json";
console.log(JSON.stringify(input));
var output = document.getElementById("output");
output.innerText = data;
//var input = "";
//const data = fetch("data.txt").then(response => input = response.text());
function countOccurrences(layer,token) {
	return Array.from(layer).filter(x => x==token).length
}
const code = document.getElementById("image-code").innerText;
var layers = new Array();
var start = 0;
while(start+150 <= code.length) {
	layers.push(code.slice(start,start+150));
	start += 150;
}
var fewestZeroes = Infinity;
var winningLayer = null;
layers.forEach((layer,index) => {
	let tally = countOccurrences(layer,0);
	if (tally < fewestZeroes) {
		fewestZeroes = tally;
		winningLayer = index;
		console.log("layer",index,"has new fewest 0's with",tally);
	}
})
const result = countOccurrences(layers[winningLayer],1) * countOccurrences(layers[winningLayer],2)
console.log(result)

// image dimensions: 25x6 (x100 layers)
layerImage = layers.map(layer => {
	let lyr = Array.from(layer)
	let dim = new Array();
	while(lyr.length){ dim.push(lyr.splice(0,25)) }
	return dim;
})

//for each position, check layers until getting a 1 or 0
final = new Array();
for(i=0; i<6; i++) {
	final[i] = new Array();
	for(j=0; j<25; j++) {
		let l = 0;
		while(layerImage[l][i][j] == 2) { l++ }
		final[i][j] = layerImage[l][i][j]
	}
}
output = document.getElementById("output");
for(i=0; i<final.length; i++){
	console.log(final[i].join());
	p = document.createElement("div");
	//p.innerText = final[i].join("");
	final[i].forEach(s => {
		el = document.createElement("span");
		if( s == "1" ) el.className="on";
		p.appendChild(el);
	})
	output.appendChild(p);
}
