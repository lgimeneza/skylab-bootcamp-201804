"use strict";


/**
 * Count chars in text (string)
 * 
 * @example
 * 
 * var count = countChars('hello world'), function(c) { return c==="e";}); // -> 1
 * 
 * @param {string} str - The text to count the chars from.
 * @param {Function} [condition] - A condition to count chars (optional) <----- en mi ejercicio no está implementado 
 * 
 * @throws {Error} - If input text is not a string.
 * @throws {Error} - If given condition, is not a function. <----- en mi ejercicio no está implementado 
 * 
 * @returns {number} - The number of chars count in the input text.
 */

function countChars(str, condition) {
  if (typeof str === "string") {
    return str.length;
  }

  throw Error("input is not a string");
}
