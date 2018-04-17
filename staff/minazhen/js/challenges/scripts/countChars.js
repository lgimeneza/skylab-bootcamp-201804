function countChars(str){
    if (typeof str === "string") {
        return str.length; 
    }
    throw Error ("input is not a string");
}

"use strict"