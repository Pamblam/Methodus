
const M = require("../Methodus.js");
var m = new M();

m.fibonacci((i,f)=>{
	if(f.length >= 1000){
		console.log(i);
		return false;
	}
});