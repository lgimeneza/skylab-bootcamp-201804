'use strict';

var res = toRomanNumeral(5);
console.log('toRomanNumera(5) should output 5', toRomanNumeral(5) === 5, res);

try {
    var res = toRomanNumeral('');
} catch (error) {
    console.log(
        'toRomanNumera("") should throw an error',
        error !== undefined,
        error
    );
}
