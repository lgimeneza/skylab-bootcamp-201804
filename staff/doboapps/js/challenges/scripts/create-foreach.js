'use strict';


function foreach(arr, callback) {

    if (typeof arr !== 'object' || !arr instanceof Array) throw Error('input array is not an array');

    var iterate = function (i) {
        callback(arr[i], i, arr);
        if (++i < arr.length)
            iterate(i);
    };    
    iterate(0);
}


