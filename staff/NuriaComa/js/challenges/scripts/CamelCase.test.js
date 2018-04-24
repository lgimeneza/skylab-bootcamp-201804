"use strict"
console.log(">>CAMEL CASE")

test(
    function(){
        return toCamelCase("Hello My World");
    },
    'toCamelCase("Hello My World") should return helloMyWorld',
    function(result){
        return result==="helloMyWorld";
    }
);

test(
    withErrorCapturing(function() {
        toCamelCase(true);
    }),
    "toCamelCase(true) should launch and error",
    function(result){
        return result.message === "input is not a string";
    }
);

test(
    withErrorCapturing(function() {
        toCamelCase(1);
    }),
    "toCamelCase(1) should launch and error",
    function(result){
        return result.message === "input is not a string";
    }
);
