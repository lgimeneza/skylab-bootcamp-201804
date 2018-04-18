'use strict';

var input = [3, 6]

var output = cube(input);

console.log(output);

try {
    input = cube(true);
} catch (err) {
    console.log('cube(true) should launch an error', err !==undefined, err);
}