
Methodus.prototype.everySubsequence = function(seq, len, funct){
	var n, i, subseq = [], e;
	for(i=0; i<seq.length; i++){
		e = Math.min(seq.length, i+len);
		for(subseq = [], n=i; n<e; n++) subseq.push(seq[n]);
		funct(i, subseq);
	}
};