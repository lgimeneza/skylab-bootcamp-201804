'use strict';

var input = 'hola que tal';
var output = toRandomCase(input);

var test = false;
if (input.toLowerCase() === output.toLowerCase() && input !== output) {
    test = true;
}

console.log('toRandomCase("hola que tal")', test, output);

var err;
try {
    output = toRandomCase(5454);
} catch (error) {
    error = err;
} finally {
    console.log(
        'toRandomCase(5454) should throw an error',
        err !== undefined,
        err
    );
}
