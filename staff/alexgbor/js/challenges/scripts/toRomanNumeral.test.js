'use strict';

var roman=toRomanNumeral(1);

console.log("toRomanNumeral(1) should return 'I'", roman==="I", roman);

roman=toRomanNumeral(5);

console.log("toRomanNumeral(5) should return 'V'", roman==="V", roman);

roman=toRomanNumeral(4);

console.log("toRomanNumeral(4) should return 'IV'", roman==="IV", roman);

roman=toRomanNumeral(9);

console.log("toRomanNumeral(9) should return 'IX'", roman==="IX", roman);

var error=undefined;
try {
    roman=toRomanNumeral("1");
} catch(err) {
    error=err;
} finally {
    console.log("toRomanNumeral('1') should throw an error", error!=undefined, error);
}