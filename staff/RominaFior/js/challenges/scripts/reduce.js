
'use strict';

function reduce(arr, func) {
    
    if (Array.isArray(arr) == false &&  typeof func !== 'function')
        throw Error('input is not valid');
    
    var count = 0;

    for (var i = 0; i < arr.length; i++) {
       
       count= func(count, arr[i]);

       }
    
    return count;
}

