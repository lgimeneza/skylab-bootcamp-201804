"use strict";

/**
 * Count words in a sentence(string).
 * 
 * @example
 * 
 * var count = countWords("Hello World"); //-> 2
 * 
 * @param {string} str - The text to count the words from.
 * 
 * @throws {Error} - If input str is not a string.
 * 
 * @returns {number} - The number of words counted in the input str. 
 */

function countWords(str){
    if (typeof str !== "string") throw Error ("Input str is not a string");
    
    return str.split(" ").length; 
}