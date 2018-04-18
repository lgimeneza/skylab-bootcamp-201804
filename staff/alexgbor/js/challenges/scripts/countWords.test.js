'use strict';

test(function() {
    return countWords("hello world");
},
 'countWords("Hello world") should return 2',
function(result) {
    return result===2;
});

test(runWithErrorCapturing(function () {
    return countWords(true);
}),
    'countWords(true) should throw an error.',
    function (result) {
        return result.message === "You must input a string.";
    });