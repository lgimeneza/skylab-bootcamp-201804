
"use strict"


/**
 * Calculates the cube of an input number, or array of numbers.
 * @example
 * 
 * var result =cube(3); // -> 27
 * var  result = cube ([1,2,3]); // -> [1, 8, 27]
 * 
 * @param {number | number[]} num - The input number or array of numbers.
 * 
 * @throws {Error} - If input number or array of number is not valid.
 * 
 * @returns { number | number[]} - The cube of input number or array of numbers.
 */

function cube(num){

    
    if (typeof num==="number"){

        var resultado=num ** 3;
        
        return resultado

    }
    if (!(num instanceof Array)){
        
        throw Error ("input is not a number, neither an array");
    }

    for (var i=0; i<num.length; i++){

        if (typeof num[i] !=="number") throw Error("input array is not a number at index " +i);
    }
    if(typeof num !== "number"){

        console.log ("input is not a number, neither an array")
    
    } if(Array.isArray(num)){
       var resultado =[]
        for (var i=0; i<num.length;i++){  
            var  val= num[i]
            resultado[i] = val **3;
        }
        return resultado
    } 
}    

 