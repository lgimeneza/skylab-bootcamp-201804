'use strict';
//var count = countChars("Hello world");

//console.log('El número de palabras en "hellow world" son: ', count === 2, count);

test(function () {
    return countChars("Hello world");
},

    'El número de palabras en "hellow world" son: ',
    function (result) {
        return result === 2;
    });

test(runWithErrorHandling(function () {
    countChars(548);
}),
    'countChars(548) should throw an error',
    function (result) {
        return result.message === 'input is not a string';
    });
