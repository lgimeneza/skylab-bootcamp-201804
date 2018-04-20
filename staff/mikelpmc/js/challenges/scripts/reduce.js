'use strict';

// function reduce(arr, handler, init) {
//     var total = init;

//     for (var i = 0; i < arr.length; i++) {
//         total = handler(total, arr[i]);
//     }

//     return total;
// }

function reduce(arr, handler, init) {
    if (!Array.isArray(arr)) throw Error('First argument should be an array');

    if (typeof handler !== 'function')
        throw Error('Second argument should be a function');

    if (typeof init !== 'number')
        throw Error('Third argument should be a number');

    var total = init;

    var acum = function(index) {
        total = handler(total, arr[index]);

        index++;

        if (index < arr.length) acum(index);
    };

    acum(0);

    return total;
}
