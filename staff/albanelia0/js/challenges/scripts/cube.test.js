'use strict';
var array = [2,3,4];
var error;

var count = cube(array);
console.log('cube("[2,3,4]") should return', count !== undefined, count);

error = undefined;
try {
  count = cube('string');
} catch (err) {
  error = err
  console.log('cube(12) should launch an error', error !== undefined, error);
}

