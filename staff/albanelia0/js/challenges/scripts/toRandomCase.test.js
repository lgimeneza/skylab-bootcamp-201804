'use strict';

var count = randomCase("Helloworld");
console.log('randomCase("hello World") should return 2', count !== undefined, count);


try {
  count = randomCase(12);
} catch (error) {
  console.log('randomCase(12) should launch an error', error !== undefined, error);
}

