'use strict';

/**
 * 
 * Calculates the cube of an input number, or array of numbers.
 * 
 * @example
 * 
 * var res = cube(3); // -> 27
 * 
 * var res = cube([1,2,3]); // -> [1,8,27]
 * 
 * @param {number | Number[]} num - The input number or array of numbers. 
 * 
 * @throws {Error} - If input number or array of numbers is not valid.
 * 
 * @returns {number | number[]} - The cube of the input number or array of numbers.
 * 
 */
function cube(num){

    if (!check(num)){
        throw Error('Input not valid');
    } 

    if (typeof num === 'number') {
        return Math.pow(num, 3);
    } else {
        var result = [];
        for (var i = 0; i < num.length; i++){
            result.push(Math.pow(num[i], 3));
        }
        return result;
    }
}

function check(num){

    if (typeof num === 'number') return true;

    // Other option -> num instanceof Array
    if (Array.isArray(num)) {
        for (var i = 0; i < num.length; i++){
            if (typeof num[i] !== 'number') return false;
        }
        return true;
    }

    return false;
}