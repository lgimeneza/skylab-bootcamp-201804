'use strict'

function countChars(str,func){
    if(typeof str == "string")
        return str.length;
    
    throw Error("input is not a string");
}

