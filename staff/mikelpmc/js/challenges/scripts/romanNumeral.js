'use strict';

function toRomanNumeral(num) {
    if (typeof num !== 'number') throw Error('input should be a number');

    return ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'][
        num - 1
    ];
}
