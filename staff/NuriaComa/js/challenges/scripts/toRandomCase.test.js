"use strict"

console.log(">>MAYÚSCULAS ALEATORIAS")

var input="Hello My World";

var output = toRandomCase(input);

input.toLowerCase() === output.toLowerCase();
input!==output;


console.log('toRandomCase(input) should return input in random case', input.toLowerCase===output.toLowerCase, output);


var error=undefined;

try{
    count = toRandomCase(true);
} catch (err) {
    error=err;}
    finally{    //assegurar-te que passa per aquí.
        console.log("toRandomCase(true) should launch and error", error !==undefined, error);
    }
        

    // con un número
    
try{
    count = toRandomCase(1);
} catch (err) {
    error=err;}
    finally{    //assegurar-te que passa per aquí.
        console.log('toRandomCase(1) should launch and error', error !==undefined, error);
    }

