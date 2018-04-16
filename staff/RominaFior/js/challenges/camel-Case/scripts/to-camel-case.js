'use strict'

function toCamelCase(str) {
    if (typeof str !== 'string')
        throw Error('input str is not a string');
    
    return str
        .toLowerCase()
        .split(' ')
        .map(function(word) {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
    }
/* map nos devuelve un array nueva a partir de una vieja, aplicándole cambios a cada uno de los 
elementos */