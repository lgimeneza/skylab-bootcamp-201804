'use strict';

var count= countWords('Hello world');

console.log('countWords("hello world") should return 11', count === 2, count);

try{
    var count= countWords(true);

}catch(err) {
    console.log('countWords(true) should launch and error', err !== undefined, err);
}