'use strict';

var array = [{ name: 'jeans', price: 10.5 }, { name: 't-shirt', price: 5.99 }, { name: 'socks', price: 19.99 }];




var myPriceA = array.reduce(function (total, element) {

    if (element.price > 10)
        total += element.price;

    return total;

}, 0);

console.log("reduce: normal use",myPriceA)



var myPriceB = reduce(array, function (total,element) {

    if (element.price > 10)
        total += element.price;

    return total;
})

var error;

console.log("reduce: function own",myPriceB);


try {
    reduce();
} catch (err) {
    error = err;    
}finally{
    console.log('reduce() without arguments should thorw an error,', error !==undefined,error)
}


try {
    reduce(1, function(accum, v) { return accum + v; });
} catch (err) {
    error = err;    
}finally{
    console.log('reduce(1, function(accum, v) { return accum + v; }) whit first argument as number should thorw an error,', error !==undefined,error)
}

try {
    reduce([]);
} catch (err) {
    error = err;    
}finally{
    console.log('reduce([]) without second argument(function) should thorw an error,', error !==undefined,error)
}

