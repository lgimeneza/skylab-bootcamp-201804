'use strict';

var randomsentence=toRandomCase("hello world");

console.log("toRandomCase('hello world') should return the same sentence with random upper/lower case "+randomsentence);

randomsentence=toRandomCase("hello world");

console.log("toRandomCase('hello world') should return the same sentence with random upper/lower case "+randomsentence);

randomsentence=toRandomCase("hello world");

console.log("toRandomCase('hello world') should return the same sentence with random upper/lower case "+randomsentence);

randomsentence=toRandomCase("hello world");

console.log("toRandomCase('hello world') should return the same sentence with random upper/lower case "+randomsentence);

randomsentence=toRandomCase("hello world");

console.log("toRandomCase('hello world') should return the same sentence with random upper/lower case "+randomsentence);


var error=undefined;
try {
    randomsentence=toRandomCase(234234);
} catch(err) {
    error=err;
} finally {
    console.log("toRandomCase(234234) should return an error "+randomsentence, error);
}

