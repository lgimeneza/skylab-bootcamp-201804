'use strict';


test(
    function () {
        return toCamelCase('hello my world');
    },
    'toCamelCase("hello my world") should return helloMyWorld',
    function (result) {
        return result === 'helloMyWorld';
    }
)

test(
    function () {
        return toCamelCase('hi    there');
    },
    'toCamelCase("hi    there") should return hiThere',
    function (result) {
        return result === 'hiThere';
    }
);

test(
    runWithErrorCapturing(function () {
        toCamelCase(true);
    }),
    'toCamelCase(true) should throw an error',
    function (result) {
        return result.message === 'input str is not a string!!';
    }
);


test(
    runWithErrorCapturing(function () {
        toCamelCase(1);
    }),
    'toCamelCase(1) should throw an error',
    function (result) {
        return result.message === 'input str is not a string!!'
    }
);

test(
    runWithErrorCapturing(function () {
        toCamelCase([]);
    }),
    'toCamelCase([]) should throw an error',
    function (result) {
        return result.message === 'input str is not a string!!'
    }
);