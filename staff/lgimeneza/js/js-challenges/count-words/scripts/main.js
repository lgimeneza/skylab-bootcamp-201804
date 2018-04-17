'use strict';

var count = countWords('Lorem ipsum dolor sit amet consectetur adipisicing elit.');

console.log('countWords("Lorem ipsum dolor sit amet consectetur adipisicing elit.") shoul return 8', count === 8, count);

try {
    countWords(123);
} catch (error) {
    console.log('countWords(123) should launch and error,', 'Launch error?', error !== undefined, error);
}

try {
    countWords();
} catch (error) {
    console.log('countWords() should launch and error,', 'Launch error?', error !== undefined, error);
}