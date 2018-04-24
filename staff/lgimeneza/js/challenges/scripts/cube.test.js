'use strict';

// Test case with valid númber

var result = cube(2);

console.log('cube(2) should return 8', result === 8, result);

// Test case with valid númber

result = cube(3);

console.log('cube(3) should return 27', result === 27, result);

// Test case with valid númber

result = cube([1,2,3]);

console.log('cube(3) should return [1,8,27]', result.toString() === [1,8,27].toString(), result);

// Test case is not a number

var err;

try {
    cube('Hello World!');
} catch (error) {
    err = error;
} finally {
    console.log('cube("Hello World!") should launch and error,', 'Launch error?', err !== undefined, err);
}

// Test case is not a number

var err;

try {
    cube();
} catch (error) {
    err = error;
} finally {
    console.log('cube("") should launch and error,', 'Launch error?', err !== undefined, err);
}