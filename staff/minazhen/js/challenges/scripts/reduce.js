function reduce(arr, handler, id){
    if (!Array.isArray(arr)) throw Error("Write a valid array on input.");
    var counter = id;
    for (var i = 0; i < arr.length; i++){
        counter += handler(id, arr[i]);
    }
    return counter;
}

"use strict"
