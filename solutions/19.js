
// 1 Jan 1901 to 31 Dec 2000
var d = new Date(1901, 0, 1, 12, 0 ,0 ,0), s=0;
for(;d.getFullYear() < 2001; d.setDate(d.getDate()+1))
	if(d.getDay() === 0 && d.getDate() === 1) s++;
console.log(s);

