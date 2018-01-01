
Methodus.prototype.pythagoreanTripletFromCircumference = function(circumference){
	var a=0, b=0, c=0,
		m = 0, k = 0, n = 0, d = 0,
		found = false,
		mlimit = Math.sqrt(circumference / 2);
	for (m = 2; m <= mlimit; m++) {
		if ((circumference / 2) % m !== 0) continue;
		k = m % 2 == 0 ? m + 1 : m + 2
		while (k < 2 * m && k <= circumference / (2 * m)) {
			if (circumference / (2 * m) % k == 0 && this.greatestCommonDivisor(k, m) == 1) {
				d = circumference / 2 / (k * m);
				n = k - m;
				a = d*(m * m - n * n);
				b = 2 * d * n * m;
				c = d * (m * m + n * n);
				found = true;
				break;
			}
			k += 2;
		}
		if (found) break;
	}
	return {a:a, b:b, c:c};
};