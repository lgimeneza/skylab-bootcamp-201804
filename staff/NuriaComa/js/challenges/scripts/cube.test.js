"use strict"
console.log(">>CUBE")

//array
var resultado = cube([2,3,4]);
console.log('cube([2,3,4]) should return [8, 27, 64]', resultado.toString() === [8, 27, 64].tostring, resultado);


//un número
var resultado = cube(2);
console.log('cube(2) should return 8', resultado ===8, resultado);



var error=undefined;
try{
    count = cube(true);
} catch (err) {
    error=err;}
    finally{    //assegurar-te que passa per aquí.
        console.log("cube(true) should launch and error", error !==undefined, error);
    }

    
try{
    count = cube("1");
} catch (err) {
    error=err;}
    finally{    //assegurar-te que passa per aquí.
        console.log("cube(1) should launch and error", error !==undefined, error);
    }