"use strict";

// var _cube = cube([5+5, 0, 1, -2.2]);
// console.log("Cube of ([5+5, 0, 1, -2.2]) should return [1000, 0, 1, -10.648]", _cube.toString() === [1000, 0, 1, -10.648].toString(), _cube);


test(function () { return cube(3);}, "cube(3) should return 27", function(result) {return result === 27;});

test(function () { return cube([1,2,3]);}, "cube([1,2,3]) should return [1, 8, 27]", function(result) {return result.toString() === cube([1,2,3]).toString();});




function test(testCase, msg, expected) {
    try {
        var res = testCase();
        console.log(msg, res === expected, res);
    } catch (err) {
        console.error(msg, "FAILED");
    }
}

function testThrowError(testCase, msg, check) {
    var error;
    try {
        testCase();
    } catch (err) {
        error = err;
    } finally {
        console.log(msg, " should throw an error ", error != undefined, error);
    }
}


/*
try{
    _cube = cube("");
} catch (err) {
    error = err;
} finally {
    console.log('cube("") should throw an error', error !== undefined, error);
}

try {
    _cube = cube(true);
} catch(err) {
    error = err;
} finally {
    console.log("cube(true) should throw an error", error !== undefined, error);
}

error = undefined;

try {
    _cube = cube({});
} catch(err) {
    error = err;
} finally {
    console.log("cube({}) should throw an error", error !== undefined, error);
}

error = undefined;

try {
    _cube = cube([""]);
} catch(err) {
    error = err;
} finally {
    console.log('cube([""]) should throw an error', error !== undefined, error);
}*/