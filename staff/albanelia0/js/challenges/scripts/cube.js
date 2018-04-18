'use strict';

/**
 * calculate the cube of an input number, or array of numbers.
 * 
 * @example 
 * var res = cube(3); // -> 27
 * 
 * var res = cube([1,2,3]); // [1,8,27]
 * 
 * @param {number | number[]} num - The input number or array of number. 
 * 
 * @throws {Error} If input number or array of number is not valid.
 * 
 * @returns {number | number[]} - The cube of the input number or array of numbers.
 */

function cube(number) {

  if (typeof number === 'number') {
    return number ** 3;
  }
  if (!(number instanceof Array))
    throw Error('input number is not a number, neither an array');

  var res = [];

  for (var i = 0; i < array.length; i++) {
    var val = number[i];
    res[i] = val ** 3;
  }
  return res;


  // var result = number.map(function(v) {
  //   return Math.pow(v, 3);
  // });
  // return result;
}