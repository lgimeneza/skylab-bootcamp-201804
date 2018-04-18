'use strict';

function cube(number) {
  if (typeof number !== 'number')
    throw Error('input is not a number');

 if (typeof number === 'number') {
   return Math.pow(number, 3);
 }
  var result = number.map(function(v) {
    return Math.pow(v, 3);
  });
  return result;
}