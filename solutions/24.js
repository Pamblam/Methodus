
const M = require("../Methodus.js");
var m = new M();
console.log(m.permute(m.range(0,9),1000000).pop().join(''));