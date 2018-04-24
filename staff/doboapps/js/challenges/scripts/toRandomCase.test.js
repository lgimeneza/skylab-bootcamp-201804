'use strict';

var input = "Hello My World";
var output = toRandomNumeral(input);
console.log('randomNumeral(Hello My World) should return input in random case ', input.toLowerCase() === output.toLowerCase() && input !==output);

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

