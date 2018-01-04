
// CURRENT IMPLEMENTATION IS INCORRECT

const M = require("../Methodus.js");
var m = new M(), abundants = [], i, n, list=[], s;

// Step 1.. calculate all abundant numbers (<= 28123)
for(i=1; i<=28123; i++) if(m.isAbundant(i)) abundants.push(i);

// Step 2.. calculate all numbers that can be written as the sum of two abundant
// numbers (< 28123)
for(i=0; i<abundants.length; i++){
	for(n=i; n<abundants.length; n++){
		s = abundants[n]+abundants[i];
		if(s<28123) list.push(s);
	}
}

// Step 3.. determine sum of all numbers that cannot be written as the sum of 
// two abundant numbers (<= 28123)
for(i=1,s=0;i<=28123;i++) if(-1===list.indexOf(i)) s+=i;

console.log(i);
