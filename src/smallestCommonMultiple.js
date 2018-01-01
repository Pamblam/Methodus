
Methodus.prototype.smallestCommonMultiple = function(){
	var args = Array.from(arguments),
		o = {}, 
		i, p, n, c, m;
	for(i=0; i<args.length; i++){
		p = this.primeFactors(args[i]);
		for(n=0; n<p.length; n++){
			c = this.count(p, p[n]);
			if(!o[p[n]] || c>o[p[n]]) o[p[n]]=c;
		}
	}
	var n=1;
	for(m in o){
		if(!o.hasOwnProperty(m)) continue;
		while(o[m]){
			n = n*m;
			o[m]--;
		}
	}
	return n;
};