'use strict';

var str = toCamelCase('hello my world');

console.log('toCamelCase("hello my world") should return "helloMyWorld"', str === "helloMyWorld", str);

toCamelCase('hello my world');

console.log('toCamelCase("Hello My world") should return "helloMyWorld"', str === "helloMyWorld", str);

error = undefined;
try{
    count=toCamelCase(true);
} catch(err){
    error = err;
} finally{
    console.log('toCamelCase(true) should throw an error', error !== undefined, error);
}

error = undefined;
try{
    count=toCamelCase(23);
} catch(err){
    error = err;
} finally{
    console.log('toCamelCase(23) should throw an error', error !== undefined, error);
}




