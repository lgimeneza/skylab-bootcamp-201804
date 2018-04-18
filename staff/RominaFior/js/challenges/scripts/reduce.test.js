'use strict';

var error;

var a = [{ name: 'jeans', price: 10.5 }, { name: 't-shirt', price: 5.99 }, { name: 'socks', price: 19.99 }];

var result= reduce(a, function(accum, v){
    if (v.price > 10){
        return accum + v.price;
    }
    return accum;
});

console.log(result);

error = undefined;
try {
    result = reduce(' ')
} catch (err) {
    error=err;
}finally{
    console.log('reduce(" ") should throw an error',error !== undefined, error);
}

error = undefined;
try {
    result = reduce(1, " ")
} catch (err) {
    error=err;
}finally{
    console.log('reduce(1, " ") should throw an error',error !== undefined, error);
}

error = undefined;
try {
    result = reduce({})
} catch (err) {
    error=err;
}finally{
    console.log('reduce({}) should throw an error',error !== undefined, error);
}

error = undefined;
try {
    result = reduce(1)
} catch (err) {
    error=err;
}finally{
    console.log('reduce(1) should throw an error',error !== undefined, error);
}