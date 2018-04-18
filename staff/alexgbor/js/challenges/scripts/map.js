'use strict';

function map(arr,handler) {
    var newArr=[];
    for (var i=0;i<arr.length;i++) {
        newArr.push(handler(arr[i]));
    }
    return newArr;
}