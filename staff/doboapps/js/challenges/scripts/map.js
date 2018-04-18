'use strict';


function map(arr, callback){

    if (typeof arr !== 'object' || !arr instanceof Array) throw Error('input arr is not an array');

    if (typeof callback !== 'function' || !arr instanceof Array) throw Error('input handler is not a function');

    var newArray =[];

    var iterate = function(index){
    
        if(callback(arr[index]))
        newArray.push(arr[index]);

        if(++index < arr.length)
            iterate(index);
    };

    iterate(0);

    return newArray;

}