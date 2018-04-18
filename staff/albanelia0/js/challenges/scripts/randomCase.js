'use strict';
function randomCase(str) {
  if (typeof str !== 'string')
    throw Error('input is not a string');
   var result = '';

  for (var i = 0; i < str.length; i++) {
    var random = Math.random();
    if (random < 0.5) {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }

  return result;
}