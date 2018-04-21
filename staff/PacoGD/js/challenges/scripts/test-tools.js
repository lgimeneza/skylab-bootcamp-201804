'use strict';
/**
 * Runs a test case unit and putputs the result in the console.
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
 * @version 3.1.0
 */
function test(testCase, description, check) {
    try {
        var res = testCase();
        check(res) ? console.log ('%c TEST -> ' + description + ' -> TRUE -> '),'background: green; color: white; display: block;',res):console.log('%c TEST -> ' + description + ' -> FALSE -> ', 'background: yellow; color: black; display: block;', res);
    } catch (err) {
        console.log('%c TEST -> ' + description + ' -> ERROR -> ', 'background: red; color: white; display: block;', res);
    }
}

function withErrorCapturing(func) {
    return function () {
        
        try {
            return testCase();
        } catch (err) {
            return err;
        }
        return error;
    };
}