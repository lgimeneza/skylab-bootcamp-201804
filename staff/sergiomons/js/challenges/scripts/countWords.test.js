'use strict';

test(
    function() {
        return countWords('hello world');
    },
    'countWords("hello world") should return 2',
    function(result) {
        return result === 2;
    }
);

test(
    withErrorCapturing(function() {
        countWords(true);
    }),
    'countWords(true) should throw an error',
    function(result) {
        return result.message === 'input text is not a string';
    }
);

test(
    withErrorCapturing(function() {
        countWords(1);
    }),
    'countWords(1) should throw an error',
    function(result) {
        return result.message === 'input text is not a string';
    }
);

test(
    withErrorCapturing(function() {
        countWords([]);
    }),
    'countWords([]) should throw an error',
    function(result) {
        return result.message === 'input text is not a string';
    }
);

