
const M = require("../Methodus.js");

var m = new M(),
	largestSeq = [],
	s;
	
for(var i=2; i<1000000; i++){
	s = m.collatzSequence(i);
	if(s.length > largestSeq.length) largestSeq = s;
}
		
console.log(largestSeq[0]+" creates a sequence that is "+largestSeq.length+" terms long.\n");

