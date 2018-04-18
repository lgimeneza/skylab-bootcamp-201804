'use strict';

/**
 * Returns the cube of a given number or array of numbers
 *
 * @example
 *
 * var res = cube(2) // -> 8
 * var res2 = cube([2, 3]) // -> 8, 27
 *
 * @param {number|number[]} numbers
 *
 * @return {string} - Comma separated string with the cubes of the given numbers
 */
function cube(numbers) {
    return numbers
        .toString()
        .split(',')
        .map(n => parseInt(Math.pow(n, 3)))
        .join(', ');
}

try {
    var res = cube([2, "3", false]);
    console.log(res);
} catch (error) {
    console.log(error);
}
