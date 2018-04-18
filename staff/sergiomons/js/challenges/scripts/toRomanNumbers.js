'use strict';
function toRomanNumbers(num) {
    if (typeof num !== "number")
       throw Error('input num is not a number');
    var arrayOfRomans=["I","II","III","IV","V","VI","VII","VIII","IX","X"];
       for (var i=0; i<arrayOfRomans.length; i++) {
           var romanNum= arrayOfRomans[num - 1];
       }  
        return   romanNum; 
}