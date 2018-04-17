"use strict";

function toCamelCase(str, func){
    if(typeof str !== "string"){
        throw Error ("input is not a string")
    }
    if (!func){
        var  noSpace=str.replace(/ /g,"");
    
        var res = noSpace.charAt(0).toLowerCase() + noSpace.slice(1);
        return res

    }else {
        if (typeof func !== "function")
        throw Error ("input is not a String");
    }
}


