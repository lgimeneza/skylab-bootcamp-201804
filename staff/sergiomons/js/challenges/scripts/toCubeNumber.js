'use strict';

function cubeNumber(num, func) {
    if (typeof num !== 'number' && !Array.isArray(num)) {
       throw Error('input str is not a number');
    }
    var numElevated= [];
    var numSingle=0;
     if (Array.isArray(num)) { 
       for (var i=0; i<num.length; i++) {
        numElevated.push(Math.pow(num[i],3));
       } 
       return  numElevated;
     }
     if (typeof num === "number") {
         numSingle=Math.pow(num,3);  
     }
     return  numSingle;
}
