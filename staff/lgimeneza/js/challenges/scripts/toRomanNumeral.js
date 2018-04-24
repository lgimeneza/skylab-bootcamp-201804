'use strict';

function toRomanNumerals(num){

    if (isNaN(num)){
        throw Error('is not a number');
    }

    if (num > 10 || num < 1){
        throw Error('Must be 1 - 10');
    }

    var romans = ['I','II','III','IV','V','VI','VII','VIII','IX','X'];

    return romans[num -1];

}