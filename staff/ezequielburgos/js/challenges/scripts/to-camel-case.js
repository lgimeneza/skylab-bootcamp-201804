'use strict';


/**
 *Joins sentence words in a lower camel case style. 
 *
 * @example
 * 
 * var camelCaseMe = toCamelCase('hello my world') // --> helloMyWorld
 * 
 * @param {string} str - The text to change the case from.
 * 
 * @throws {Error} - If input text is not a string.
 * 
 * @returns {string} - The Text camel Cased.
 */
function toCamelCase(str) {
    if (typeof str !== 'string')
        throw Error('input str is not a string!!');

    // replace multiple white spaces for one
    str = str.replace(/  +/g, ' ');

    // create an array of words
    var arr = [];
    arr = str.split(" ");

    var newArr = [];
    newArr.push(arr[0]);
    // toUpperCase() all first letters
    for (var i = 1; i < arr.length; i++) {
        var letterArr = arr[i].split("");
        letterArr[0] = letterArr[0].toUpperCase();
        newArr.push(letterArr.join(""));
    }

    return newArr.join("");

}
