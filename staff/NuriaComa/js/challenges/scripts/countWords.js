"use strict";

function countWords(str, func){
    if (typeof str !=="string"){
        throw Error ("input is not a string")
    }if(!func){
        var words= str.split(" ");
        return words.length

    }else {
        if (typeof func !== "function")
        throw Error ("input is not a String");
    }
}