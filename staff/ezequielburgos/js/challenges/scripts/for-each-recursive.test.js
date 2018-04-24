'use strict';

// forEach(a, console.log)
var a = [1, 12, 19];
console.log('Recursive version')

forEach(a, /*this second parameter will be handler*/ function (v, i, arr) { return console.log(v, i, arr) });

// function forEach compiled:
console.log('Legacy version')

var newArr2 = [];

a.forEach(function (a, i, arr) {
    console.log(a, i, arr)
    newArr2.push(a, i, arr)
});

console.log(newArr2);

var count = 0;

// testing this:
if (newArr.length == newArr2.length) {
    for (var i = 0; i < newArr.length; i++) {
        if (newArr[i] === newArr2[i]) {
            count++;
        } else {
            console.log('position ' + i + ' does not match between the two arrays.');
        }
    }
    if (count == newArr.length) {
        console.log('Your function is testing correctly');
    }
} else {
    console.log('the arrays have a different length');
}



