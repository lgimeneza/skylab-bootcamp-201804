// Test case lower case input is equals to output

var result = toRandomCase('Hello World');

console.log('toRandomCase("Hello World") should be different', result.toLowerCase() === "Hello World".toLowerCase(), result);

// Test case input different case output

var result = toRandomCase('Hello World');

console.log('toRandomCase("Hello World") should be different', result !== "Hello World", result);


// Test case random result

var result = toRandomCase('Hello World');

var resultToCompare = toRandomCase('Hello World');

console.log('toRandomCase("Hello World") should be random', result !== resultToCompare, result);

// Test case is a string

var err;

try {
    toRandomCase(1);
} catch (error) {
    err = error;
} finally {
    console.log('toRomanNumerals(1) should launch and error,', 'Launch error?', err !== undefined, err);
}

// Test case is undefined

var err;

try {
    toRandomCase();
} catch (error) {
    err = error;
} finally {
    console.log('toRomanNumerals(1) should launch and error,', 'Launch error?', err !== undefined, err);
}