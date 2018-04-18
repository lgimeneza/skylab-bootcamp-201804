'use strict';
var arr = [
  { name: 'jeans', price: 10.5 },
  { name: 't-shirt', price: 5.99 },
  { name: 'socks', price: 19.99 }
];

var result = reduce(arr, function(totalPrice, product) {
  return totalPrice + product.price;
});

console.log(result);

// a.reduce(function(accum, value) {
//if (value.price > 10)
// return accum + value.price;
// return accum;
//}, 0)
var error;

error = undefined;
try {
  reduce();
} catch (err) {
  error = err;
} finally {console.log('reduce() without arguments should throw an error', error !== undefined, error);}

