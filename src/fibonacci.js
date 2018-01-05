
Methodus.prototype.fibonacci = function (funct) {
	var a = "1", b = "0", temp, i = 0;
	while (++i) {
		temp = a;
		a = this.addInts([a, b]);
		b = temp;
		if (funct(i, b) === false) return;
	}
};