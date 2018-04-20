'use strict';

/**
 * Transforms each element of a given array with the handler function
 * and returns a new array with the transformed data
 *
 * @example
 *
 * var map(['mikel', 'juan'])(function(v) { return v.toUpperCase() }); // -> ['MIKEL', 'JUAN']
 *
 * @param {Array} arr - Array to iterate
 * @param {Function} handler - Function to transform data in the array
 *
 * @returns {Array} - New array with each item transformed with the handler function
 */
function map(arr) {
    if (!(arr instanceof Array)) throw Error('Input arr should be an array');

    var newArr = [];

    return function(handler) {
        if (typeof handler !== 'function')
            throw Error('Input handler should be a function');

        for (var i = 0; i < arr.length; i++) {
            newArr.push(handler(arr[i]));
        }

        return newArr;
    };
}
