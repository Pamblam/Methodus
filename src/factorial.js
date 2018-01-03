
Methodus.prototype.factorial = function(n){
	var f = 1;
	for(; n>0; n--) f = this.multiplyInts(f, n);
	return f;
};