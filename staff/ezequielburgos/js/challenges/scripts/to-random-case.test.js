
var input = 'Hello World';

var output = toRandomCase(input);

console.log('toRandomCase(input)')


// testing our code:
'use strict';

var count = toRandomCase('Lorem ipsum dolor sit', count);
console.log(count)


var error;

try{
    count = toRandomCase(true);
}catch(err){
    error = err;
}finally{
    console.log('toRandomCase(true) should throw an error', error != undefined, error)
}

error = undefined;

try{
    count = toRandomCase(1);
}catch(err){
    error = err;
}finally{
    console.log('toRandomCase(1) should throw an error', error != undefined, error)
}

error = undefined;

try{
    count = toRandomCase([]);
}catch(err){
    error = err;
}finally{
    console.log('toRandomCase([]) should throw an error', error != undefined, error)
}

error = undefined;

