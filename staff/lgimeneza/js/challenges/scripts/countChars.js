'use strict';

/**
 * Count chars in text (string).
 * 
 * @example
 * 
 * var count = countChars('hello world');
 * 
 * @param {string} str - The text to count the chars from. 
 * 
 * @throws {Error} - If input text is not a string.
 * 
 * @returns {number} - The number of chars count in the input text.
 */
function countChars(str){
    // check input text is valid, must be a string.
    if (typeof str !== 'string')
        throw Error('input str is not a string');

    return str.length;

}