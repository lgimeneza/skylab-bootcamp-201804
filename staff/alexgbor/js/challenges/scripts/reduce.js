'use strict';

function reduce(arr,func,init) {
    var count=init;
    for (var i=0;i<arr.length;i++) {
        count+=func(init,arr[i]);
    }
    return count;
};



function reducerecursive(arr,func,init) {
    var count=init;
    var iterate=function(index) {
        count+=func(init,arr[index]);
        if(++index<arr.length) {
            iterate(index);
        }
    }
    iterate(0);
    return count;
}