'use strict'; 

function countChars(str) {
  if (typeof str !== 'string') 
    throw Error('input is not a string');

  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      count++;
    }
  }
  return count;
}

// si quisieramos que countChars tenga otro parametro que sea una function de forma que iterando con cada caracter solo
// cuente aquellos caractéres para los que la función de true.

function countCharsWithFunction(str, func) {
  if (typeof str !== 'string')
    throw Error('input is not a string');
  if (!func) {
    return str.lenght;
  } else {
    if (typeof func !== 'function')
      throw Error('input func is not a function')
    var count = 0;
    for (var i = 0; i < str.length; i++) {
      var val = str[i];
      if (func(val)) count++;
    }
    return count;
  }
}




/*var result = countChars('hola', function(val) {
  if (val === 'a') {
    return true;
  } else {
    return false;
  }
});

console.log(result); */

