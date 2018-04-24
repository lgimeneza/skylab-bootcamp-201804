'use strict';

function reduce(arr, handler, initial){

    if (typeof arr !== 'object' || !arr instanceof Array) throw Error('input array is not an array');

    if (typeof handler !== 'function') throw Error('input handler is not a function');

    if (isNaN(initial)) initial = 0;

    var accum = initial;
    var iterate = function(index){
        accum = handler(accum,arr[index]);
        if (++index < arr.length) iterate(index);
    };
    iterate(0);
    return accum;
} 