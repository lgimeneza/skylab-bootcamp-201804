'use strict';

function forEach(array, handler) {
    if (typeof array === 'string' || typeof array === 'number') throw Error ('input is not an array');
    
    var index = 0;
    function iterate(index) {
        handler(array[index], index, array);
        if (++index < array.length) {
            iterate(index);
        }
    }
    iterate(index);
}