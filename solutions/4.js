
const M = require("../Methodus.js");

/**
 * Get the greatest palindrome number less than a given integer
 * @param {type} int
 * @returns {Number}
 */
function getHighestPalidromeLessThan(int){
	const reverseInt = int=>parseInt((""+int).split("").reverse().join("")),
		isIntPalindrome = int=>reverseInt(int)===int;
	for(var i=int; i--;){
		if(isIntPalindrome(i)){
			return i;
		}
	}
	return 0;
}

/**
 * Get teh largest palindrome that is the product of 2 n-digit numbers
 * @param {type} digits
 * @returns {Number}
 */
function largestPalindromeProduct(digits){
	let n = parseInt("9".repeat(digits)), pfacts, i, m, met=new M;
	for(var p=n*n+1; p=getHighestPalidromeLessThan(p);){
		pfacts = m.allFactors(p);
		for(i=pfacts.length; i--;){
			if(pfacts[i]>n) continue;
			m = p/pfacts[i];
			if(m>n) continue;
			return {
				multiplicand: pfacts[i],
				multiplier: m,
				product: p
			}
		}
	}
}

var res = largestPalindromeProduct(3),
	answer = res.product+" = "+res.multiplicand+" x "+res.multiplier;
console.log("Largest Palindromic Product of 2 Three-digit numbers is: \n\t"+answer);
