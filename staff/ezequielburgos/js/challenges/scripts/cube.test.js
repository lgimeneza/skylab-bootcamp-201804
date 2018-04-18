'use strict';


test(function () {
    var res = cube(3);

}, 'cube(3) should return 27', 27)

var res = cube(3); // -> 27

console.log('cube(3) should return 27', res === 27, res);

res = cube([1, 2, 3]);

console.log('cube [1,2,3] should return [1,8,27]', res.toString === [1, 8, 27].toString, res)

// var error;

// try {

// } catch (err) {
//     error = err;
// } finally {
//     console.log('cube(true) should throw an error', error !== undefined, error)
// }

testThrowError(function () {
    cube(true);
}, 'cube (true) shoud throw an error');

function test(testCase, message, expected) {
    try {
        var res = testCase();
        console.log(message, res === expected, res);
    } catch (err) {
        console.error(message, 'failed');
    }
}
function testThrowError(testCase, message) {
    var error;
    try {
        testCase();
    } catch (err) {
        error = err;
    } finally {
        console.log(message, error !== undefined, error);
    }
}
