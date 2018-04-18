'use strict'; 


var count = toCamelCase("hello world");
console.log('toCamelCase("hello World") should return hello World', count);


try {
  count = toCamelCase(12);
} catch (error) {
  console.log('toCamelCase(12) should launch an error', error !== undefined, error);
}
