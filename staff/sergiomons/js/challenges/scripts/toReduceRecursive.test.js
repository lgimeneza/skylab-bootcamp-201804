'use strict';
var a = [{ name: 'jeans', price: 10.5 }, { name: 't-shirt', price: 5.99 }, { name: 'socks', price: 19.99 }];

var result = toReduce(a, function(accum, valueCurrent) {
    if (valueCurrent.price > 10){
      return accum + valueCurrent.price;
     }  
   return accum;
}, 0); 

console.log('toReduce(a, function(accum, v) { return accum + v; }, 0) should return 30,49', result === 30.49, result);