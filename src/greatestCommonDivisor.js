
Methodus.prototype.greatestCommonDivisor = function(a, b) {
	var y = 0, x = 0, temp;
	if (a > b) { x = a; y = b; } 
	else { x = b; y = a; }
	while (x % y !== 0) {
		temp = x;
		x = y;
		y = temp % x;
	}
	return y;
};