"use strict"

function toCamelCase(str){
    var cc = str.split(" ");
    var conc = [];

    for (var i = 0; i < cc.length; i++){
        if (i === 0) {
            conc.push(cc[i].charAt(0).toLowerCase() + cc[i].slice(1));
        } else {
            conc.push(cc[i].charAt(0).toUpperCase() + cc[i].slice(1));
        }
    }
    

    return conc.join("");
}