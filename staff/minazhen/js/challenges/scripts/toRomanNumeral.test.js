var romanNumb = toRomanNumeral(5);
var error = undefined;
try {
    romanNumb = toRomanNumeral([]);
} catch(err) {
    error = err;
} finally {
    console.log('toRomanNumeral([]) should throw an error', error !== undefined, error);
    error = undefined;
}
try {
    romanNumb = toRomanNumeral(true);
} catch(err) {
    error = err;
} finally {
    console.log('toRomanNumeral(true) should throw an error', error !== undefined, error);
    error = undefined;
}
try {
    romanNumb = toRomanNumeral("hola");
} catch(err) {
    error = err;
} finally {
    console.log('toRomanNumeral("hola") should throw an error', error !== undefined, error);
    error = undefined;
}

romanNumb = toRomanNumeral(3);
console.log( "In roman " , firstNumb , " is " , romanNumb);

"use strict"