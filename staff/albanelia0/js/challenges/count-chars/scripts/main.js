'use strict'; 

var count = countChars("hello world");
console.log('countChars("hello World") should return 10', count === 10, count);

count = countChars('1234567');
console.log('countChars should return 7', count === 11, count);

// todo esto da error:
try {
  count = countChars(true);
} catch (error) {
  console.log('cointChars(true) should launch and error', error !== undefined, error);
}

try {
  count = countChars(1);
  count = countChars(2);
  count = countChars(3);
} catch (error) {
  console.log('cointChars(1) should launch and error', error !== undefined, error);
}

try {
  count = countChars([]);
} catch (error) {
  console.log('cointChars(1) should launch and error', error !== undefined, error);
}

// para contar las letras

count = countChars('abracadabra', function(c) { return c === 'a'; })
console.log("countChars('abracadabra') should return 11", count === 11, count);
