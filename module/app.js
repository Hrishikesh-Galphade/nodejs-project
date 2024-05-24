
a= 2 
if(a==2){
    var abc= require("./abc"); //file based module
    abc();
}
var d1 = new Date().getTime();
var def = require("./def"); //file base modules,blocking 

var obj1 = def();
console.log(obj1);

//var d2 = new Date().getTime();
//console.log(d2-d1)
// def.d();
// def.e();
// def.f();
// def.abc()
console.log(obj1.de);
obj1.de = 300
console.log(obj1.de);
var uod = require("./useofdef")

// d3 = new Date().getTime();
// var pef = require("./def");
// d4 = new Date().getTime();
// console.log(d4-d3)
// pef.d();
// pef.e();
// pef.f();
// pef.abc()
// console.log(pef.de);