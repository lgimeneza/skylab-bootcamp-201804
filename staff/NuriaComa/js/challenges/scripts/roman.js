"use strict";

function romanNum(num, func){
    if(typeof num !== "number"){
        throw Error ("input is not a string")
    }
    if (!func){

        var romannumbers=["I","II","III","IV","V","VI","VII","VIII","IX","X"]
        for (var i=0; i<romannumbers.length; i++){
            var res= romannumbers[num-1];
        }
        return res

    }else {
        if (typeof func !== "function")
        throw Error ("input is not a String");
    }
}