'use strict'; 

var count = countWords("Hello World");
console.log('countWords("hello World") should return 2', count === 2, count);


try {
  count = countWords(12);
} catch (error) {
  console.log('countWords(12) should launch an error', error !== undefined, error);
}
