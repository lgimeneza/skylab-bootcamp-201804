'use strict';

function test(testCase, msg, check) {
    try {
        var res = testCase();

        console.log(msg, check(res), res);
    } catch (err) {
        console.error(msg, 'Test FAILED', err);
    }
}

function errorHandling(func) {
    return function () {
        var error;

        try {
            func();
        } catch (err) {
            error = err;
        }

        return error;
    };
}