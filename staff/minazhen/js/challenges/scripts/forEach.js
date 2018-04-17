var saveArr = [];

function forEach(arr, handler){
    if (!Array.isArray(arr)) throw Error("Write a valid array on input.");
    saveArr = [];
    var loop = function(index) {
        var idxArr = arr[index];
        handler(idxArr, index, arr);
        saveArr.push([idxArr, index, arr]);
        if (++index < arr.length) loop(index);
    }
    loop(0);
}

"use strict"
