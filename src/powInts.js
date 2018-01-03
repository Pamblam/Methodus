
Methodus.prototype.powInts = function(a, e){
	var p = 1, i;
	for(i=0; i<e; i++) p = this.multiplyInts(p, a);
	return p;
};