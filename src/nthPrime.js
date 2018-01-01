
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