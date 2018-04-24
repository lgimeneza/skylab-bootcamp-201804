'use strict';

var str = toRandomCase(1);

console.log('toRandomCase("Hello My World") should return II', str === "I", str);

str = toRandomCase(3);

console.log('toRandomCase(8) should return VIII', str === "VIII", str);

error = undefined;

try{
    count=toRandomCase(true);
} catch(err){
    error = err;
} finally{
    console.log('toRandomCase(true) should throw an error', error !== undefined, error);
}
