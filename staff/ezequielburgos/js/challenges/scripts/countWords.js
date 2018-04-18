'use strict';

/**
 * 
 * Count words in a text (string).
 * 
 * @example
 * 
 * var count = countWords('hello world) // -> 2
 * 
 * @param {string} text 
 * @param {function} condition 
 * 
 * @throws {Error} - If input text is not a string.
 * 
 * @returns {number} - The number of words in the input text.
 */
function countWords(text) {
    if (typeof text !== 'string')
        throw Error('input text is not a string');

    return text.split(" ").length;

}