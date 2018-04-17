'use strict';

function countChars(text, condition) {
    if (typeof text !== 'string')
        throw Error('input str is not a string');

    if (!condition) {
        return text.length;
    }

    if (typeof condition !== 'function')
        throw Error('input func is not a function');

    var count = 0;

    for (var i = 0; i < text.length; i++) {
        var val = text[i];

        if (condition(val)) count++;
    }

    return count;
}