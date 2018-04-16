'use strict';

function countWords(str) {
    if (typeof str=="string" && str.length>0) {
        var counter=1;
        for (var i=0;i<str.length;i++) {
            if (str[i]===" ") {
                counter+=1;
            }
        }
    return counter;
    }
    else {
        throw Error("You must input a string.");
    }
}