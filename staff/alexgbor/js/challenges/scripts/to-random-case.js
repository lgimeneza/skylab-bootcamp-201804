'use strict';

function toRandomCase(str) {
    if (typeof str==="string") {
        var newstr="";
        var randomnumber;
        for (var i=0;i<str.length;i++) {
            randomnumber=Math.round(Math.random());
            if (randomnumber===0) {
                newstr+=str[i].toLowerCase();
            }
            else {
                newstr+=str[i].toUpperCase();
            }
        }
        return newstr;
    } else {
        throw Error("Input a string");
    }
}