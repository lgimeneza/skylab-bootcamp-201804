'use strict';

function toRomanNumeral(num) {
    var obj = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX',
        10: 'X'
    }

    if (typeof num !== 'number' || num > 10 || num < 0) {
        throw Error('input is not a number or not between 0 and 10')
    } else {
        var res = obj[num];
        return res;
    }
}