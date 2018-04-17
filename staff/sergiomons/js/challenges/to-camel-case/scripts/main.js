'use strict';
var res = toCamelCase("Hello My World")
   
console.log('toCamelCase("hello World")should return helloMyWorld', res === "helloMyWorld", res);

try {
    res;
 } catch(err) {
     console.log('toCamelCase() should throw an error', err !== undefined, err);
 }

count = toCamelCase('Hello My World', function(c) { return c === 'o';});