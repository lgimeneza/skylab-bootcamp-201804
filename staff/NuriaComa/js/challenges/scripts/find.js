"use strict"

/**
 * The first element of the array that mtches the condition
 * 
 * @example
 * 
 * var input=["john", "mary", "jack"];
 * find(input, function(v){ return v.indexOf("a")>-1})
 * 
 * @param {Array} arr - The input array to find elements from
 * @param {Function} condition - The condition to match when seeking to the elements in the array.
 * 
 * 
 * @returns {*} -The first element of the array that mtches the condition
 */
function find(arr, condition) {
    if(!(arr instanceof Array)) {
        throw Error ("input array is not valid");
    }
    if(!(condition instanceof Function)) {
        throw Error ("input condition is not valid");
    }

	for (var i=0; i < arr.length; i++) {
        var val = arr[i]

		if (condition(val)) return val
    }
}