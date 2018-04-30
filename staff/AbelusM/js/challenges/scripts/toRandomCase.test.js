'use strict';
var input = 'Hello My World';
var output = toRandomCase(input);

test(
    function () {
        return toRandomCase(input);
    },
    'toRandomCase("Hello My World") should return Hello world in random case',
    function (input) {
        return input;
    }
)


test(
    runWithErrorCapturing(function () {
        toRandomCase(1);
    }),
    'toRandomCase(1) should throw an error',
    function (result) {
        return result.message === 'input text is not a string';
    }
)

test(
    runWithErrorCapturing(function () {
        toRandomCase([]);
    }),
    'toRandomCase([]) should throw an error',
    function (result) {
        return result.message === 'input text is not a string';
    }
)

