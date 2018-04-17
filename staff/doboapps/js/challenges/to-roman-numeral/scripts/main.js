'use strict';
 
 var numeralRoman = toRomanNumeral("9");
 
 console.log('toRomanNumeral(9) should return IX', numeralRoman === "IX" , numeralRoman);
 

 try {
     count = toRomanNumeral(true);
 } catch(err) {
     console.log('toRomanNumeral(true) should throw an error', err !== undefined, err);
 }
 
 try {
    count = toRomanNumeral([]);
} catch(err) {
    console.log('toRomanNumeral([]) should throw an error', err !== undefined, err);
}

