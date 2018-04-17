'use strict';
var res = toRomanNumbers(3)
   
console.log('toRomanNumbers(2)should return III', res === "III", res);

try {
    res= toRomanNumbers("f") ;
 } catch(err) {
     console.log('toRomanNumbers() should throw an error', err !== undefined, err);
 }

