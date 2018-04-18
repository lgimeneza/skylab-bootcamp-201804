'use strict';

/**
 * 
 * @param {function} testCase 
 * @param {} message 
 * @param {*} check 
 */
function test(testCase, message, check) {
    try {
        var res = testCase();

        console.log(message, check(res), res);
    } catch (err) {
        console.error(message, 'FAILED', err);
    }
}


/**
 * 
 * @param {*} func 
 */
function runWithErrorHandling(func) {
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