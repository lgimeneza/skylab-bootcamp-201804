'use strict';

test(function () {
    return cube(3);
},
    'cube(3) should return 27',
    function (result) {
        return result === 27;
    });

test(function () {
    return cube([1, 2, 3]);
},
    'cube([1, 2, 3]) should return [1, 8, 27]',
    function (result) {
        return result.toString() === [1, 8, 27].toString();
    });

test(runWithErrorCapturing(function () {
    return cube(true);
}),
    'cube(true) should throw an error',
    function (result) {
        return result.message === 'Input number or array of numbers';
    });

test(runWithErrorCapturing(function () {
    return cube([1, 2, 'a']);
}),
    'cube([1, 2, "a"]) should throw an error',
    function (result) {
        return result.message === 'All elements must be numbers';
    });