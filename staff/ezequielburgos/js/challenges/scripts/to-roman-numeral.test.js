'use strict';


var count = toRomanNumeral(9);
console.log('The roman numeral is: ' + count);

var error;

try {
    count = toRomanNumeral(true);
} catch (err) {
    error = err;
} finally {
    console.log('toRomanNumeral(true) should throw an error', error != undefined, error)
}

error = undefined;

try {
    count = toRomanNumeral(13);
} catch (err) {
    error = err;
} finally {
    console.log('toRomanNumeral(1) should throw an error', error != undefined, error)
}

error = undefined;

try {
    count = toRomanNumeral([]);
} catch (err) {
    error = err;
} finally {
    console.log('toRomanNumeral([]) should throw an error', error != undefined, error)
}

error = undefined;