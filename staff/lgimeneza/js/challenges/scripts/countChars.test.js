'use strict';

var count = countChars('hello world');

console.log('countChars("hello world") shoul return 11', count === 11, count);

try {
    count = countChars(true);
} catch (error) {
    console.log('contChars(true) should launch and error', error !== undefined, error);
}

try {
    count = countChars(1);
} catch (error) {
    console.log('contChars(1) should launch and error', error !== undefined, error);
}

try {
    count = countChars([]);
} catch (error) {
    console.log('contChars([]) should launch and error', error !== undefined, error);
}

