
Methodus.prototype.isAbundant = function(number) {
	var sum = 1;
	var half = number / 2;
	for (var i = 2; i <= half; i++) {
		if (number % i === 0) {
			sum += i;
			if (sum > number) {
				return true;
			}
		}
	}
	return false;
};