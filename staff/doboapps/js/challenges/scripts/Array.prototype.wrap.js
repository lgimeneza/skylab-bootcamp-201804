'use strict'

/**
 * 
 * This function(polyfill) concatenates each element of the array with what is passed through parameters
 * 
 * @example
 * var arra = [1,2,3];
 * 
 * var newArr = arra.wrap("(",")").wrap("<",">"); // -> "[<(1)>,<(2)>,<(3)>,]"
 * 
 * @param { String  } argLeft  - The left argument that concat with each element of array.  
 * @param { String  } argRight  - The right argument that concat with each element of array.  
 * 
 * @throws {Error} If input argLeft and/or argRight text are not valid)
 * 
 * @return {Array} - New Array with changed elements.
 * 
 */

 if(!(Array.prototype.wrap instanceof Function)){

    Array.prototype.wrap = function (argLeft,argRight){

       return this.map(function(element){
                element=argLeft+element+argRight;
                return element;
                });                
    }        
}



