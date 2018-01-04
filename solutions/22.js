
// Need to install request for this one
// npm install request
const request = require('request');
var abc="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''),t=0,n,i,sum=0;
request('https://projecteuler.net/project/resources/p022_names.txt', function (error, response, names) {
	names = names.split(",").map(n=>n.substr(1,n.length-2)).sort();
	for(i = names.length; i--;){
		t=0;
		for(n=names[i].length; n--;) t+=abc.indexOf(names[i][n])+1;
		sum+=((1+i)*t)
	}
	console.log(JSON.stringify(sum));
});