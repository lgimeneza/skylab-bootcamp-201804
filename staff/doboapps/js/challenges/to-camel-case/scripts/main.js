'use strict'

var myCamelCase = toCamelCase('hello MY world');

console.log("toCamelCase('hello MY world') should return helloMyWorld", myCamelCase ==="helloMyWorld", myCamelCase);

var error;
try {
    count =  toCamelCase(true);
}catch(err) {
    error = err;
}finally{
   console.log('randomNumeral(true) should throw an error', error !== undefined, error);
}


try {
    count =  toCamelCase(1);
}catch(err) {
    error = err;
}finally{
   console.log('randomNumeral(1) should throw an error', error !== undefined, error);
}


try {
    count =  toCamelCase([]);
}catch(err) {
    error = err;
}finally{
   console.log('randomNumeral([]) should throw an error', error !== undefined, error);
}

