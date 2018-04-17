'use strict';
/* Los comentarios son apuntes */
function countChars(str) {
    //TODO
    if (typeof str === "string")
        return str.length //integer, the number of chars

    throw Error('input is not a string') // si en vez de una string, ponemos cualquier otro tipo de variable esto envia un error en pantalla

}

function countChars(str, func) {
    if (typeof str !== 'string')
        throw Error('input str is not a string');

    if (!func) {
        return str.length;
    } else {
        if (typeof func !== 'function')
            throw Error('input func is not a function')

        var count = 0;

        for (var i = 0; i < str.length; i++) {
            var val = str[i];

            if (func(val)) count++;
        }

        return count;
    }
} 