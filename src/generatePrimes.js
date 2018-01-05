
Methodus.prototype.generatePrimes = function (funct) {
	let primes = [2, 3, 5];
	for (var i = 0; i < primes.length; i++) if (false === funct(primes[i])) return;
	const isPrime = num => {
		for (let n = 0; n < primes.length; n++) {
			if (num === primes[n]) return true;
			if (num % primes[n] === 0) return false;
		}
		return true;
	};
	for (var i = 7; true; i++) {
		if (isPrime(i)) {
			if (primes.indexOf(i) === -1) primes.push(i);
			if (false === funct(i)) return;
		}
	}
};

