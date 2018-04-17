function toCamelCase(str){
    if (typeof str !== "string") throw Error("Write a valid string on input.")
    var camel = str.split(" ");
    var conc = [];

    for (var i = 0; i < camel.length; i++){
        var camelIdx = camel[i];
        if (i === 0) {
            conc.push(camelIdx.charAt(0).toLowerCase() + camelIdx.slice(1));
        } else {
            conc.push(camelIdx.charAt(0).toUpperCase() + camelIdx.slice(1));
        }
    }
    
    return conc.join("");
}

"use strict"