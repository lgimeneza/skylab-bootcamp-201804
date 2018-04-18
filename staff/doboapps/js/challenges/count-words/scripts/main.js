'use strict'

var count = countWords('hello my world');

console.log("CountWords('hello my world') should return 3",count === 3, count);

 
 

try {
    count = countWords(2);
} catch(err) {
    console.log('countChars(2) should throw an error', err !== undefined, err);
}


try {
    count = countWords(true);
} catch(err) {
    console.log('countChars(true) should throw an error', err !== undefined, err);
}


try {
    count = countWords([]);
} catch(err) {
    console.log('countChars([]) should throw an error', err !== undefined, err);
}

