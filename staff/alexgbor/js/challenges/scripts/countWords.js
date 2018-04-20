'use strict';

function countWords(str) {
    if (typeof str==="string") {
        var newarr=str.split(" ");
        return newarr.length;
    }
    else {
        throw Error("You must input a string.");
    }
}