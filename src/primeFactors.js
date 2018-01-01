
Methodus.prototype.primeFactors = function(n){
	var o = [], i;
	while (n%2 == 0){
		o.push(2);
		n = n/2;
	}
	for (i=3, s=Math.sqrt(n); i<=s; i=i+2){
		while (n%i == 0){
			o.push(i);
			n = n/i;
		}
	}
	if (n > 2) o.push(n);
	return o.sort((a,b)=>a-b);
};