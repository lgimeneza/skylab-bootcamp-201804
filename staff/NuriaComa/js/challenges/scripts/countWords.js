"use strict";

function countWords(str, func){
    if (typeof str !=="string"){
        throw Error ('input text is not a string')
    }if(!func){
        var words= str.split(" ");
        return words.length

    }else {
        if (typeof func !== "function")
        throw Error ('input text is not a string');
    }
}