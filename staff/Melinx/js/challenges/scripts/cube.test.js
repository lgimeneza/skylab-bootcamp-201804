'use strict';

var res = cube(3);

console.log('cube(3) should return 27', res === 27, res);

res = cube([1, 2, 3]);

console.log('cube([1,2,3]) should return ([1,8,27])', res.toString() === [1, 8, 27].toString, res);

var error;

try {
    cube('');
} catch (err) {
    error = err;
} finally {
    console.log("'cube('')' should thow an error", error !== undefined, error);
}


// REUSABILITY of code. We create a function to test so we don't have to repeat all try-catch structure.

//pasamos function como parametro, de momento es una funcion anonima, Cube() no se ejecuta dentro, solo se declara. 'error message es el segundo parametro de la funcion
testThrowError(function() { 
    cube(true);
}, 'error message'); 

function testThrowError(testCase, message) {
    var error;
    try {
        testCase()
    } catch (err) {
        error = err;
    } finally {
        console.log(message, error !== undefined, error);
    }

}

