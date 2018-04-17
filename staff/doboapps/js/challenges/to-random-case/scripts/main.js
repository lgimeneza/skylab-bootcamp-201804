'use strict';
 
 var randomNumeral = toRandomNumeral("Hello My World");
 
 console.log('randomNumeral(9) should return IX', randomNumeral === "IX" , randomNumeral);
 
var error;

 try {
     count = toRandomNumeral(true);
 }catch(err) {
     error = err;
 }finally{
    console.log('randomNumeral(true) should throw an error', error !== undefined, error);
 }
 
 try {
    count = toRandomNumeral([]);
}catch(err) {
    error = err;
}finally{
   console.log('randomNumeral([]) should throw an error', error !== undefined, error);
}

