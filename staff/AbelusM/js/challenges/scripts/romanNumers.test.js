'use strict';
var toRoman = toRomanNumeral(9);

console.log(toRoman);

try {
    toRoman = toRomanNumeral(true);
} catch (err) {
    console.log('to RomanNumeral(true) should launch an error', err !==undefined, err);
}