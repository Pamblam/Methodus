
const M = require("../Methodus.js");
var m = new M(), i, t, f, factor1, factor2, n, sum=0;
for(i=10000; i--;){
	t=0; f=0;
	factor1 = m.allFactors(i);
	for(n=factor1.length-1;n--;) t+=factor1[n];
	factor2 = m.allFactors(t);
	for(n=factor2.length-1;n--;) f+=factor2[n];
	if(i == f && f != t){
		console.log(i+" & "+t);
		sum += i;
	}
}
console.log(sum);
