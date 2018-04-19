'use strict';
/*
create a function that works as Array.prototype.map(). implement it using the traditional "for (var i = ...)" loop.

demo:

var names = ['john', 'mary', 'jack'];

map(names, function(v) { return v.toUpperCase(); });
// -> output
['JOHN', 'MARY', 'JACK']
*/

function map(array, handler){
    var result =[];

   
for (var i=0; i< array.lenght; i++){
        result.push(handler(array[i]);
        }

    return result;

}