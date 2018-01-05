
Methodus.prototype.count=function(array, needle) {
	var count = 0, i;
	for (i = 0; i < this.length; i++)
		if (array[i] === needle) count++;
	return count;
};