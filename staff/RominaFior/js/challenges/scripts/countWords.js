'use strict'

function countWords(str) {
    if (typeof str !== 'string')
        throw Error('input str is not a string');
    
    return str.split(" ").length;
}