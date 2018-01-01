const M = require("../Methodus.js");

var sum = 0;
new M().generatePrimes(prime=>{
	if(prime>=2000000) return false;
	sum += prime;
	console.log("+ "+prime+" = "+sum);
});

console.log(sum);