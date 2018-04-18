"use strict";

var myArray = [1, 2, 3];
var myArray2 = [5, 4, 3];
var myNum = 545;
var myName = "zan";
var myConsole = function(v,i,arr){ console.log(v,i,arr)}

forEach(myArray, myConsole);

var input = [1, 2, 3];
var output = []; 

forEach(input, function(v) { output.push(v) });

console.log('forEach(input, function(v) { output.push(v) }) should fulfill output with values from input', input.toString() === output.toString(), output);


var error;
try {
    error = forEach(myName, myConsole);
} catch (err) {
    error = err;
}finally{
  console.log("toRandomCase(not an object) should launch and error", error !== undefined, error);
}

