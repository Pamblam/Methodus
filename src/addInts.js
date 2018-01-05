
Methodus.prototype.addInts = function (array) {
	var sum = [], carry = 0, i, digits = 0, colSum;
	for (i = array.length; i--; ) {
		array[i] = ("" + array[i]).split('').reverse();
		if (array[i].length > digits) digits = array[i].length;
	}
	for (i = 0; i < digits; i++) {
		colSum = 0;
		for (var n = 0; n < array.length; n++)
			if (array[n][i]) colSum += parseInt(array[n][i]);
		colSum += carry;
		carry = 0;
		if (colSum > 9) {
			colSum = ("" + colSum);
			carry = parseInt(colSum.substr(0, colSum.length - 1));
			colSum = parseInt(colSum.substr(colSum.length - 1));
		}
		sum.push("" + colSum)
	}
	if (carry > 0) sum.push(carry);
	return sum.reverse().join('');
};