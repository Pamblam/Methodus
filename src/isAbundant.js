
Methodus.prototype.isAbundant = function(n){
	var f = this.allFactors(n), i, s=0;
	for(i=f.length-1; i--;) s+=f[i];
	return s > n;
};