"use strict";

var count = countWords("Hello World");

console.log("countWords('Hello World') should be 2", count === 2, count);

var count = countWords("Hello litte World");

console.log("countWords('Hello little World') should be 2", count === 3, count);

var error = undefined;

var error;

try{
    count = countWords(123145167);
} catch (err) {
    error = err;
} finally {
    console.log("countWords(123145167) should throw an error", error !== undefined, error);
}

try {
    count = countWords(true);
} catch(err) {
    error = err;
} finally {
    console.log("countWords(true) should throw an error", error !== undefined, error);
}

error = undefined;

try {
    count = countWords([]);
} catch(err) {
    error = err;
} finally {
    console.log("countWords([]) should throw an error", error !== undefined, error);
}

