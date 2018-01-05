
Methodus.prototype.permute = function(arr, limit) {
	var res = [], used = []
	const p = input=>{
		var i, ch;
		for (i = 0; i < input.length; i++) {
			ch = input.splice(i, 1)[0];
			used.push(ch);
			if (input.length == 0) res.push(used.slice());
			if(limit && limit === res.length) return res;
			p(input);
			input.splice(i, 0, ch);
			used.pop();
		}
		return res;
	};
	return p(arr);
};