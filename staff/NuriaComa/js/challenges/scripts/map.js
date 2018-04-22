"use strict"

/**
 * Map values from an input array into a new array, operating on each of them with the given.
 * 
 * @example
 * 
 * var input = [1,2,3];
 * map (input, function(v) {return v**2;}); // ->  [1,4,9]
 * 
 * @param {Array} Arr - The input array.
 * @param {function} Handler - The handler function that operates on each value of the input array.
 * 
 * @throws {Error} - if input array and/or handler is not vaild.
 * 
 * @returns {Array} - The resulting array, after operating on each value of the input array.
 * 
 */


function map(arr, handler){
     if (!(arr instanceof Array)){
        throw Error ("input array is not valid")
     };
     if (!(handler instanceof Function)){
        throw Error ("input handler is not valid")
     };

     var result=[];

     for (var i=0;i<arr.length; i++){
         result.push(handler(arr[i]));
     }

        return result
}