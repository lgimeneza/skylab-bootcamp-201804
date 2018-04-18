console.log(">>REDUCE")

var a = [{ name: 'jeans', price: 10.5 }, { name: 't-shirt', price: 5.99 }, { name: 'socks', price: 19.99 }];

toReduce(a, function(accum, valueCurrent) {
    if (valueCurrent.price > 10){
      return accum + valueCurrent.price;
     }  
   return accum;
}, 0);
