"use strict";

function countChars(str, func){
    if (typeof str !== "string")  // només funcioni amb strings
    throw Error ("input is not a String");

    if (!func){

        return str.length;
    
        
    }else {
        if (typeof func !== "function")
        throw Error ("input is not a String");

        var count=0;

        for (var i=0; i<str.length; i++){
            var val=str[i]

            if(func(val)) count ++;
        }
        return count;
    }
    
}