'use strict';


var a = [1, 2, 3];

forEach(a, function(v, i, arr) {console.log(v,i,arr)});

try {
    forEach([]);
} catch (error) {
    console.log('no es una array')
}