module.exports = function(grunt) {
	
	var pkg = grunt.file.readJSON('package.json');
	pkg.version = pkg.version.split(".");
	var subversion = pkg.version.pop();
	subversion++;
	pkg.version.push(subversion);
	pkg.version = pkg.version.join(".");
	grunt.file.write('package.json', JSON.stringify(pkg, null, 2));
	
	console.log("---------------------------------------");
	console.log("  Building Methodus Version "+pkg.version);
	console.log("---------------------------------------");
	
	grunt.initConfig({
		pkg: pkg,
		concat: {
			options: {
				banner: '/**\n * <%= pkg.name %> - v<%= pkg.version %>' +
						'\n * <%= pkg.description %>' +
						'\n * @author <%= pkg.author %>' +
						'\n */\n\n'
			},
			dist: {
				src: [
					'src/constructor.js', 
					'src/primeFactors.js', 
					'src/allFactors.js',
					'src/count.js',
					'src/everySubsequence.js',
					'src/nthPrime.js',
					'src/range.js',
					'src/smallestCommonMultiple.js',
					'src/pythagoreanTripletFromCircumference.js',
					'src/greatestCommonDivisor.js',
					'src/firstNPrimes.js',
					'src/generatePrimes.js',
					'src/everyVerticalSubsequence.js',
					'src/everyDescDiagSubsequence.js',
					'src/everyAscDiagSubsequence.js',
					'src/everyLinearSubsequence.js',
					'src/generateTriangleNumbers.js',
					'src/addInts.js',
					'src/collatzSequence.js',
					'src/binomialCoefficient.js',
					'src/multiplyInts.js',
					'src/powInts.js',
					'src/numToEnglish.js',
					'src/maxTrianglePathSum.js',
					'src/factorial.js',
					'src/isAbundant.js',
					'src/permute.js',
					'src/fibonacci.js',
					'src/divideInts.js'
				],
				dest: 'Methodus.js',
			},
		},
		'string-replace': {
			source: {
				files: {
					"Methodus.js": "Methodus.js"
				},
				options: {
					replacements: [{
						pattern: /{{ VERSION }}/g,
						replacement: '<%= pkg.version %>'
					}]
				}
			},
			readme: {
				files: {
					"README.md": "README.md"
				},
				options: {
					replacements: [{
						pattern: /\d+.\d+.\d+/g,
						replacement: '<%= pkg.version %>'
					}]
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-string-replace');
	
	grunt.registerTask('default', [
		'concat',
		'string-replace'
	]);
	
};