'use strict';
var error;
var a = [1, 2, 3]
forEach(a, function(item, index, arr) {
  console.log(item, index, arr);
});

error = undefined;

try {
  forEach();
} catch (err) {
  error = err
} finally { console.log('forEach() without arguments should throw an error', error !== undefined, error)}

