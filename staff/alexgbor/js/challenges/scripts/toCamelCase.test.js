'use strict';

test(function () {
    return toCamelCase("Hello World");
},
    'toCamelCase("Hello World") should return "helloWorld"',
    function (result) {
        return result === "helloWorld";
    });

test(runWithErrorCapturing(function () {
    return toCamelCase(5);
}),
    'toCamelCase(5) should throw an error',
    function (result) {
        return result.message === "Enter a string.";
    });