
'use strict';

/**
 * Runs a test case unit and outputs the result in the console.
 * 
 * @example
 * 
 * // normal test
 * 
 * function fun() {
 *      return 'Hello, World!';
 * }
 * 
 * test(
 *      function() {
 *          return fun();
 *      },
 * 
 *      'fun() should return "Hello, World!"',
 * 
 *      function(result) {
 *          return result === 'Hello, World!';
 *      }
 * );
 * 
 * // test with error capturing
 * 
 * function notFun() {
 *      throw Error('CRASH!');
 * }
 * 
 * test(
 *      withErrorCapturing(
 *          function() {
 *              notFun();
 *          }
 *      ),
 * 
 *      'notFun() should throw error with message "CRASH!"',
 * 
 *      function(result) {
 *          return result && result.message === 'CRASH!';
 *      }
 * );
 * 
 * @param {function} testCase - The test case to run.
 * @param {string} description - The description of the test case.
 * @param {function} check - The function that checks the results of the test case.
 * 
 * @author manuelbarzi
 * 
 * @version 3.1.0
 */
function test(testCase, description, check) {
    try {
        var res = testCase();

        check(res) ? console.log('%c TEST -> ' + description + ' -> TRUE -> ', 'background: green; color: white; display: block;', res) :
            console.log('%c TEST -> ' + description + ' -> FALSE -> ', 'background: yellow; color: black; display: block;', res);
    } catch (err) {
        console.log('%c TEST -> ' + description + ' -> ERROR -> ', 'background: red; color: white; display: block;', res);
    }
}

/**
 * Wraps a test case with an error capturing function.
 * 
 * Suitable for use in test cases that are expect to throw an error.
 * 
 * @param {function} testCase - The test case to run.
 * 
 * @returns {function} - An anonymous function that wraps the execution of the test case
 * in a secure manner (try-catch), captures the error if happens and returns it (otherwise
 * it returns the result of the test case execution).
 */
function withErrorCapturing(testCase) {
    return function () {
        try {
            return testCase();
        } catch (err) {
            return err;
        }
    };
}
/**
 * Runs a test case unit.
 * 
 * @example
 * 
 * // normal test
 * 
 * function fun() {
 *      return 'Hello, World!';
 * }
 * 
 * test(
 *      function() {
 *          return fun();
 *      },
 * 
 *      'fun() should return "Hello, World!"',
 * 
 *      function(result) {
 *          return result === 'Hello, World!';
 *      }
 * );
 * 
 * // test with error capturing
 * 
 * function notFun() {
 *      throw Error('CRASH!');
 * }
 * 
 * test(
 *      withErrorCapturing(
 *          function() {
 *              notFun();
 *          }
 *      ),
 * 
 *      'notFun() should throw error with message "CRASH!"',
 * 
 *      function(result) {
 *          return result && result.message === 'CRASH!';
 *      }
 * );
 * 
 * 
//  * 
//  * @param {function} testCase - The test case to run.
//  * @param {string} description - The description of the test case.
//  * @param {function} check - The function that checks the results of the test case.
//  * 
//  * @author manuelbarzi
//  * 
//  * @version 3.0.0
//  */
// function test(testCase, description, check) {
//     try {
//         var res = testCase();

//         check(res) ? console.log('TEST', description, 'TRUE', '->', res) :
//             console.warn('TEST', description, 'FALSE', '->', res);
//     } catch (err) {
//         console.error('TEST', description, 'ERROR', '->', err);
//     }
// }

// /**
//  * Wraps a test case with an error capturing function.
//  * 
//  * @param {function} testCase - The test case to run.
//  * 
//  * @returns {function} - An anonymous function that wraps the execution of the test case in a secure manner (try-catch), captures the error and returns it.
//  */
// function withErrorCapturing(testCase) {
//     return function () {
//         var error;

//         try {
//             testCase();
//         } catch (err) {
//             error = err;
//         }

//         return error;
//     };
// }

