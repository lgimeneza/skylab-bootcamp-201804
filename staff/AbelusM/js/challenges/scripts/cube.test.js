'use strict';

var res = cube(3);

console.log('cube (3) should return 27', res === 27, res);

res = cube([1, 2, 3]);

console.log('cube([1,2,3]) should return [1,8,27]', res.toString() === [1, 8, 27].toString(), res);

var error;

try {
    cube(true);
} catch (err) {
    error = err;
} finally {
    console.log('cube(true) should throw an error', error !== undefined, error);
}

error = undefined

testThrowError(function () {
    cube(true);
}, 'cube("") should throw an error');

function test(function (){
return cube(3)},
 'cube(3) should return 27', 27);


function testThrowError(testCase, message) {
    var error;

    try {
        testCase();
    } catch (error) {
        error = err;

    } finally {
        console.log(message, error !== undefined, error)
    }

}





// var input = [3, 6]

// var output = cube(input);

// console.log(output);

// try {
//     input = cube(true);
// } catch (err) {
//     console.log('cube(true) should launch an error', err !==undefined, err);
// }