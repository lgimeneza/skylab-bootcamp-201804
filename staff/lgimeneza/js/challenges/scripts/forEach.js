'use strict';

function forEach(arr, handler) {
    var iterate = function(index){
        handler(arr[index]);
        if (++index < arr.length) iterate(index);
    };
    iterate(0);
}