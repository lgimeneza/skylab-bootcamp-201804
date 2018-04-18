'use strict';


/**
 * Count chars in text (string).
 * 
 * @example
 * 
 * var count = countChars('hello World', function(c){return c === 'e';}); // -> 1
 * 
 * @param {string} text - The text that we want to count the chars from.
 * @param {Function} [condition] - A condition to count the chars(optional).
 * 
 * @throws {Error} - If input text is not a string.
 * @throws {Error} - If given a condition, is not a function.
 * 
 * @returns {number} - The number of chars count in the input text.
 */
function countChars(text, condition) {
    // check if input text is valid
    if (typeof text !== 'string')
        throw Error('input str is not a string');

    // check if input text is valid
    if (!condition) {
        return text.length;
    }
    // check if condition is valid
    if (typeof condition !== 'function')
        throw Error('input func is not a function');

    var count = 0;

    for (var i = 0; i < text.length; i++) {
        var val = text[i];

        if (condition(val)) count++;
    }

    return count;
}