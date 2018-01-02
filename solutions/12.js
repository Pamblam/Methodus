const M = require("../Methodus.js");

var m = new M();
m.generateTriangleNumbers((i, t)=>{
	var f = m.allFactors(t);
	if(f.length > 500){
		console.log("The "+i+"th triangle number is "+t+" and it has "+f.length+" factors: "+(f.join(",")));
		return false;
	}
});