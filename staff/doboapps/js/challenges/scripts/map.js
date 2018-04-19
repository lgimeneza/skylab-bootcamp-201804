'use strict';


/**
 * Maps values from an input array into a new array, operating on each of them with the given hanlder.
 *
 * @example
 * 
 * var input = [1,2,3];
 * 
 * map(input, function(element){return element**2;}); // -> [1,4,9]
 * 
 * @param {Array} - The input array.
 * @param {Function} condition - The condition function that operates on each value of the input array. 
 * 
 * @throws {Error} IF input arr and/or handler is not valid.
 * 
 * @returns {Array} - The resulting new array, after operating on each value of the input array.
 * 
 * 
 */

function map(arr, condition){

    if ( !(arr instanceof Array)) throw Error('input arr is not an array');

    if (typeof condition !== 'function' || !arr instanceof Array) throw Error('input handler is not a function');

    var newArray =[];

    var iterate = function(index){
    
        if(condition(arr[index]))
        newArray.push(arr[index]);

        if(++index < arr.length)
            iterate(index);
    };

    iterate(0);

    return newArray;
}