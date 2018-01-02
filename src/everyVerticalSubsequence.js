
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