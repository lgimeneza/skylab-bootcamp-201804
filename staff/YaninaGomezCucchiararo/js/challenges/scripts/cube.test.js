'use strict';

console.log('cube(3) should return 27', res === 27, res );

res = cube([1, 2, 3]);

console.log('cube([1,2,3] should return [1,4,27]', res.toString() === [1,4,27].toString(), res);

var error;

try{
    cube(true);
} catch (err) {
    error=err;
} finally {
Console.log('cube(true) shoulb throw an error', error !== undefined, error);
}

var error = undefined;

try {
    var input = cube("m");
} catch (err) {
    error = err;
} finally {
    console.log("cube('m') should throw an error", error !== undefined, error);
}

try {
    cube('');
} catch(err) {
    error = err;
} finally {
    console.log('cube("") should throw an error', error !== undefined, error);
}

function testThrowError(testCase, message) {
    try {
        testCase();
    } catch(err){
        error = err;
    } finally {
        console.log(message, error !== undefined, error);
    }
}


testThrowError(function() {
    cube('');
}, 'cube("") should throw an error');