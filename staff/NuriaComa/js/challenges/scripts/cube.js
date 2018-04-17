"use strict";

function cube(num){
        if (typeof num==="number"){

        var resultado=num*num*num;
        
        return resultado
        }
        if(Array.isArray(num)){
            var resultado=[];
            for (var i=0; i<num.length;i++){  
                resultado.push(Math.pow(num[i],3))
            }
            return resultado
            
        } 
        else{
           console.error ("input is not correct");
        }
}    

      
