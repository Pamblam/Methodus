/**
 * Methodus - v1.0.15
 * A Math Library inspired by Project Euler
 * @author Pamblam
 */

function Methodus(){
	this.version = "1.0.15";
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
	var a = seq.split(''), n, i, subseq = [], e;
	for(i=0; i<a.length; i++){
		e = Math.min(a.length, i+len);
		for(subseq = [], n=i; n<e; n++) subseq.push(a[n]);
		funct(i, subseq);
	}
};

Methodus.prototype.nthPrime = function(n){
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
    return primes.pop();
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