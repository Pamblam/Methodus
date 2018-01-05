
Methodus.prototype.binomialCoefficient = function (n, k) {
	var c = 1, x;
	for (x = n - k + 1; x <= n; x++) c *= x;
	for (x = 1; x <= k; x++) c /= x;
	return parseInt(c);
};