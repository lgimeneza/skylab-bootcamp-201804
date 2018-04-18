'use strict';

/**
 * Count chars in text (string).
 * 
 * @example
 * 
 * var count = countChars('hello world', function(c)) { return c === 'e';}); // --> 1
 * 
 * @param {*} str - should be the input text to count chars from
 * @param {*} condition - a condition to count chars, optional!
 * 
 * 
 * @returns {number} - The num of chars count in the text input. 
 * 
 */

function countChars(str, condition) {
    if (typeof str !== 'string'){
        throw Error('input str is not a string');
}
    if (!condition) {
        return str.length;
    } else {
        if (typeof condition !== 'function')
            throw Error('input func is not a function')

        var count = 0;

        for (var i = 0; i < str.length; i++) {
            var val = str[i];
        }

        if (condition(val)) count++;
    }

    return count;
}
