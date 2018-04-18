'use strict';

// Test case with valid númber

var result = toRomanNumerals(1);

console.log('toRomanNumerals(1) should return "I"', result === "I", result);

// Test case with valid númber

var result = toRomanNumerals(5);

console.log('toRomanNumerals(5) should return "V"', result === "V", result);

// Test case is not a number

var err;

try {
    toRomanNumerals('Hello World!');
} catch (error) {
    err = error;
} finally {
    console.log('toRomanNumerals("Hello World!") should launch and error,', 'Launch error?', err !== undefined, err);
}

// Test case out of the bounds

err = undefined;

try {
    toRomanNumerals(15);
} catch (error) {
    err = error;
} finally {
    console.log('toRomanNumerals(15) should launch and error,', 'Launch error?', err !== undefined, err);
}

// Test case out of the bounds

err = undefined;

try {
    toRomanNumerals(-1);
} catch (error) {
    err = error;
} finally {
    console.log('toRomanNumerals(15) should launch and error,', 'Launch error?', err !== undefined, err);
}

// Test case undefined

err = undefined

try {
    toRomanNumerals();
} catch (error) {
    err = error;
} finally {
    console.log('toRomanNumerals(15) should launch and error,', 'Launch error?', err !== undefined, err);
}