'use strict';
var input = [1, 2, 3];
var output = [];



forEach(a, function(v, i, arr) {console.log(v,i,arr)});

try {
    forEach([]);
} catch (error) {
    console.log('no es una array')
}


test(
    function() {
        return countChars('0123456789');
    },
    'countChars("0123456789") should return 10',
    function(result) {
        return result === 10;
    }
);

test(
    runWithErrorCapturing(function() {
        countChars(true);
    }),
    'countChars(true) should throw an error',
    function(result) {
        return result.message === 'input text is not a string';
    }
);


