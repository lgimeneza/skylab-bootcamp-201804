'use strict';

/**
 * @example
 * var input = ['john', 'mary', 'jack'];
 * 
 * find(input, function(v) {return v.indexOf(....)}
 * 
 * 
 * @param {Arr} arr - The input array to find elements from.
 * @param {Function} condition - The condition to match when seeking for elements in the array.
 * 
 * @returns {*} - The first element from the input array that matches the condition.
 * 
 */

 function find (arr, condition) {
     if (!(arr instanceof Array)){
         throw Error ('input array is not valid');
     }

     if(!(condition instanceof Function)){
         throw Error ('input condition is not valid');
     }

     for (var i= 0; i < arr.length; i++){
         val var = arr[i];

         if (condition(val)){
             return val;
         }
     }
 }