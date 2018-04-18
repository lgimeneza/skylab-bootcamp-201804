'use strict';
/**
 * Count chars i test (string).
 * 
 * @example var count = countChars('hello world', fucntion(c) {return c === 'e';}); // => 1.
 * 
 * @param {string} str - The text is a string.
 * @param {function} [func] - A func to count chars (optional).
 * 
 * @throws {Error} - If input text is not a string.
 * @throws {Error} - If given a condition, is not a function.
 * 
 * @returns {number} - The number of chars count in the input.
 */

function countChars(str, func) {
    if (typeof str !== 'string')
        throw Error('input str is not a string');

    if (!func) {
            return str.length;
    } else {
        if (typeof func !== 'function')
            throw Error('input func is not a function');

        var count = 0;
        
        for (var i = 0; i < str.length; i++) {
            var val = str[i];

            if (func(val)) count++;
        }

        return count;
    }
} 
