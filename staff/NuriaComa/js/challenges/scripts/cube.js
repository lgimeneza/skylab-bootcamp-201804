"use strict";
"use strict"

function cube(num, func){

    if(typeof num !== "number"){
        console.log ("input is not a string")
    }
    if (typeof num==="number"){

        var resultado=num*num*num;
        
        return resultado

    } if(Array.isArray(num)){
            var resultado=[];
            for (var i=0; i<num.length;i++){  
                resultado.push(Math.pow(num[i],3))
            }
            return resultado
        } 
    
        if (typeof func !== "function"){
            
            throw Error ("input is not a String");
        }
        
    
}    

 