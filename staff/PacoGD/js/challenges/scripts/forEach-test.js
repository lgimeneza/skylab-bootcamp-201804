'use strict';

var a = [1, 12, 19, 4, 5];
console.log('Recursive version');
forEach(a, function (v, i, arr) { console.log(v, i, arr) });

/* No borrar, son apuntes! */
/* 'use strict';

var input = [1, 2, 3];
var output = [];

forEach(input, function (v) { output.push(v) });

console.log('forEach(input, function(v) { output.push(v) }) should fulfill output with values from input', input.toString() === output.toString(), output);

var error;

try {
    forEach()
} catch (err) {
    error = err;
} finally {
    console.log('forEach() without arguments should throw an error', error !== undefined, error);
}

error = undefined;

try {
    forEach(undefined, function (v) { output.push(v) });
} catch (err) {
    error = err;
} finally {
    console.log('forEach(undefined, function(v) { output.push(v) }) without first argument should throw an error', error !== undefined, error);
}

error = undefined;

try {
    forEach(input);
} catch (err) {
    error = err;
} finally {
    console.log('forEach(input) without second argument should throw an error', error !== undefined, error);
} */