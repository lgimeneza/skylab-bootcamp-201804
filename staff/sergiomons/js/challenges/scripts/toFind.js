'use strict';

/**
 * Show the first number that meets the condition.
 * 
 * @example
 * 
 * var input = [2, 4, 6, 8, 10].
 * toFind(input, 5) // -> 6
 * 
 * @param {array} array - the array on which it search.
 * @param {number} numCondition - A numeral condition to find the object.
 * 
 * @throws {Error} - If input array is not an array.
 * @throws {Error} - If input numCondition is not a number.
 * 
 * @returns {number} - The first number that meets the condition.
 */
function toFind(array, numCondition) {

    if (typeof array !== 'object' || !array instanceof Array) throw Error('input array is not an array');
    if (typeof numCondition !== 'number') throw Error('input numCondition is not a number');
    var res;
    for (var i=0; i<array.length; i++) {
        if (array[i]>numCondition) {
          res = array[i]
          break;
        }
    }
    return res;
}