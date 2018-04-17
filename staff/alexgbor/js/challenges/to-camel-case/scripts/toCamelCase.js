'use strict'

function toCamelCase(str) {
    if (typeof str==="string" && str.length>0) {
        var res=[];
        for (var i=0;i<str.length;i++) {
            if (str[i]!=" ") {
                res.push(str[i]);
            }
        }
        res[0]=res[0].toLowerCase();
        for (i=1;i<res.length;i++) {
            res[i].toLowerCase();
            res[i][0].toUpperCase();
        }
        return res.join("");
    }
    else {
        throw Error("Enter a string.");
    }
}