
Methodus.prototype.allFactors = function (n) {
	var factors = [1, n],
		lowestProduct = n,
		highestMultiplier;
	for (highestMultiplier = 1; lowestProduct >= highestMultiplier; highestMultiplier++) {
		if (n % highestMultiplier === 0) {
			lowestProduct = n / highestMultiplier;
			if (!~factors.indexOf(lowestProduct)) factors.push(lowestProduct);
			if (!~factors.indexOf(highestMultiplier)) factors.push(highestMultiplier);
		}
	}
	return factors.sort((a, b) => a - b);
};