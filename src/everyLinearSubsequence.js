
Methodus.prototype.everyLinearSubsequence = function(grid, len, funct){
	this.everyAscDiagSubsequence(grid, len, (x,y,a)=>funct(x,y,"diag asc",a));
	this.everyDescDiagSubsequence(grid, len, (x,y,a)=>funct(x,y,"diag desc",a));
	this.everyVerticalSubsequence(grid, len, (x,y,a)=>funct(x,y,"vertical",a));
	for(var y=0; y<grid.len; y++)
		this.everySubsequence(grid[i], len, (x,a)=>funct(x,y,"horiz",a));
};