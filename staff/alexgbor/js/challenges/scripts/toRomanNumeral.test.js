'use strict';

test(function () {
    return toRomanNumeral(3);
},
    'toRomanNumeral(3) should return "III"',
    function (result) {
        return result === "III";
    });

test(function () {
    return toRomanNumeral(8);
},
    'toRomanNumeral(8) should return "VIII"',
    function (result) {
        return result === "VIII";
    });

test(withErrorCapturing(function () {
    return toRomanNumeral(true);
}),
    'toRomanNumeral(true) should throw an error',
    function (result) {
        return result.message === "Insert a number, not a string.";
    });

    test(withErrorCapturing(function () {
        return toRomanNumeral(22);
    }),
        'toRomanNumeral(22) should throw an error',
        function (result) {
            return result.message === "Only numbers in the range 1-10.";
        });