'use strict';
var a = [1,2,3];
var b = 2;
var c = 3;
var res = cube(a);
var res1 = cube (b);
var res2 = cube(c);

console.log('El cubo de 2 es: ', res1 === 8,res1,',el cubo de 3 es: ', res2 === 27,res2, 'y el cubo de [1,2,3] es: ',res[0] === 1 && res[1] === 8 && res[2] === 27,res );