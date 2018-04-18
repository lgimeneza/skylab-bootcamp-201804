'use strict'

function toCamelCase(str) {
    if (typeof str !== 'string')
        throw Error('input str is not a string');
    
    return str.split(' ').map(function (word, index){
        if (index == 0) {
            return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
        
        

    }

