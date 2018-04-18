'use strict';

console.log(toRandomCase("Hello World"));

var input = 'Hello World';

var output =toRandomCase(input);

console.log('toRandomCase(input) should return input in randomcase', input.toLowerCase() === output.toLowerCase() && input !== output);
