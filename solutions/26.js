
const M = require("../Methodus.js");
var lr = 0, i, d, l, m=new M();
for(i=2; i<1000; i++){
	d = m.divideInts(1, i, true);
	if(d.indexOf("(") > -1){
		l = d.match(/\(\d+\)/g)[0].length-2;
		if(l > lr){
			lr = l;
			console.log("New longest: 1/"+i+" ("+l+" repeating) = "+d);
		}
	}
}