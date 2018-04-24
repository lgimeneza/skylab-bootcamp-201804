'use strict';


/**
 * Calculate cube of an input number or array of number
 * 
 * @example
 * var cubeNumber = cube(3); // -> 27
 * 
 * var cuberArray = cube([1,2,3]) // -> [1,8,27]
 * 
 * @param { number | number[] } value  - The input number of array of numbers.  
 * 
 * @throws {Error} - If input is not a number o array of numbers it is not valid. 
 * 
 * @returns { number | number[] } - The cube of input number or array of numbers. 
 */

function cube(value) {

    if (typeof (value) == 'number') 
        return Math.pow(value, 3);  

    if( !(value instanceof Array) )
        throw Error('input value is not a number, neither an array')

    var arrayCube = [];

    for (var i = 0; i < value.length; i++) {

        if(typeof value[i] !== "number")
        throw Error("input array is not a number at index"+ i);  

        var val = value[i]
        arrayCube[i]=(val**3);
    }

    return arrayCube;
    
}

