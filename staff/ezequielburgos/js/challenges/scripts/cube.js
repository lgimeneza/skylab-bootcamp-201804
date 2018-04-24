'use strict';

/**
 * Calculates the cube of an input number, or array of numbers.
 * 
 * @example
 * 
 * var res = cube(3); // -> 27
 * 
 * var res = cube([1, 2, 3]); // -> [1, 8, 27]
 * 
 * @param {number | number[]} num - The input number or array of numbers.
 * 
 * @throws {Error} - If input number or array of numbers is not valid.
 * 
 * @returns {number | number[]} - The cube of the input number or array of numbers. 
 */
function cube(num) {
    // returns the cube of the number:
    if (typeof num === 'number') return num ** 3;
    
    // throws error if its not an array or number
    if (!(num instanceof Array)) throw Error('input num is not a number, neither an array');
    
    // throws error if any of the array elements is not a number
    for (var i = 0; i < num.length; i++) {
        if (typeof num[i] !== 'number') throw Error('input array is not a number at index ' + i);
    }

    // new array where we'll introduce the cube of each array element:
    var res = [];

    // executes the cube of the array:
    for (var i = 0; i < num.length; i++) {
        // we equate the variable "val" with each array iteration to make the the program more efficient
        var val = num[i];
        res[i] = val ** 3;
    }

    // returns the cube of the array:
    return res;
}