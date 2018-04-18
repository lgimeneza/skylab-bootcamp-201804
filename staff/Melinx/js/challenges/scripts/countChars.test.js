'use strict';

var count = countChars('hello world');

console.log('countChars("hello world") should return 11', count === 11, count);

count = countChars('0123456789');
console.log('countChars("0123456789") should return 11', count === 10, count);

// los try/catch son BOOLEANOS, por lo tanto funcionan por tipo de valor (numero, o )

var error;

try {
    count = countChars(true);
} catch(err){
    error=err;
} finally { 
    console.log('countChars(true) should launch error', error !== undefined, error);
}

error = undefined;
try {
    count = countChars(1);
} catch(err){
    error=err;
} finally { 
    console.log('countChars(1) should launch error', error !== undefined, error);
}


//HOF
count = countChars('abracadabra',  function(c) { return c === 'a'; });
