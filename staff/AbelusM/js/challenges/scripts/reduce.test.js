'use strict';

var arr = [3, 4, 5, 6, 10, 4]
var v = 6;

var output = reduce(arr, v);

console.log(output);

try {
    output = reduce(true);
} catch (err) {
    console.log('reduce(true) should launch an error', err !==undefined, err);
}