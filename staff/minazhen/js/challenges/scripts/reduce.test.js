"use strict";



var a = [{ name: 'jeans', price: 10.5 }, { name: 't-shirt', price: 5.99 }, 
{ name: 'socks', price: 19.99 }];

var _reduce = reduce(a,
     function(counterLink, arr_id) {
        if (arr_id.price > 10) return counterLink + arr_id.price; 
        return counterLink;
    }, 0.2); 

console.log("The sum of the prices expensiver than 10 is: ", _reduce);