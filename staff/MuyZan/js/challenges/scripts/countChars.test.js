"use strict";

var count = countChars("hello world");

console.log('countChars("hello world" should return 11', count === 11, count);

try {
  count = countChars(true);
} catch (err) {
  console.log("countChars(true) should launch and error", err !== undefined, err);
}
