"use strict";

function countChars(txt, condiction){
    if (typeof txt !== "string")  // només funcioni amb strings
    throw Error ("input is not a String");

    if (!condiction){

        return txt.length;
    
        
    }else {
        if (typeof condiction !== "function")
        throw Error ("input is not a String");

        var count=0;

        for (var i=0; i<txt.length; i++){
            var val=txt[i]

            if(condiction(val)) count ++;
        }
        return count;
    }
}