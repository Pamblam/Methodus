
const M = require('../Methodus');
var sum = 0, i, w, m = new M();
for(i=1; i<=1000; i++){
	w = m.numToEnglish(i, true);
	w.split('').forEach(n=>{if(n!=" "&&n!="-")sum++;});
	console.log(w, "|", sum);
}
