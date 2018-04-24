'use strict';

// Test case with valid array

var ax = [{ name: 'jeans', price: 10.5 }, { name: 't-shirt', price: 5.99 }, { name: 'socks', price: 19.99 }];

var result = reduce(ax, function(accum, v) {
    if (v.price > 10)
        return accum + v.price;
    return accum;
}, 0);

console.log('reduce() should return 30.49', result === 30.49, result);

var res = reduce([1, 2, 3, 4, 5], function(accum, v) { return accum + v; }, 0);

console.log('reduce([1, 2, 3, 4, 5], function(accum, v) { return accum + v; }, 0) should return 15', res === 15, res);

res = reduce([1, 2, 3, 4, 5], function(accum, v) { return accum + v; });

console.log('reduce([1, 2, 3, 4, 5], function(accum, v) { return accum + v; }) should return 15', res === 15, res);

var error;

try {
    reduce();
} catch(err) {
    error = err;
} finally {
    console.log('reduce() without arguments should throw an error', error !== undefined, error);
}

error = undefined;

try {
    reduce(undefined, function(accum, v) { return accum + v; });
} catch(err) {
    error = err;
} finally {
    console.log('reduce(undefined, function(accum, v) { return accum + v; }) without first argument should throw an error', error !== undefined, error);
}

error = undefined;

try {
    reduce([]);
} catch(err) {
    error = err;
} finally {
    console.log('reduce([]) without second argument should throw an error', error !== undefined, error);
}