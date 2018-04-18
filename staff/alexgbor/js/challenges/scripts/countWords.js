'use strict';

function countWords(str) {
    if (typeof str=="string" && str.length>0) {
        var newarr=str.split(" ");
        return newarr.length;
    }
    else {
        throw Error("You must input a string.");
    }
}