 'use strict';
 
 function toRomanNumeral(num) {
    
    
    if (typeof num !== 'number')
    throw Error('input num is not a number');

    if(num>10)
        throw Error('input num is bigger that 10');
    
    var toTen = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

    return toTen[num];

}

