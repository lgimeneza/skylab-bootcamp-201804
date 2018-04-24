'use strict'

function countWords(str){
    if (typeof str !== 'string')
    throw Error('input str is not a string');


    var myArray = [];
    myArray = str.split(" ");
    
    return myArray.length;
}

