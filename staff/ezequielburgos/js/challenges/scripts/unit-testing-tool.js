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







// 'use strict';

// /**
//  * Runs a test case unit.
//  * 
//  * @example
//  * 
//  * function fun() {
//  *      return 'Hello, World!';
//  * }
//  * 
//  * test(
//  *      function() {
//  *          return fun();
//  *      },
//  * 
//  *      'fun() should return "Hello, World!"',
//  * 
//  *      function(result) {
//  *          return result === 'Hello, World!';
//  *      }
//  * );
//  * 
//  * @param {function} testCase - The test case to run.
//  * @param {string} message - The description of the test.
//  * @param {function} check - The function that checks the results of the test.
//  * 
//  * @author manuelbarzi
//  * 
//  * @version 2.1.1
//  */
// function test(testCase, message, check) {
//     try {
//         var res = testCase();

//         check(res) ? console.log(message, 'TRUE', '->', res) :
//             console.warn(message, 'FALSE', '->', res);
//     } catch (err) {
//         console.error(message, 'ERROR', '->', err);
//     }
// }

// /**
//  * Wraps a test case with error capturing function.
//  * 
//  * @param {function} testCase - The test case to run.
//  * 
//  * @returns {function} - An anonymous function that wraps the running of the test case in a secure manner (try-catch).
//  */
// function runWithErrorCapturing(testCase) {
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