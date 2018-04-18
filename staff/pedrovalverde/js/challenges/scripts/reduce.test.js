var a = [{ name: 'jeans', price: 10.5 },
         { name: 't-shirt', price: 5.99 },
         { name: 'socks', price: 19.99 }];

         var menos=0;
var myPrice = a.reduce(function (accum, v) {
    
    if (v.price < 10) {
        console.log("entra porque hay un valor menor de 10");
        console.log("x este precio ->"+v.price);
        menos += v.price;
    }
    console.log("menos total"+menos);
    console.log("acumm"+accum);
    return accum + v.price-menos ;
    
}, 0);

console.log(myPrice);
 // -> 30.49

/*
var o = { 
    a: {value:1}, 
    b: {value:2}, 
    c: {value:3} 
};

Object.keys(o).reduce(function (previous, key) {
    return previous + o[key].value;
}, 0);*/