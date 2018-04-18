'use strict';
/**
 * Calculates the cube of an input number, or array of number.
 * 
 * @example 
 * 
 * var result = cube(3); // -> 27
 * 
 * var result = cube([1,2,3]); // -> [1,8,27]
 * 
 * @param {number| number[]} num - The input number or array of number.
 * 
 * @throws {error} - If input number or array of number is not valid.
 * 
 * @returns {number|number[]} - The cube of the input number or array of number.
 */
function cube(num) {
    if (typeof num === 'number')  return num ** 3;
    
    if (typeof num !== 'object'||!(num instanceof Array) ) throw Error('input is not a number, neither an array');

    for (var i = 0; i< num.length;i++){

        if(typeof num[i] !== 'number') throw Error ('input array is not a number at index'+i);

    }
    var res =[];
    for (var i = 0;i < num.length;i++){
        var val = num[i];
        res [i]= val ** 3;
    }
    return res;

}