'use strict';
function toCamelCase(str) {
    if (typeof str !== "string")
       throw Error('input text is not a string');
       
       str=str.toLowerCase();
       var arrayWord=str.split(" ");
       for (var i=1; i<arrayWord.length; i++) {
           arrayWord[i]=arrayWord[i].replace(arrayWord[i][0], arrayWord[i][0].toUpperCase())
       }
    return   arrayWord.join(""); 
}