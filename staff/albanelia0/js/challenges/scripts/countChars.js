'use strict'; 

/**
 * count chars in text (string)
 * @example
 * 
 * var count = countChars('hello world', function(c) { return c=== 'e'; }); // -> 1
 * 
 * @param  {string} text - The text to count the chars from.
 * @param {function} condition - A [condition] to count chars (optional).
 * 
 * @throws {Error} - If input text is not a string.
 * @throws {Error} - If given a condition, is not a function.
 * 
 * @returns {Number} - The number of chars count in the input text.
 */

function countChars(str, func) {
  if (typeof str !== 'string')
    throw Error('input str is not a string');

  if (!func) {
    return str.length;
  } else {
    if (typeof func !== 'function')
      throw Error('input func is not a function')

    var count = 0;

    for (var i = 0; i < str.length; i++) {
      var val = str[i];

      if (func(val)) count++;
    }

    return count;
  }
}



/*var result = countChars('hola', function(val) {
  if (val === 'a') {
    return true;
  } else {
    return false;
  }
});

console.log(result); */

