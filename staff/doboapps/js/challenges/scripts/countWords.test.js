'use strict'

var count = countWords('hello my world');

console.log("CountWords('hello my world') should return 3",count === 3, count);

 
 var error;

try {
    count = countWords(2);
} catch(err) {
    error =err;
}finally{
    console.log('countChars(2) should throw an error', error !== undefined, error);
}


try {
    count = countWords(true);
} catch(err) {
    error =err;
}finally{
    console.log('countChars(true) should throw an error', error !== undefined, error);
}


try {
    count = countWords([]);
} catch(err) {
    error =err;
}finally{
    console.log('countChars([]) should throw an error', error !== undefined, error);
}

