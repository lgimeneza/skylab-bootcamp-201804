'use strict';

var input = [1, 2, 3];
var output=[];


test(function(){
     foreach(input,
    function(value){
        output.push(value);
    });
},
"forEach(input, function(elem, i, input) { console.log(elem, i, input) }) should fulfill output with values from input",
function(result){

    return result = input.toString() === output.toString();
    
});


test(withErrorCapturing(function(){
    foreach();
}),
"forEach() without arguments should throw an error",
function(result){
   return result.message === "input arr is not an array";
   
});

test(withErrorCapturing(function(){
    foreach(undefined,
    function(elem,i,input){
        output.push(v);
    });
}),
'forEach(undefined, function(elem, i, input) { output.push(v) }) without first argument should throw an error',
function(result){
   return result.message === "input arr is not an array";
   
});


test(withErrorCapturing(function(){
    foreach(input);
}),
'forEach(input) without second argument should throw an error',
function(result){
    return result.message === 'input handler is not a function';
   
});


