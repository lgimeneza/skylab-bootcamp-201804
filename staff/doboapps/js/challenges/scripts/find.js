'use strict';

function find(arr, callback) {

    if (typeof arr !== 'object' || !arr instanceof Array) throw Error('input arr is not an array');

    if (typeof callback !== 'function' || !arr instanceof Array) throw Error('input handler is not a function');


    var value;

    var iterate = function (index) {

        if (callback(arr[index])) {
            value = arr[index];
            return;
        }

        if (++index < arr.length)
            iterate(index);
    };

    iterate(0);

    return value;


}