
Methodus.prototype.maxTrianglePathSum = function(triangle){
	if(triangle.length === 1) return triangle[0][0];
	var i = triangle.length-2, // target the second to last row
		n=0;
	for(; n<triangle[i].length; n++)
		triangle[i][n] += Math.max(triangle[i+1][n], triangle[i+1][n+1]);
	triangle.pop();
	return this.maxTrianglePathSum(triangle);
};