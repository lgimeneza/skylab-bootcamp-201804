'use strict';

function forEach(arr,handler) {
    var iterate=function(index) {
        handler(arr[index],index,arr);
        if(++index<arr.length) {
            iterate(index);
        }
    }
    iterate(0);
}

/* function multi(x,y) {
    var counter=0;
    var iterate=function(index) {
        counter+=x;
        if(++index<y) {
            iterate(index);
        }
    }
    iterate(0);
    return counter;
} */