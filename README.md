
## Methodus.js

**Version 1.0.20** | [NPM](https://www.npmjs.com/package/methodus) | [Github](https://github.com/Pamblam/Methodus)

Named after Euler's work which includes 100 problems that Euler considers to illustrate his methods, and was, in all likelihood, part of the inspiration for Project Euler. Thus, the library is an arbitrary list of mathematical algorithms and helper functions that are useful for, among other things, solving the Project Euler problems.

<center>
 
![enter image description here](https://i.imgur.com/GmQbuBT.jpg)

</center>

<hr>

## Usage

Create a new instance with `const m = new Methodus`. The constructor does not accept any arguments.

## Methods

 - **`m.allFactors(123)`** Will return an array of all factors of `123` both prime and composite.
 - **`m.count(myArray, 4)`** Will return an integer representing the number of times `4` occurs in `myArray`.
 - **`m.everySubsequence(seq, 4, funct)`** Will execute `funct` for every `4` char subsequence in the string `seq`, passing the starting index of the current sequence and `4` char subsequence as an array to `funct`.
 - **`m.nthPrime(8)`** Will return the `8`th Prime number.
 - **`m.primeFactors(1233)`** Will return n array containing the prime factorization of `1233`.
 - **`m.range(3,78)`** Will return an array of numbers ranging from `3` to `78`
 - **`m.smallestCommonMultiple(123, 32, 12, 32)`** Will return the smallest common multiple of all the arguments passed to it. You can pass as many arguments as you need.
 - **`m.greatestCommonDivisor(123,1232)`** Will return the greatest common divisor of the two numbers passed to it.
 - **`m.pythagoreanTripletFromCircumference(1000)`** Will generate a Pythagorean triplet for a triangle whose circumference is 1000.