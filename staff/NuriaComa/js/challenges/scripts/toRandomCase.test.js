"use strict"
console.log(">>RANDOM CASE")

var input="Hello My World"; 
test(
    function(){
        
        return toRandomCase(input);
    },
    'toRandomCase(input) should return input in random case',
    function(results){
        return input.toLowerCase() === results.toLowerCase();
        
    }
)

test (
    withErrorCapturing(function(){
        toRandomCase(true);
    }),
    "toRandomCase(true) should launch and error",
    function(results){
        return results.message ==="input is not a string";
    }
);

test (
    withErrorCapturing(function(){
        toRandomCase(1);
    }),
    "toRandomCase(1) should launch and error",
    function(results){
        return results.message ==="input is not a string";
    }
);
