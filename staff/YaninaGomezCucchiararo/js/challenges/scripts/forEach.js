'use strict';

/*
forEach
create a function that works as Array.prototype.forEach(). implement it without using any kind of loop control, just functions, and recursion.

var a = [1, 2, 3];

forEach(a, function(v) { console.log(v) });
// -> output
1
2
3

forEach(a, function(v, i) { console.log(v, i) });
// -> output
1 0
2 1
3 2

forEach(a, function(v, i, arr) { console.log(v, i, arr) });
// -> output
1 0 (3) [1, 2, 3]
2 1 (3) [1, 2, 3]
3 2 (3) [1, 2, 3]
*/

var arr = [1,2,3];

function forEach (arr, handler) {
   
    function iterate(index){
        handler(arr[index], index, arr);
        if (++index < arr.length){
            iterate(index);
        }
    }
    iterate(0);
}