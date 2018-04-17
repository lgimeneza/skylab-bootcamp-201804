'use strict';

/* var a = [1,2,3,4];
var b = function(){console.log()};

forEach(a,b); */

// forEach(a, console.log)

var a = [1,12,19,4,5];
console.log('Recursive version');
forEach(a, function(v, i, arr){ console.log(v, i, arr)});