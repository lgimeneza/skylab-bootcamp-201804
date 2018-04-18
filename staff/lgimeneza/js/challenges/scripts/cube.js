'use strict';

function cube(num){

    if (!check(num)){
        throw Error('Input not valid');
    } 

    if (typeof num === 'number') {
        return Math.pow(num, 3);
    } else {
        var result = [];
        for (var i = 0; i < num.length; i++){
            result.push(Math.pow(num[i], 3));
        }
        return result;
    }
}

function check(num){

    if (typeof num === 'number') return true;

    if (Array.isArray(num)) {
        for (var i = 0; i < num.length; i++){
            if (typeof num[i] !== 'number') return false;
        }
        return true;
    }

    return false;
}