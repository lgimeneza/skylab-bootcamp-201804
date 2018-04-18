'use strict';

var res = toCamelCase("Hello My World"); // res -> "helloWorld"

console.log('toCamelCase("Hello My World") should return "helloMyWorld', res === "helloMyWorld", res);

try {
    toCamelCase(123);
} catch (error) {
    console.log('countWords(123) should launch and error,', 'Launch error?', error !== undefined, error);
}

try {
    toCamelCase();
} catch (error) {
    console.log('toCamelCase() should launch and error,', 'Launch error?', error !== undefined, error);
}