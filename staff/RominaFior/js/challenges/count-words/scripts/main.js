'use strict';

var count= countWords('Hello world')

console.log('countWords ("hello world" should return 2) ', count === 2, count);


try {
        count = countWords(true)
} catch (err) {
    console.log('countWords(true should throw an error)', err !== undefined, err);
}

try {
    count = countWords(false)
} catch (err) {
    console.log('countWords(true should throw an error)', err !== undefined, err);
}

try {
    count = countWords(1)
} catch (err) {
    console.log('countWords(true should throw an error)', err !== undefined, err);
}
try {
    count = countWords([])
} catch (err) {
    console.log('countWords(true should throw an error)', err !== undefined, err);
}
try {
    count = countWords({})
} catch (err) {
    console.log('countWords(true should throw an error)', err !== undefined, err);
}
