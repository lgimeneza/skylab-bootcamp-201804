'use strict';
 
 var randomNumeral = toRandomNumeral("Hello My World"); 
 console.log('randomNumeral(Hello My World) should return ', randomNumeral.toLocaleLowerCase() === "hello my world");
 

 
 var randomNumeral = toRandomNumeral("Hello My World"); 
 console.log('randomNumeral(Hello My World) should return ', randomNumeral.toLocaleLowerCase() === "hello my world");
 


var error;


//  try {
//     randomNumeral = toRandomNumeral(true);
//  }catch(err) {
//      error = err;
//  }finally{
//     console.log('toRandomNumeral(true) should throw an error', error !== undefined, error);
//  }

//  try {
//      count = toRandomNumeral(true);
//  }catch(err) {
//      error = err;
//  }finally{
//     console.log('randomNumeral(true) should throw an error', error !== undefined, error);
//  }
 
//  try {
//     count = toRandomNumeral([]);
// }catch(err) {
//     error = err;
// }finally{
//    console.log('randomNumeral([]) should throw an error', error !== undefined, error);
// }

