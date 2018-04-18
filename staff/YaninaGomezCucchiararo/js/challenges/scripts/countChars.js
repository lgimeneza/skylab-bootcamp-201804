'use strict';

/**DOCUMENTACION
 * 
 * count chars in text (string).
 * @example
 * 
 * var count = countChars('Hello world', function(c) { return c === 'e'}) // -> 1.
 * 
 * @param {string} text - the text to count the chars from.
 * @param {function} [condition] - A condition to count chats (opcional).
 * 
 * @returns {number} - the number of chars count in the input text.
 * 
 * @throws {Error} - if input text is not a string.
 * @throws {Error} - if given a condition, is not a function.
 */


function countChars(str, func) {

    // check input text is valid, must be a string
    if (typeof str !== 'string') {
        throw Error('input is not a string');
    }

    // check condition exists,otherwise return string length
    if (!func) {


        return str.length;

    } else {

        if (typeof func !== 'function')
            throw Error('input func is not a function');

        var count = 0;

        for (var i = 0; i < str.lenght; i++) {
            var val = str[i];

            if (func(val)) count++;
        }

        return count;
    }
}
