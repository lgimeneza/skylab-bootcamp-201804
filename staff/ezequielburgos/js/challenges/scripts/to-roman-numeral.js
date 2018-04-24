'use strict';

/**
 * Transforms an arabic number into roman number.
 * 
 * @example
 * 
 * toRomanNumeral(5) // -> "V"; 
 *
 * @param {number} num - The number we want to transform. 
 * 
 * @throws {Error} - If input is not a number or is not contained between 1 and 10;
 * 
 * @returns {string} - The roman numeral equivalent.
 */
function toRomanNumeral(num) {
    if (num > 10 || num < 0) {
        throw Error("The number introduced must be contained in between 1 and 10!");
    } else if (typeof num !== 'number')
        throw Error('input should be a number!!');

    var obj = {
        0: 'it does not exist!',
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
    var num = obj[num.toString()];
    return num;
}
