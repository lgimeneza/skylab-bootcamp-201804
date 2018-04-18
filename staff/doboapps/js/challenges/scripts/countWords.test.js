'use strict'

 
test(function () {
    return countWords("hello my world");
}, 'CountWords("hello my world") should return 3',
    function (result) {
        return result === 3;
    });


test( withErrorCapturing(function () {
    return countWords(2);
}), 'CountWords(2) should return error',
    function (result) {
        return result.message === 'input str is not a string';
    });


test( withErrorCapturing(function () {
    return countWords(true);
}), 'CountWords(true) should return error',
    function (result) {
        return result.message === 'input str is not a string';
    });


test(withErrorCapturing(function () {
    return countWords([]);
}), 'CountWords([]) should return error',
    function (result) {
        return result.message === 'input str is not a string';
    });
    
    
    