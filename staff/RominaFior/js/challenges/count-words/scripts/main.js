'use strict';

var count= countWords('Hello world')

console.log('countWords ("hello world" should return 2) ', count === 2, count);


try {
    convert = toCamelCase(true)
} catch (err) {
    console.log('toCamelCase(true should throw an error)', err !== undefined, err);
}

try {
    convert = toCamelCase(false)
} catch (err) {
    console.log('toCamelCase(true should throw an error)', err !== undefined, err);
}

try {
    convert = toCamelCase(1)
} catch (err) {
    console.log('toCamelCase(true should throw an error)', err !== undefined, err);
}
try {
    convert = toCamelCase([])
} catch (err) {
    console.log('toCamelCase(true should throw an error)', err !== undefined, err);
}
try {
    convert = toCamelCase({})
} catch (err) {
    console.log('toCamelCase(true should throw an error)', err !== undefined, err);
}
