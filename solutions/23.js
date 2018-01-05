
const M = require("../Methodus.js");
var m = new M(), abnt = [], i, n, sums={}, antisums = [], sum=0, s;

console.log("Getting all abundant numbers");
for (i = 0; i <= 28123; i++)
    if (m.isAbundant(i)) abnt.push(i);

console.log("Getting all possible sums");
for(i=abnt.length; i--;){
	for(n=i+1; n--;){
		s = abnt[n]+abnt[i];
		if(s <= 28123) sums[s]=true; // object properties are faster to search than arrays
	}
}

console.log("Getting numbers not in the sums");
for (i = 0; i <= 28123; i++){
	if(!sums[i]) antisums.push(i);
	else console.log("--"+i);
}

console.log("Add the stuff");
for(i = antisums.length; i--;) sum += antisums[i];

console.log("Answer is: "+sum);