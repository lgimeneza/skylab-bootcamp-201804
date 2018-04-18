"use strict";

/**
 * Count Chars in text (string).
 * 
 * @example
 * 
 * var count=countChars("hello world", function(c) {return c==="e";});// -> 1.
 * 
 * @param {String} txt - The text to count the chars form.
 * @param {function} [condiction] -A condition to count chars (optional).
 * 
 * @throws {Error} -If input text is not a String
 * @throws {Error} -If given condition is not a String.
 * 
 * @returns {numbers} -The number of chars count in the input text.
 */


function countChars(txt, condiction){
    //check input text is valid, must be a string
    if (typeof txt !== "string")
    throw Error ("input is not a String");

        //check condition exist, otherwise return string length
    if (!condiction){

        return txt.length;
    
        
    }else {
        //check condition is valid, must be a function.
        if (typeof condiction !== "function")
        throw Error ("input is not a String");

        var count=0;

        for (var i=0; i<txt.length; i++){
            var val=txt[i]

            if(condiction(val)) count ++;
        }
        return count;
    }
}