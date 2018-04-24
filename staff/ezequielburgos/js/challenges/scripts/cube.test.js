'use strict';

// This first test is a SUCCESS CASE:
test(function () {
    // this corresponds "testCase" parameter:
    return cube(3);
},
    // this corresponds to "message" parameter:
    'cube(3) should return 27',
    // this corresponds to "check" parameter and returns the result (result = cube(return res)):
    function (result) {
        return result = 27;
    });


// This second test is a SUCCESS CASE:
test(function () {
    return cube([1, 2, 3]);
},
    'cube([1, 2, 3]) should return [1, 8, 27]',
    function (result) {
        return result.toString() === [1, 8, 27].toString();
    });


// This third test is a FAIL CASE:
test(runWithErrorHandling(function () {
    cube(true);
}),
    'cube(true) should throw an error',
    function (result) {
        return result.message === 'input num is not a number, neither an array';
    });


// This fourth test is a FAIL CASE:
test(runWithErrorHandling(function () {
    cube([1, 2, 'a']);
}),
    'cube([1, 2, "a"]) should throw an error',
    function (result) {
        // result.message prints the throw Error text --> aka. Error.message:
        return result.message === 'input array is not a number at index 2';
    });



/**
 * We define the test function for the numbers and arrays:
 *  
 * @param {function} testCase - executes our function, in this case "cube()"
 * @param {string} message - returns a string with the expected output
 * @param {function} check - returns a number with the expected "result" 
 */
function test(testCase, message, check) {
    try {
        // "res" executes cube() function
        var res = testCase();
        console.log('Message --> ', message, ' | Print expected result: check(res) --> ', check(res), ' | result/cube()/testCase()/res --> ', res);
    } catch (err) {
        // this prints the error you threw before 
        console.error(message, 'FAILED', err);
    }
    // this first function alone doesn't need "finally" because is for cases that work: numbers/arrays
}

/**
 * 
 * Extra function for other cases:
 * - boolean
 * - string in array
 * 
 * @param {function} func - 
 */
function runWithErrorHandling(func) {
    return function () {
        var error;

        try {
            func();
        // err is = to the Error.message we threw:
        } catch (err) {
            error = err;
        }

        return error;
    };
}