'use strict';

var count = countWords('Hello World');

console.log('There is a total of', count, 'words.');

test(
    function(){
        return countWords('Hello World');
    }, 'countWords("hello world") should return 11',
    function(result){
        return result === 2;
    }
)

test(
    runWithErrorCapturing(function(){
        countWords(true);
    }),
    'countWords(true) should throw an error',
    function(result){
        return result.message === 'input text is not a string';
    }
);

test(
    runWithErrorCapturing(function(){
        countWords([]);
    }),
    'countWords([]) should throw an error',
    function(result){
        return result.message === 'input text is not a string';
    }
);

test(
    runWithErrorCapturing(function() {
        countWords('abracadabra', '...');
    }),
    'countChars("abracadabra", "...") should throw an error',
    function(result) {
        return result.message === 'input condition is not a function';
    }
);
