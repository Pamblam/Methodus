
Methodus.prototype.divideInts = function(n, d, peren, maxlen) {
	var num = n + "",
		numLength = num.length,
		remainder = 0,
		answer = '',
		pStack = [], 
		pattern, i, pIndex,  digit;
	maxlen = maxlen || 1000000;
	for(i=0; i < numLength + maxlen; i++) {
		digit = i < numLength ? parseInt(num[i]) : 0;
		if (i == numLength) answer = answer + ".";
		answer = answer + Math.floor((digit + (remainder * 10)) / d);
		remainder = (digit + (remainder * 10)) % d;
		pattern = remainder + "," + digit;
		pIndex = pStack.indexOf(pattern);
		if (pIndex > -1) {
			return peren ?
				answer.substring(0, pIndex + 1) + "(" + answer.substring(pIndex + 1, answer.length - 1) + ")" :
				answer.substring(0, answer.length - 1);
		}
		pStack.push(pattern);
	}
	return answer;
};