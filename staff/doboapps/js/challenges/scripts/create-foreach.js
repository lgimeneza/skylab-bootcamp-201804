'use strict';


function forEach(arr, callback) {

    if (typeof arr !== 'object' || !arr instanceof Array) throw Error('input arr is not an array');

    if (typeof callback !== 'function' || !arr instanceof Array) throw Error('input handler is not a function');

    var iterate = function (i) {
        callback(arr[i], i, arr);
        
        if (++i < arr.length)
            iterate(i);
    };    
    iterate(0);
}


