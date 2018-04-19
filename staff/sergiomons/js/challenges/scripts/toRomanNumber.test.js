'use strict';

test(function () {
    return toRomanNumbers(2);
},
    'toRomanNumbers(2) should return II',
    function (result) {
        return result === "II";
    });
    
test(
    withErrorCapturing(function() {
        toRomanNumbers(true);
    }),
    'toRomanNumbers(true) should throw an error',
    function(result) {
        return result.message === 'input num is not a number';
    }
);

test(
    withErrorCapturing(function() {
        toRomanNumbers("string");
    }),
    'toRomanNumbers("string") should throw an error',
    function(result) {
        return result.message === 'input num is not a number';
    }
);

test(
    withErrorCapturing(function() {
        toRomanNumbers([]);
    }),
    'toRomanNumbers([]) should throw an error',
    function(result) {
        return result.message === 'input num is not a number';
    }
);