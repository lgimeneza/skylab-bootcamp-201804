'use strict';

var count = countChars('hello world');

console.log('countChars("hello world") should return 11', count === 11, count);

count = countChars('0123456789');
console.log('countChars("0123456789") should return 11', count === 10, count);

try {
    count = countChars(true);
} catch(err){
    console.log('countChars(true) should launch error', err !== undefined, err);
}

//HOF
count = countChars('abracadabra',  function(c) { return c === 'a'; });
