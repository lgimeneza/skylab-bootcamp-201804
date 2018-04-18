'use strict';

function reduce(arr, handler, initial) {
    if (typeof arr === 'object') {
        var counter = initial;
        for (var i = 0; i < arr.length; i++) {
            counter = counter + handler(initial, arr[i]);
        } console.log(counter);
            return counter;
    } else {
        throw Error('this is not an array');
    }
}