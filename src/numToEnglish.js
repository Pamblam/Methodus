
Methodus.prototype.numToEnglish = function(num, ands) {
	
	const ones_teens = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	const scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion','sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quattuordecillion', 'quindecillion', 'sexdecillion', 'septendecillion', 'octodecillion', 'novemdecillion', 'vigintillion'];
	const scalify = (item, index)=>item ? item + " " + scales[index] : "";
	const notEmpty = item=>!!item;
	
	const toEnglish = n=>{
		var line;
		if (isNaN(n) || n > 999) return null;
		if (n == 0) line = "";
		else if (n < 20) line = ones_teens[n];
		else if (n < 100) {
			line = tens[(n / 10) | 0];
			if (n % 10) line += "-" + ones_teens[n % 10];
		} else line = ones_teens[(n / 100) | 0] + " hundred " + toEnglish(n % 100);
		return line.trim();
	};

	const chunkify = n=>{
		var numbers = [];
		while (n > 0) {
			numbers.push(n % 1000);
			n = Math.floor(n / 1000);
		}
		return numbers;
	};

	const insertAnds = eng => {
		var e = eng.split(" ");
		var r = [];
		for(var i=0; i<e.length; i++){
			r.push(e[i]);
			if(e[i] === "hundred" && e[i+1] && scales.indexOf(e[i+1]) === -1) r.push("and");
		}
		return r.join(" ");
	}
	
	var english = chunkify(num).map(toEnglish).map(scalify).filter(notEmpty).reverse().join(", ");
	if(ands) english = insertAnds(english);
	return english;
};