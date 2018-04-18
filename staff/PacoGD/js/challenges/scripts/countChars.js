'use strict';
/* Los comentarios son apuntes */

/**
 * Count chars in text (string).
 * 
 * @example 
 * 
 * var count = countChars ('Hello world', function (c) { return c ==='e'; }); // -> 1
 * 
 * @param {string} text - The text to count the charts from.
 * @param {Function} condition - A condition to count chars(optional).
 * 
 * @throws {error} - If input text is not a string.
 * @throws {error} - If given a condition is not a function.
 * 
 * @returns {number} - The number of chars count in the input text.
 */
function countChars(str) {

    if (typeof str === "string")
        return str.length

    throw Error('input is not a string')
}

function countChars(str, func) {
    //check input text is valid, must be a string
    if (typeof str !== 'string')
        throw Error('input str is not a string');

    //check condition exists, otherwise return string length
    if (!func) {
        return str.length;
    }
    // check condition is valid must be a function.
    if (typeof func !== 'function')
        throw Error('input func is not a function')

    var count = 0;

    for (var i = 0; i < str.length; i++) {
        var val = str[i];

        if (func(val)) count++;
    }

    return count;

} 