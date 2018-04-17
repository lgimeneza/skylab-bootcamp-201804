'use strict';

var res = toRomanNumber(5);
console.log('toRomanNumber(5) debería devolver: V', res==="V",res);

var res = toRomanNumber(7);
console.log('toRomanNumber(7) debería devolver: VII', res==="VII",res);

var error = undefined;

try {
    res = toRomanNumber("m");
} catch (err) {
    error = err;
} finally {
    console.log('countChars("m") debería lanzar un error', error !== undefined, error);
}

