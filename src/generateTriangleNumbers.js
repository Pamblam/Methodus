
Methodus.prototype.generateTriangleNumbers = function(funct){
	var t = 0, i;
	for(i=1; true; i++){
		t += i; 
		if(false === funct(i, t)) return;	
	}
};