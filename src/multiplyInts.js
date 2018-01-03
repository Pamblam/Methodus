
Methodus.prototype.multiplyInts = function(a, b){
	a = (""+a).split('').map(i=>parseInt(i));
	b = (""+b).split('').map(i=>parseInt(i));
	if(a.length > b.length){
		var c = b;
		b = a;
		a = c;
		delete c;
	}
	var carry = 0, i, n, products = [], add, p;
	for(i=a.length; i--;){
		add = [];
		add.push("0".repeat(a.length-i-1));
		for(n=b.length; n--;){
			p = a[i]*b[n]+carry;
			carry = 0;
			if(p > 9){
				p = (""+p);
				carry = parseInt(p.substr(0,p.length-1));
				p = parseInt(p.substr(p.length-1));
			}
			add.push(p);
		}
		if(carry > 0) add.push(carry);
		products.push(add.reverse().join(''));
	}
	return this.addInts(products);
};