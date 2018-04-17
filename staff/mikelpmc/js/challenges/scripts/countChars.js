// Funcion para contar los caracteres
'use strict';

function countChars(str) {
    if (typeof str !== 'string') throw Error('input str is not a string');

    return str.length;
}
function filterLetter(str, letter) {
    if (typeof str !== 'string') throw Error('input str is not a string');

    return str
        .split('')
        .filter(s => s === letter)
        .join('');
}
