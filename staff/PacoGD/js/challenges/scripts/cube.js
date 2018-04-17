'use strict';

function cube(num) {
    if (typeof num === 'number') {
        return num * num *num
    } else if (typeof num === 'object'){
        var array3 = num.map(function(v){ return v*v*v});
        return array3;
    } 
    
}