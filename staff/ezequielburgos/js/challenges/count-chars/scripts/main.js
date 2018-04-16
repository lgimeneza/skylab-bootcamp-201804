'use strict';
try{
    var count = countChars('helo');
    console.log('countChars("hello world") should return 4', count === 4, count);
} catch(err){
    console.log('countChars(true) should throw an error', err !== undefined, err);
}

// count = countChars('0123456789');
// console.log('countChars("0123456789") should return 10', count === 10, count);

try{
    count = countChars(true);
    console.log('countChars("hello world") should return 4', count === 4, count);
}catch(err) {
    console.log('countChars(true) should throw an error', err !== undefined, err);
}


// try {
//     count = countChars(1);
// } catch(err) {
//     console.log('countChars(1) should throw an error', err !== undefined, err);
// }


// try {
//     count = countChars([]);
// } catch(err) {
//     console.log('countChars([]) should throw an error', err !== undefined, err);
// }


// count = countChars('abracadabra', function(c) { return c === 'c'; });

// console.log('countChars("abracadabra") should return 5', count === 5, count);


// try {
//     count = countChars('abracadabra', '...');
// } catch(err) {
//     console.log('countChars("abracadabra", "...") should throw an error', err !== undefined, err);
// }
