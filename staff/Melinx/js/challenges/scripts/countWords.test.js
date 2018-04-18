'use strict';

//positive-case testing:

test(
    function() {
        return countWords("hello world you\'re a bmf ");
    },
    'countChars("hello world you\'re a bmf") should return 5',
    function(result) {
        return result === 5;
    }
);

// fail-case testing:

test(
    runWithErrorCapturing(function() {
        countChars(true);
    }),
    'countChars(true) should throw an error',
    function(result) {
        return result.message === 'input text is not a string';
    }
);

test(
    runWithErrorCapturing(function() {
        countChars(1);
    }),
    'countChars(1) should throw an error',
    function(result) {
        return result.message === 'input text is not a string';
    }
);



//TESTING --- queremos q el error esté definido, si nos da undefined significa que no ha captado el error. antes de cada try-catch reinicializamos el error a undefined,

error = undefined;

try{
    count=countWords(true);
} catch(err){
    error = err;
    console.log('countWords(true) should throw an error', err !== undefined, err);
}

