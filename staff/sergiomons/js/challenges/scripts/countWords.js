'use strict';

function countWords(str) {
    if (typeof str !== "string") {
        throw Error("input text is not a string")
    }
       var arrayWords = str.split(" ");
    return   arrayWords.length 
}