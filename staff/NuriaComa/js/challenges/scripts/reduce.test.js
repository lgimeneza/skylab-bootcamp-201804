"use strict"
console.log(">>REDUCE")

var a = [{ name: 'jeans', price: 10.5 }, { name: 't-shirt', price: 5.99 }, { name: 'socks', price: 19.99 }];


test(
  function(){
      return toReduce();
  },
  'to Roman Numbers(2) should return IV',
  function(result){
      return result === "IV";
  }
);

toReduce(a, function(accum, valueCurrent) {
    if (valueCurrent.price > 10){
      return accum + valueCurrent.price;
     }  
   return accum;
}, 0);
