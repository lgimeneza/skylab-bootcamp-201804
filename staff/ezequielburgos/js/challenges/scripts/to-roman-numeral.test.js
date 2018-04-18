'use strict';

test(
    function () {
        return toRomanNumeral(5);
    },
    'toRomanNumeral(5) should return "V"',
    function (result) {
        return result === "V";
    }
);

test(
    runWithErrorCapturing(function () {
        toRomanNumeral(true);
    }),
    'toRomanNumeral(true) should throw an error',
    function (result) {
        return result.message === 'input should be a number!!';
    }
);

test(
    runWithErrorCapturing(function () {
        toRomanNumeral(13);
    }),
    'toRomanNumeral(13) should throw an error',
    function (result) {
        return result.message === 'The number introduced must be contained in between 1 and 10!';
    }
);

test(
    runWithErrorCapturing(function () {
        toRomanNumeral([]);
    }),
    'toRomanNumeral([]) should throw an error',
    function (result) {
        return result.message === 'input should be a number!!';
    }
);