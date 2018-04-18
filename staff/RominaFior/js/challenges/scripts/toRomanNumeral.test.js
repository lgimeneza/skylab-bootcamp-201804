'use strict';
var error;
var convert= toRomanNumeral(6)

console.log(convert);

error = undefined;
try {
    convert = toRomanNumeral(' ')
} catch (err) {
    error=err;
}finally{
    console.log('toRomanNumeral(" ") should throw an error',error !== undefined, error);
}

error = undefined;
try {
    convert = toRomanNumeral([])
} catch (err) {
    error=err;
}finally{
    console.log('toRomanNumeral([]) should throw an error',error !== undefined, error);
}

error = undefined;
try {
    convert = toRomanNumeral({})
} catch (err) {
    error=err;
}finally{
    console.log('toRomanNumeral({}) should throw an error',error !== undefined, error);
}