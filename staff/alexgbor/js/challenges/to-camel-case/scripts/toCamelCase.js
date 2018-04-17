'use strict';

function toCamelCase(str) {
    if (typeof str==="string" && str.length>0) {
        var res=str.split(" ");
        res[0]=res[0].toLowerCase();
        for (var i=1;i<res.length;i++) {
            res[i].toLowerCase();
            res[i][0].toUpperCase();
        }
        return res.join("");
    }
    else {
        throw Error("Enter a string.");
    }
}