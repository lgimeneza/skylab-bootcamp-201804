'use strict';
 
 var numeralRoman = toRomanNumeral(9);
 
 console.log('toRomanNumeral(9) should return IX', numeralRoman === "IX" , numeralRoman);
 
var error;
 try {
     count = toRomanNumeral(true);
 } catch(err) {
     error=err;
 }finally{
    console.log('toRomanNumeral(true) should throw an error', error !== undefined, error);
 }
 
 try {
    count = toRomanNumeral([]);
} catch(err) {
    error=err;
}finally{
    console.log('toRomanNumeral([]) should throw an error', error !== undefined, error);
 }

