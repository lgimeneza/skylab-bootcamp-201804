'use strict';

test(
    function() {
        return countChars('hello world');
    },
    'countChars("hello world") should return 11',
    function(result) {
        return result === 11;
    }
);

test(
    function() {
        return countChars('0123456789');
    },
    'countChars("0123456789") should return 10',
    function(result) {
        return result === 10;
    }
);

test(
    runWithErrorCapturing(function() {
        countChars(true);
    }),
    'countChars(true) should throw an error',
    function(result) {
        return result.message === 'input text is not a string';
    }
);

test(
    runWithErrorCapturing(function() {
        countChars(1);
    }),
    'countChars(1) should throw an error',
    function(result) {
        return result.message === 'input text is not a string';
    }
);

test(
    runWithErrorCapturing(function() {
        countChars([]);
    }),
    'countChars([]) should throw an error',
    function(result) {
        return result.message === 'input text is not a string';
    }
);

test(
    function() {
        return countChars('abracadabra', function(c) { return c === 'a'; });
    },
    'countChars("abracadabra", function(c) { return c === "a"; }) should return 5',
    function(result) {
        return result === 5;
    }
)

test(
    runWithErrorCapturing(function() {
        countChars('abracadabra', '...');
    }),
    'countChars("abracadabra", "...") should throw an error',
    function(result) {
        return result.message === 'input condition is not a function';
    }
);

// var count = countChars('hello world');

// console.log('countChars("hello world") should return 11', count === 11, count);


// count = countChars('0123456789');

// console.log('countChars("0123456789") should return 10', count === 10, count);

// var error;

// try {
//     count = countChars(true);
// } catch (err) {
//     error = err;
// } finally {
//     console.log('countChars(true) should throw an error', error !== undefined, error);
// }

// error = undefined;

// try {
//     count = countChars(1);
// } catch (err) {
//     error = err;
// } finally {
//     console.log('countChars(1) should throw an error', error !== undefined, error);
// }

// error = undefined;

// try {
//     count = countChars([]);
// } catch (err) {
//     error = err;
// } finally {
//     console.log('countChars([]) should throw an error', error !== undefined, error);
// }


// count = countChars('abracadabra', function (c) { return c === 'a'; });

// console.log('countChars("abracadabra") should return 5', count === 5, count);

// try {
//     count = countChars('abracadabra', '...');
// } catch (err) {
//     console.log('countChars("abracadabra", "...") should throw an error', err !== undefined, err);
// }