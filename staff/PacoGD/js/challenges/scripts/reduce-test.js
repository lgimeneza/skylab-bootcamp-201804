'use strict';

var res = reduce([1, 2, 3, 4, 5], function (accum, v) { return accum + v; }, 0);

console.log('reduce([1, 2, 3, 4, 5], function(accum, v) { return accum + v; }, 0) should return 15', res === 15, res);

res = reduce([1, 2, 3, 4, 5], function (accum, v) { return accum + v; });

console.log('reduce([1, 2, 3, 4, 5], function(accum, v) { return accum + v; }) should return 15', res === 15, res);

var error;

try {
    reduce();
} catch (err) {
    error = err;
} finally {
    console.log('reduce() without arguments should throw an error', error !== undefined, error);
}

error = undefined;

try {
    reduce(undefined, function (accum, v) { return accum + v; });
} catch (err) {
    error = err;
} finally {
    console.log('reduce(undefined, function(accum, v) { return accum + v; }) without first argument should throw an error', error !== undefined, error);
}

error = undefined;

try {
    reduce([]);
} catch (err) {
    error = err;
} finally {
    console.log('reduce([]) without second argument should throw an error', error !== undefined, error);
} 