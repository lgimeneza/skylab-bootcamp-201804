"use strict"
console.log(">>FOREACH")

var a=[1,2,3]

console.log(forEach(a, function(v) { console.log(v) }));
console.log(forEach(a, function(v, i) { console.log(v, i) }));
console.log(forEach(a, function(v, i, arr) { console.log(v, i, arr) }));

