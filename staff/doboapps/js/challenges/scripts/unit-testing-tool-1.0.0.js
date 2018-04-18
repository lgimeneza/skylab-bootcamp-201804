'use strict';

/**
 * Runs a test case unit.
 * 
 * @param {function} testCase - The test case to run.
 * @param {string} message - The description of the test.
 * @param {function} check - The function that checks the results of the test.
 * 
 * @author Alberto Domínguez
 * 
 * @version 1.0.0
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
* Wraps a test case with error capturing function.
* 
* @param {function} testCase - The test case to run.
* 
* @returns {function} - An anonymous function that wraps the running of the test case in a secure manner (try-catch).
*/

function runWithErrorCapturing(func) {
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