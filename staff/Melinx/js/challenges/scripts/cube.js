// cube
// create a function that calculates the cube of a given numeric input. input can be a singular number, or an array of numbers.

// demos:

// cube(2); // -> 8
// cube(3); // -> 27
// cube([1, 2, 3]); // -> [1, 8, 27]

'use strict';

/**
 * Calculates the cobe of a number or of each item in an array of numbers.
 * 
 * @example
 * var res = cube(3); // -> 27
 * var res = cube([1,2,3]); // -> [1,8,27]
 * 
 * @param {mumber | number[]} num 
 * 
 * @throws {Error} -  If imput number or array of numbers is not valid.
 * 
 * @returns {number | number[]} - the cube of the input number or array of nums.
 * 
 */

function cube(num) {
    if (typeof num === 'number') return num ** 3;
    if (!(num instanceof Array)) throw Error('input num is not an array of numbers');
    for (var i = 0; i < num.length; i++) {
        if (typeof num[i] !== 'number') throw Error('input in array is not a number at index ' + i);
    }
    var res = [];
    for (var i = 0; i < num.length; i++) {
        var val = num[i]; // declare val to avoid num[i] **3;
        res[i] = val ** 3;
    }
    return res;

}