'use strict';
/**
 * Maps values from an input array into new array, operating on each of them with given handler.
 * 
 * @example
 * 
 * var input = [1,2,3];
 * 
 * map(input, function(v){return v**2; }) // -> [1,4,9]
 * 
 *  
 * @param {Array} - The input array.
 * @param {Function} - The handler function that operates on each value of the input array.
 * 
 * @throws {Error} - If input array and/or handler is not valid.
 * 
 * @returns {Array} - The resulting array, after operating on each value of the input array.
 */
function map(arr, handler) {
    if (!(arr instanceof Array)) throw Error('input array is not valid');
    if (!(handler instanceof Function)) throw Error('input function is not valid');
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        res.push(handler(arr[i]));
    }
    return res;
}