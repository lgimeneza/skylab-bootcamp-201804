'use strict';

function countChars(str){

    if (typeof str !== 'string')
        throw Error('input str is not a string');

    return str.length;

}