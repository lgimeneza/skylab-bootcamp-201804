'use strict';

/**
 * 
 * FIND:
 * 
 * REturns the first element from an array that matches a given condition.
 * 
 * 
 * @example - 
 * 
 * var input = ["john", "mary", "jack"];
 * 
 * find(input, function(v) {return v.indexOf('a) > -1;}); // --> 'mary'
 * 
 * @param {Array} arr - the input array to find elements from.
 * 
 * @param {Function} condition - the condition to match when seeking for elements in the array.
 * 
 * @returns {*} - the first item in the array that matches the condition, otherwise returns undefined.
 * 
 */


 function find(arr, condition) {

    if (!(arr instanceof Array)) throw Error ('input array is not valid');

    if (!(handler instanceof Function)) throw Error ('handler is not valid');
    
    for (var i = 0;  i<arr.length; i++) {
        var val = arr[i];
        if (condition(val)) return val;
    }

 }