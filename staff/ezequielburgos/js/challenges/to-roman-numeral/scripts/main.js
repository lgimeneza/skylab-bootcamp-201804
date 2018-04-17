'use strict';

try {
    var count = toRomanNumeral(9);
    console.log('The roman numeral is: ' + count);
} catch (err) {
    console.log('toRomanNumeral() should throw an error', err !== undefined, err);
}


try {
    var count = toRomanNumeral(true);
    console.log('The roman numeral is: ' + count);
} catch (err) {
    console.log('toRomanNumeral(true) should throw an error', err !== undefined, err);
}

try {
    var count = toRomanNumeral(900);
    console.log('The roman numeral is: ' + count);
} catch (err) {
    console.log('toRomanNumeral(900) should throw an error', err !== undefined, err);
}

try {
    var count = toRomanNumeral([]);
    console.log('The roman numeral is: ' + count);
} catch (err) {
    console.log('toRomanNumeral([]) should throw an error', err !== undefined, err);
}