'use strict';

function reduce(arr, v) {
    if(typeof arr === 'object'){
        var accum = 0;
        for(var i = 0; i<arr.length; i++){
            accum = accum + arr[i];
            if(arr[i]===v) 
            break;
        } return accum;
    } else {
        throw Error ('this is not an array');
    }
}