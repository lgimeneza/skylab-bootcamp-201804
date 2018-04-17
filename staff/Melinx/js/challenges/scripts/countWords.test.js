'use strict';

var count = countWords('hello world');

console.log('countWords("hello world") should return 2', count === 2, count);

count = countWords('hello there world');

console.log('countWords("hello there world") should return 3', count === 3, count);



//TESTING --- queremos q el error esté definido, si nos da undefined significa que no ha captado el error. antes de cada try-catch reinicializamos el error a undefined,

error = undefined;

try{
    count=countWords(true);
} catch(err){
    console.log('countWords(true) should throw an error', err !== undefined, err);
}

