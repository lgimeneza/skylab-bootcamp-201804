'use strict';


var count = randomCase("hello world");
console.log('randomCase("hello World") should return words upper case', count !== undefined, count);


try {
  count = randomCase(12);
} catch (error) {
  console.log('randomCase(12) should launch an error', error !== undefined, error);
}

