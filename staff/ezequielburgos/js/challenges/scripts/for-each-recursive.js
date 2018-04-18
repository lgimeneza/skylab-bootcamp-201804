'use strict';

// RECURSIVIDAD
// forEach(a, console.log)
// function forEach:

var newArr = [];

function forEach(arr, handler /*esto será console.log*/){
    var iterate = function(index){
        handler(arr[index], index, arr);
        // this line is for testing:
        newArr.push(arr[index], index, arr);  

        if(++index != arr.length){
            iterate(index);
        }
            
    };
    iterate(0);
    console.log(newArr);
}



