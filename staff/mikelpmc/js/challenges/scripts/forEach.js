'use strict';

function forEach(arr, handler) {
    if (!Array.isArray(arr)) throw Error('First parameter should be an array');

    if (typeof handler !== 'function')
        throw Error('Second parameter should be a function');

    var iterate = function(index) {
        handler(arr[index], index, arr);

        if (++index < arr.length) iterate(index);
    };

    iterate(0);
}
