'use strict'

/**
 * Returns the first element from input array that satisfies a given condition
 * 
 * @example
 * 
 * var input = ['john', 'mary', 'jack'];
 * 
 * 
 * @param {Array} arr - The input array to find elements from.
 * @param {Function} condition - The condition to match when seeking for elements in the array.
 * 
 * @returns {*} - The first element from the input array that matches the condition, otherwise returns undefined.
 */
function find(arr, condition){
    if (!(arr instanceof Array)) throw Error('input array is not valid');

    if (!(condition instanceof Function)) throw Error('input condition is not valid');

    for (let i = 0; i < arr.length; i++) {
        var val = arr[i];
       
        if (condition(val)) return val;
        
    }
}