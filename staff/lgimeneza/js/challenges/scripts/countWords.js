'use strict';

function countWords(str){

    if (typeof str == 'string'){
        return str.split(' ').length;
    }

    throw Error('input is not a string');

}