'use strict';

var a = [1, 2, 5, 6, 7]
var totalSum = 0;
var index = 0;

console.log('Recursive version');

reduce(a, index, function (v) {return console.log(totalSum + v)});


