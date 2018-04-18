'use strict';
var count= countChars('Hello world')

console.log('countWords ("hello world" should return 11) ', count === 11, count)

try {
    count = countChars(true)
} catch (err) {
    console.log('countChars(true should throw an error)', err !== undefined, err);
}

try {
    count = countChars(1)
} catch (err) {
    console.log('countChars(true should throw an error)', err !== undefined, err);
}

try {
    count = countChars([])
} catch (err) {
    console.log('countChars(true should throw an error)', err !== undefined, err);
}

count = countChars('abracadabra', function (c) {
    return c === 'a'; })

    console.log('countChars("abracadabra" shoud return 5)', count === 5, count)
