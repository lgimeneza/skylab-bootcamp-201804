"use strict";

var count = countChars("Hello World");

console.log("countChars('Hello World') should be 11", count === 11, count);

count = countChars("123145167", function(n) {return n=== "1";});

console.log("countChars('123145167') should be 3", count === 3, count);

var error;

try{
    count = countChars(123145167);
} catch (err) {
    error = err;
} finally {
    console.log("countChars(123145167) should throw an error", error !== undefined, error);
}

try {
    count = countChars(true);
} catch(err) {
    error = err;
} finally {
    console.log("countChars(true) should throw an error", error !== undefined, error);
}

error = undefined;

try {
    count = countChars([]);
} catch(err) {
    error = err;
} finally {
    console.log("countChars([]) should throw an error", error !== undefined, error);
}

error = undefined;

try {
    count = countChars("Hello World", "...");
} catch(err) {
    console.log("countChars('Hello World', '...') should throw an error", err !== undefined, err);
} 
    