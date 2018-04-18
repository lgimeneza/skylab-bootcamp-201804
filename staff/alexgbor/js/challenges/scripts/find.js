'use strict';

function find(arr,handler) {
    var result=undefined;
    for (var i=0;i<arr.length;i++) {
        if (handler(arr[i])===true) {
            return arr[i];
        } 
    }
    return result;
}