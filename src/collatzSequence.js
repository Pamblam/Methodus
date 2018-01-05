
Methodus.prototype.collatzSequence = function (n) {
	var seq = [n];
	while (n > 1) {
		if (n % 2 === 0) n = n / 2;
		else n = n * 3 + 1
		seq.push(n);
	}
	return seq;
};