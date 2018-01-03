/**
 * methodus - v1.0.58
 * A Math Library inspired by Project Euler
 * @author Pamblam
 */

function Methodus(){
	this.version = "1.0.58";
}

if(!!(typeof module !== 'undefined' && module.exports)) module.exports = Methodus;

Methodus.prototype.primeFactors = function(n){
	var o = [], i;
	while (n%2 == 0){
		o.push(2);
		n = n/2;
	}
	for (i=3, s=Math.sqrt(n); i<=s; i=i+2){
		while (n%i == 0){
			o.push(i);
			n = n/i;
		}
	}
	if (n > 2) o.push(n);
	return o.sort((a,b)=>a-b);
};

Methodus.prototype.allFactors = function(n){
	var factors = [1, n],
		lowestProduct = n,
		highestMultiplier;
	for(highestMultiplier = 1; lowestProduct >= highestMultiplier; highestMultiplier++){
		if(n % highestMultiplier === 0){
			lowestProduct = n / highestMultiplier;
			if(!~factors.indexOf(lowestProduct)) factors.push(lowestProduct);
			if(!~factors.indexOf(highestMultiplier)) factors.push(highestMultiplier);
		}
	}
	return factors.sort((a,b)=>a-b);
};

Methodus.prototype.count=function(array, needle) {
    var count = 0, i;
    for (i = 0; i < this.length; i++)
        if (array[i] === needle) count++;
    return count;
};

Methodus.prototype.everySubsequence = function(seq, len, funct){
	var n, i, subseq = [], e;
	for(i=0; i<seq.length; i++){
		e = Math.min(seq.length, i+len);
		for(subseq = [], n=i; n<e; n++) subseq.push(seq[n]);
		funct(i, subseq);
	}
};

Methodus.prototype.nthPrime = function(n){
	return this.getFirstNPrimes(n).pop();
};

Methodus.prototype.range = function(lowestInt, highestInt){
	var a = [], i;
	for(i=lowestInt; i<=highestInt; i++) a.push(i);
	return a;
};

Methodus.prototype.smallestCommonMultiple = function(){
	var args = Array.from(arguments),
		o = {}, 
		i, p, n, c, m;
	for(i=0; i<args.length; i++){
		p = this.primeFactors(args[i]);
		for(n=0; n<p.length; n++){
			c = this.count(p, p[n]);
			if(!o[p[n]] || c>o[p[n]]) o[p[n]]=c;
		}
	}
	var n=1;
	for(m in o){
		if(!o.hasOwnProperty(m)) continue;
		while(o[m]){
			n = n*m;
			o[m]--;
		}
	}
	return n;
};

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

Methodus.prototype.firstNPrimes = function(n){
	let primes = [2,3,5];
    const isPrime = num => {
      for(let n=0; n<primes.length; n++){
        if(num===primes[n]) return true;
        if(num%primes[n]===0) return false;
      }
      return true;
    }
    for(var i=3; primes.length<n; i++){
      if(isPrime(i)){
        if(primes.indexOf(i) === -1) primes.push(i);
      } 
    }
    return primes;
};

Methodus.prototype.generatePrimes = function(funct){
	let primes = [2,3,5];
	for(var i=0; i<primes.length; i++)
		if(false === funct(primes[i])) return;
    const isPrime = num => {
      for(let n=0; n<primes.length; n++){
        if(num===primes[n]) return true;
        if(num%primes[n]===0) return false;
      }
      return true;
    };
    for(var i=7; true; i++){
		if(isPrime(i)){
			if(primes.indexOf(i) === -1) primes.push(i);
			if(false === funct(i)) return;
		}
    }
};



Methodus.prototype.everyVerticalSubsequence = function(grid, len, funct){
	var x, y, l, a;
	for(y=0; y<grid.length; y++){
		for(x=0; x<grid[y].length; x++){
			a = [];
			for(l=0; l<len; l++)
				if(grid[y+l] && grid[y+l][x]) a.push(grid[y+l][x]);
				else break;
			funct(x, y, a);
		}
	}
};

Methodus.prototype.everyDescDiagSubsequence = function(grid, len, funct){
	var x, y, l, a;
	for(y=0; y<grid.length; y++){
		for(x=0; x<grid[y].length; x++){
			a = [];
			for(l=0; l<len; l++)
				if(grid[y+l] && grid[y+l][x+l]) a.push(grid[y+l][x+l]);
				else break;
			funct(x, y, a);
		}
	}
};

Methodus.prototype.everyAscDiagSubsequence = function(grid, len, funct){
	var x, y, l, a;
	for(y=grid.length; y--;){
		for(x=0; x<grid[y].length; x++){
			a = [];
			for(l=0; l<len; l++)
				if(grid[y-l] && grid[y-l][x+l]) a.push(grid[y-l][x+l]);
				else break;
			funct(x, y, a);
		}
	}
};

Methodus.prototype.everyLinearSubsequence = function(grid, len, funct){
	this.everyAscDiagSubsequence(grid, len, (x,y,a)=>funct(x,y,"diag asc",a));
	this.everyDescDiagSubsequence(grid, len, (x,y,a)=>funct(x,y,"diag desc",a));
	this.everyVerticalSubsequence(grid, len, (x,y,a)=>funct(x,y,"vertical",a));
	for(var y=0; y<grid.len; y++)
		this.everySubsequence(grid[i], len, (x,a)=>funct(x,y,"horiz",a));
};

Methodus.prototype.generateTriangleNumbers = function(funct){
	var t = 0, i;
	for(i=1; true; i++){
		t += i; 
		if(false === funct(i, t)) return;	
	}
};

Methodus.prototype.addInts = function(array){
	var sum = [], carry = 0, i, digits=0, colSum;
	for(i=array.length; i--;){
		array[i] = (""+array[i]).split('').reverse();
		if(array[i].length > digits) digits = array[i].length;
	}
	for(i=0; i<digits; i++){
		colSum = 0;
		for(var n=0; n<array.length; n++){
			if(array[n][i]){
				colSum += parseInt(array[n][i]);
			}
		}
		colSum += carry;
		carry = 0;
		if(colSum > 9){
			colSum = (""+colSum);
			carry = parseInt(colSum.substr(0,colSum.length-1));
			colSum = parseInt(colSum.substr(colSum.length-1));
		}
		sum.push(""+colSum)
	}
	if(carry > 0) sum.push(carry);
	return sum.reverse().join('');
};

Methodus.prototype.collatzSequence = function(n){
	var seq = [n];
	while(n>1){
		if(n%2===0) n=n/2;
		else n=n*3+1
		seq.push(n);
	}
	return seq;
};

Methodus.prototype.binomialCoefficient = function(n, k){
    var c = 1, x;
    for (x = n-k+1; x <= n; x++) c *= x;
    for (x = 1; x <= k; x++) c /= x;
    return parseInt(c);
};

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

Methodus.prototype.powInts = function(a, e){
	var p = 1, i;
	for(i=0; i<e; i++) p = this.multiplyInts(p, a);
	return p;
};

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

Methodus.prototype.maxTrianglePathSum = function(triangle){
	if(triangle.length === 1) return triangle[0][0];
	var i = triangle.length-2, // target the second to last row
		n=0;
	for(; n<triangle[i].length; n++)
		triangle[i][n] += Math.max(triangle[i+1][n], triangle[i+1][n+1]);
	triangle.pop();
	return this.maxTrianglePathSum(triangle);
};