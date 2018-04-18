'use strict';
/**
 * Runs a test case unit.
 * 
 * @example
 * 
 * function fun(){
 *      return 'Hello, world!';
 * }
 * 
 * test(
 *      function(){
 *          return fun();
 *      },
 *      'fun() should return "Hello, world!"',
 * 
 *      function(restul){
 *          return result === 'Hello, world!';
 *      }
 * );
 * 
 * @param {function} testCase - The test case to run.
 * @param {string} message - The description of the test.
 * @param {Function} check - The function that checks the restult of the test.
 * 
 * @author manuelbarzi
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

function runWithErrorHandling(func) {
    return function () {
        var error;
        try {
            func();
        } catch (err) {
            error = err;
        }
        return error;
    }
}