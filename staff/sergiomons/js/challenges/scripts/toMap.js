'use strict';

/**
 * Show the new array with the operation performed.
 * 
 * @example
 * 
 * var input = [2, 4, 6].
 * toMap(input, 2) // -> [4,8,12].
 * 
 * @param {array} array - The array on which it operate.
 * @param {number} numMult - The number with which the operation is performed.
 * 
 * @throws {Error} - If input array is not an array.
 * @throws {Error} - If input numMult is not a number.
 * 
 * @returns {array} - The new array with the operation performed.
 */

  function toMap(array, numMult) {
    if (typeof array !== 'object' || !array instanceof Array) throw Error('input array is not an array');
    if (typeof numMult !== 'number') throw Error('input numMult is not a number');
      var newArray= [];
      
     for (var i=0; i < array.length; i++) {
          newArray.push(array[i]*numMult)
     }
     return newArray;
  }
