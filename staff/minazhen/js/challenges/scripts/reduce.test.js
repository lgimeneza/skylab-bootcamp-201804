var a = [{ name: 'jeans', price: 10.5 }, { name: 't-shirt', price: 5.99 }, 
{ name: 'socks', price: 19.99 }];

var _reduce = reduce(a, function(accum, v) {
    if (v.price > 10) return accum + v.price; 
    return accum;
    }, 0); 

console.log("The sum of the prices expensiver than 10 is: ", _reduce);

"use strict"