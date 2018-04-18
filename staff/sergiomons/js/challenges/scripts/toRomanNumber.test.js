'use strict';

test(function () {
    return toRomanNumbers(2);
},
    'toRomanNumbers(2) should return II',
    function (result) {
        return result === "II";
    });
    
test(
    runWithErrorCapturing(function() {
        toRomanNumbers(true);
    }),
    'toRomanNumbers(true) should throw an error',
    function(result) {
        return result.message === 'input num is not a number';
    }
);

test(
    runWithErrorCapturing(function() {
        toRomanNumbers("string");
    }),
    'toRomanNumbers("string") should throw an error',
    function(result) {
        return result.message === 'input num is not a number';
    }
);

test(
    runWithErrorCapturing(function() {
        toRomanNumbers([]);
    }),
    'toRomanNumbers([]) should throw an error',
    function(result) {
        return result.message === 'input num is not a number';
    }
);