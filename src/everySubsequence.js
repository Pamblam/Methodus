
Methodus.prototype.everySubsequence = function(seq, len, funct){
	var a = seq.split(''), n, i, subseq = [], e;
	for(i=0; i<a.length; i++){
		e = Math.min(a.length, i+len);
		for(subseq = [], n=i; n<e; n++) subseq.push(a[n]);
		funct(i, subseq);
	}
};